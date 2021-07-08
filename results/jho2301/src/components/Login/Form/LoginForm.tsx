import { FormEvent } from 'react';

import Button from '../../@shared/Button/Button';
import { LoginInput, LoginTitle, StyledLoginForm } from './LoginForm.styles';
import useLoginForm from '../../../service/hooks/useLoginForm';
import useLogin from '../../../service/hooks/useLogin';

const LoginForm = () => {
  const { form, setAccount, setPassword } = useLoginForm();
  const { login } = useLogin();

  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(form);
  };

  return (
    <StyledLoginForm onSubmit={onLogin}>
      <LoginTitle>로그인</LoginTitle>
      <LoginInput
        placeholder="ID"
        value={form.account}
        onChange={({ target }) => setAccount(target.value)}
      />
      <LoginInput
        type="password"
        placeholder="P/W"
        value={form.password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button>로그인</Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
