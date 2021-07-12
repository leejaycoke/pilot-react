import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import LoginForm from '../components/LoginForm';
import { BlueButton } from '../components/Button';

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
      </LoginForm>
    </Card>
  );
}

export default LoginPage;
