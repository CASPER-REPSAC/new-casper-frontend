import { getAccessToken } from '@app/_actions';
import axios, { AxiosInstance } from 'axios';

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

    this.axiosExtend = api;
  }
}

export default Service;
