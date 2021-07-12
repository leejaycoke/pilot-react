import { CircularProgress } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUpdateEffect } from 'react-use';
import styled from 'styled-components';

import Api, { AuthResponse } from '../apis/api';
import useAsync from '../hooks/useAsync';
import Auth from '../utils/auth';
import FormButton from './FormButton';
import FormInput from './FormInput';

function LoginForm() {
  const { run: post, loading, error } = useAsync<AuthResponse>(Api.login);
  const history = useHistory();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onIdChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 4) setErrorMsg('비밀번호는 4자 이하로 입력해 주세요.');
    if (value.length <= 4 && errorMsg) setErrorMsg(null);
  };

  const onClickVisibleIcon = () => setIsPassVisible(!isPassVisible);

  const checkValidate = () => {
    if (!id) {
      setErrorMsg('아이디를 입력해 주세요.');
      return false;
    } else if (!password) {
      setErrorMsg('비밀번호를 입력해 주세요.');
      return false;
    } else if (password.length > 4) {
      setErrorMsg('비밀번호는 4자 이하로 입력해 주세요.');
      return false;
    } else return true;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!checkValidate()) return;
    if (errorMsg) setErrorMsg(null);

    const data = await post({ account: id, password });
    console.log('@@@@', data);
    if (data) history.push('/user');
  };

  useUpdateEffect(() => {
    if (error) setErrorMsg(error.response?.data?.message ?? error.message);
  }, [error]);

  console.dir(error);

  return (
    <StyledMain>
      <h1 className="a11yHidden">Login Page</h1>
      <button type="button" onClick={() => console.log(Auth.get())}>
        test
      </button>
      <StyledWrapper>
        <div>
          <StyledH2>Welcome Back</StyledH2>
          <form onSubmit={onSubmit}>
            <FormInput
              onChange={onIdChange}
              id="userId"
              label="user id"
              placeholder="Id"
              autoFocus
            />
            <StyledPassWrapper>
              <FormInput
                onChange={onPasswordChange}
                id="userPassword"
                label="user password"
                placeholder="Password"
                type={isPassVisible ? 'text' : 'password'}
                maxLength={10}
              />
              {isPassVisible ? (
                <StyledVisibilityIcon onClick={onClickVisibleIcon} />
              ) : (
                <StyledVisibilityOffIcon onClick={onClickVisibleIcon} />
              )}
            </StyledPassWrapper>
            {errorMsg && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
            <FormButton icon={loading && <CircularProgress size={14} />}>Login</FormButton>
          </form>
        </div>
      </StyledWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 460px;
  max-width: 90%;
  padding: 50px 0;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > div {
    width: 73%;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 800;
`;

const StyledPassWrapper = styled.div`
  position: relative;
  margin: 20px 0;

  svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;

const StyledVisibilityIcon = styled(VisibilityIcon)`
  path {
    color: ${({ theme }) => theme.color.main};
  }
`;

const StyledVisibilityOffIcon = styled(VisibilityOffIcon)`
  path {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const StyledErrorMsg = styled.div`
  text-align: center;
  margin-top: -8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.error};
`;

export default LoginForm;
