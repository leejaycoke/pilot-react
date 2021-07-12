import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import LoginForm from '../components/LoginForm';
import { BlueButton } from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

function LoginPage() {
  return (
    <Card>
      <LoginForm>
        <label htmlFor="account">Username</label>
        <Input type="text" name="account" id="account" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" id="password" />
        <footer>
          <BlueButton type="submit">submit</BlueButton>
        </footer>
        {/* FIXME :: error가 true일시 메세지 노출하도록 수정 */}
        <ErrorMessage>1~4글자만 입력할 수 있습니다.</ErrorMessage>
      </LoginForm>
    </Card>
  );
}

export default LoginPage;
