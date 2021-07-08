import { FormEvent } from 'react';
import Button from '../../@shared/Button/Button';
import { LoginInput, LoginTitle, StyledLoginForm } from './LoginForm.styles';

const LoginForm = () => {
  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledLoginForm onSubmit={onLogin}>
      <LoginTitle>로그인</LoginTitle>
      <LoginInput placeholder="ID" />
      <LoginInput placeholder="P/W" type="password" />
      <Button>로그인</Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
