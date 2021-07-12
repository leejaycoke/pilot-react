import apiClient from '../apiClient';

export const signIn = async (account: string, password: string) => {
  const res = await apiClient.post('/auth/login', {
    account: account,
    password: password,
  });

  return res;
};

export const signOut = async () => {
  const res = await apiClient.get('/auth/logout');
  sessionStorage.clear();

  return res;
};

export const getUserInfo = async () => {
  const res = await apiClient.get('/v1/users/me');

  return res;
};
