import { getAccessToken } from '@app/_actions';
import axios, { AxiosInstance } from 'axios';
import refreshTokenController from './refreshController';

class Service {
  public axiosExtend: AxiosInstance;

  private baseURL = process.env.NEXT_PUBLIC_API_URL;

  constructor() {
    const api = axios.create({
      baseURL: this.baseURL,
    });

    api.interceptors.request.use(async (config) => {
      const newConfig = { ...config };
      const isServer = typeof window === 'undefined';

      const token = await getAccessToken();
      newConfig.headers.Authorization = token ? `Bearer ${token}` : undefined;

      if (!isServer) {
        newConfig.baseURL = '/proxy';
      }

      return newConfig;
    });

    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status !== 401 && error.response?.status !== 403) {
          return Promise.reject(error);
        }

        if (originalRequest?.url?.includes('/api/user/refresh')) {
          return Promise.reject(error);
        }

        if (originalRequest._retry) {
          return Promise.reject(error);
        }

        const retryPromise = refreshTokenController.addFailedRequest(() =>
          api.request({
            ...originalRequest,
            _retry: true,
          }),
        );

        await refreshTokenController
          .executeRefreshOnce(() => api.post('/api/user/refresh'))
          .then();

        if (refreshTokenController.isRefreshing) {
          refreshTokenController.retryFailedRequests();
        }

        return retryPromise;
      },
    );

    this.axiosExtend = api;
  }
}

export default Service;
