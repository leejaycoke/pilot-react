import { useHistory } from 'react-router-dom';

import { requsetLogin } from './../request/login';
import { LoginForm } from '../../types';

const useLogin = () => {
  const history = useHistory();
  const login = async (form: LoginForm) => {
    try {
      await requsetLogin(form);
    } catch (error) {
      alert(error.message);
      return;
    }

    history.push('/users/me');
    console.log('hihohi');
  };

  return { login };
};

export default useLogin;
