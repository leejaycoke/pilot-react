import { useState, useEffect } from 'react';
import { LoginContainer } from '../components/LoginContainer';
import { store } from '../store/store';

function LoginPage(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(store.getState().user.isLoggedIn);
  }, [isLoggedIn]);
  return (
    <>
      <LoginContainer />
    </>
  );
}

export default LoginPage;
