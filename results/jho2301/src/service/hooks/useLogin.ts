import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { requestLogin } from './../request/login';
import { LoginForm } from '../../types';
import { accessTokenState } from '../../state/login';

const useLogin = () => {
  const history = useHistory();
  const setAccessToken = useSetRecoilState(accessTokenState);

  const login = async (form: LoginForm) => {
    try {
      const { accessToken } = await requestLogin(form);

      setAccessToken(accessToken);
    } catch (error) {
      alert('로그인에 실패했습니다.');
      return;
    }

    history.push('/users/me');
  };

  return { login };
};

export default useLogin;
