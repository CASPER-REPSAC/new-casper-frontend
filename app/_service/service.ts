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

      if (isServer) {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const token = cookieStore.get('accessToken')?.value;

        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }
      } else {
        const token = await getAccessToken();
        newConfig.baseURL = '/proxy';
        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }
      }

      return newConfig;
    });

    this.axiosExtend = api;
  }
}

export default Service;
