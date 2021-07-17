import React from 'react';

import LoginForm from '../components/LoginForm';
import ReactHelmet from '../components/ReactHelmet';

function LoginPage() {
  return (
    <>
      <ReactHelmet title="Login" description="Login Page" />
      <LoginForm />
    </>
  );
}

export default LoginPage;
