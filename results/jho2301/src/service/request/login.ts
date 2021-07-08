import apiClient from '.';

import { LoginForm } from './../../types';

export const requestLogin = (form: LoginForm): Promise<{ accessToken: string }> =>
  apiClient.post<LoginForm>('/auth/login', form);

export const requestLogout = () => apiClient.get('/auth/logout');
