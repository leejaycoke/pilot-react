import axios, { AxiosInstance } from 'axios';

import { AsyncFc } from '../hooks/useAsync';
import Auth from '../utils/auth';

export type AuthResponse = {
  accessToken: string;
};

export type User = {
  id: number;
  account: string;
  name: string;
  level: number;
};

class Api {
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      timeout: 1000,
    });
  }

  public login: AsyncFc<AuthResponse> = async (config, payload) => {
    const response = await this.apiClient.post('/auth/login', payload, config);

    console.log('login response: ', response);
    Auth.set(response.data.accessToken);
    return response.data;
  };

  public logout: AsyncFc<string> = async (config) => {
    const response = await this.apiClient.get('/auth/logout', config);

    Auth.remove();
    return response.data;
  };

  public getUser: AsyncFc<User> = async (config): Promise<User> => {
    const response = await this.apiClient.get('/v1/users/me', config);

    console.log('getUser response: ', response);
    return response.data;
  };
}

export default new Api();
