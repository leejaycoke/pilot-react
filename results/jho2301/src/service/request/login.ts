import apiClient from '.';
import { LoginForm } from './../../types';

export const requsetLogin = (form: LoginForm) => apiClient.post<LoginForm>('/auth/login', form);

export const requestLogout = () => {};
