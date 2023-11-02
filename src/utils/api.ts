import { SsrError } from '@src/types/errorTypes';
import axios, { AxiosRequestConfig, isAxiosError } from 'axios';
import { ERROR_MESSAGE } from './constants';

interface Response<T> {
  data: T | null;
  error: SsrError | null;
}

export default async function customAxios<T>(
  config: AxiosRequestConfig,
): Promise<Response<T>> {
  try {
    const res = await axios<T>(config);
    return {
      data: res.data,
      error: null,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return {
        data: null,
        error: {
          statusCode: error.response.status,
          message: error.response.statusText,
        },
      };
    }
    return {
      data: null,
      error: {
        statusCode: -1,
        message: ERROR_MESSAGE.unknown,
      },
    };
  }
}
