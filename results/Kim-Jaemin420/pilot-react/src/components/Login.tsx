import useInputChange from '../hooks/useInputChange';
import { LoginData } from '../FetchData/LoginData';
import { useState } from 'react';
import HttpFetch from '../FetchData/HttpFetch';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import CommonBtn from './common/CommonBtn';

const LoginWrapper = styled.form`
  width: 500px;
  height: 500px;
  margin: 200px auto;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
`;

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
    <LoginWrapper>
      <h1 style={{ marginBottom: 10 }}>로그인</h1>
      <label className='a11y-hidden' htmlFor='account'>아이디</label>
      <Input
        placeholder='Enter your id'
        prefix={<UserOutlined className='site-form-item-icon' />}
        onChange={accountChange}
        style={{marginBottom: 20}}
        onPressEnter={onClick}
        id='account'
      />
      <label className='a11y-hidden' htmlFor='password'>비밀번호</label>
      <Input.Password
        placeholder='Enter your passwrod'
        prefix={<LockOutlined />}
        onChange={passwordChange}
        onPressEnter={onClick}
        id='password'
      />
      <CommonBtn style={{ margin: '30px auto'}} onClick={onClick}>로그인</CommonBtn>
      <span data-testid='error'>{error}</span>
    </LoginWrapper>
  );
};

export default Login;
