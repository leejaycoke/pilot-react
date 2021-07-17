import apiClient from '../apiClient';

export class AuthApi {
  static async signIn(account: string, password: string) {
    const res = await apiClient.post('/auth/login', {
      account: account,
      password: password,
    });
    window.sessionStorage.setItem('accessToken', res.data?.accessToken);

    return res;
  }

  static async signOut() {
    const res = await apiClient.get('/auth/logout');
    sessionStorage.clear();

    return res;
  }

  static async getUserInfo() {
    const res = await apiClient.get('/v1/users/me');

    return res;
  }
}
