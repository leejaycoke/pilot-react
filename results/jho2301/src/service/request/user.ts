import apiClient from '.';
import { User } from '../../types';

export const requestGetUserInfo = (accessToken: string) => {
  return apiClient.get<User>('/v1/users/me', accessToken);
};
