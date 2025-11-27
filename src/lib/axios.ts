import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const createHttpClient = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  return {
    get: <T>({
      path,
      options,
    }: {
      path: string;
      options?: AxiosRequestConfig;
    }): Promise<AxiosResponse<T>> => {
      return api.get<T>(path, options);
    },
    post: <T>({
      path,
      body,
      options,
    }: {
      path: string;
      body: unknown;
      options?: AxiosRequestConfig;
    }): Promise<AxiosResponse<T>> => {
      return api.post<T>(path, body, options);
    },
    put: <T>({
      path,
      body,
      options,
    }: {
      path: string;
      body: unknown;
      options?: AxiosRequestConfig;
    }): Promise<AxiosResponse<T>> => {
      return api.put<T>(path, body, options);
    },
    patch: <T>({
      path,
      body,
      options,
    }: {
      path: string;
      body: unknown;
      options?: AxiosRequestConfig;
    }): Promise<AxiosResponse<T>> => {
      return api.patch<T>(path, body, options);
    },
    delete: <T>({
      path,
      options,
    }: {
      path: string;
      options?: AxiosRequestConfig;
    }): Promise<AxiosResponse<T>> => {
      return api.delete<T>(path, options);
    },
  } as const;
};

export const clientHttp = createHttpClient();
