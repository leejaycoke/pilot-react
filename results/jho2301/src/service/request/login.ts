import apiClient from '.';
import { LoginForm } from './../../types';

export const requsetLogin = (form: LoginForm) => apiClient.post<LoginForm>(form);

export const requestLogout = () => {};
