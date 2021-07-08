import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { requestLogin, requestLogout } from '../request/login';
import { LoginForm } from '../../types';
import { accessTokenState } from '../../state/login';
import { SESSION_STORAGE_KEY } from '../../constants/storage';

const useAuth = () => {
  const history = useHistory();
  const setAccessToken = useSetRecoilState(accessTokenState);

  const login = async (form: LoginForm) => {
    try {
      const { accessToken } = await requestLogin(form);

      setAccessToken(accessToken);
      sessionStorage.setItem(SESSION_STORAGE_KEY.ACCESS_TOKEN, accessToken);
    } catch (error) {
      alert('로그인에 실패했습니다.');
      return;
    }

    history.push('/users/me');
  };

  const logout = async () => {
    try {
      await requestLogout();
    } catch (error) {
      alert('로그아웃에 실패했습니다.');
      return;
    }

    setAccessToken('');
    history.push('/login');
  };

  return { login, logout };
};

export default useAuth;
