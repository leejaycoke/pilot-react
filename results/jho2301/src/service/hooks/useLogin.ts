import { useHistory } from 'react-router-dom';

import { requsetLogin } from './../request/login';
import { LoginForm } from '../../types';

const useLogin = () => {
  const history = useHistory();

  const login = async (form: LoginForm) => {
    try {
      await requsetLogin(form);
    } catch (error) {
      alert('로그인에 실패했습니다.');
      return;
    }

    history.push('/users/me');
  };

  return { login };
};

export default useLogin;
