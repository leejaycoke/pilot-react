import useInputChange from '../hooks/useInputChange';
import { LoginData } from '../FetchData/LoginData';
import { useState } from 'react';
import HttpFetch from '../FetchData/HttpFetch';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [account, accountChange] = useInputChange('');
  const [password, passwordChange] = useInputChange('');
  const [error, setError] = useState('');

  const PostFetch = new HttpFetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, new LoginData(account, password));

  const onClick = async () => {
    const res = await PostFetch.PostFetch();
    if (res.code) setError(res.message);
    else {
      sessionStorage.setItem('token', res.accessToken);
      history.push('/');
    }
  };

  return (
    <>
    <input type='text' onChange={accountChange} />
    <input type='password' onChange={passwordChange} />
    <button onClick={onClick}>로그인</button>
      <span>{error}</span>
    </>
  );
};

export default Login;
