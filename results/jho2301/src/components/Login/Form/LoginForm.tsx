import { FormEvent } from 'react';

import Button from '../../@shared/Button/Button';
import { LoginInput, LoginTitle, StyledLoginForm, MemoryCheckboxLabel } from './LoginForm.styles';
import useLoginForm from '../../../service/hooks/useLoginForm';
import useAuth from '../../../service/hooks/useAuth';

const LoginForm = () => {
  const { form, willTokenStored, setAccount, setPassword, setWillTokenStored } = useLoginForm();
  const { login } = useAuth();

  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(form, willTokenStored);
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
      <MemoryCheckboxLabel>
        <input
          type="checkbox"
          checked={willTokenStored}
          onChange={({ target }) => setWillTokenStored(target.checked)}
        />
        로그인 기억하기
      </MemoryCheckboxLabel>
      <Button>로그인</Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
