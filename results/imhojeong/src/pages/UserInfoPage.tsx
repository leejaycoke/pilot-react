import { useState, useEffect } from 'react';
import { UserContainer } from '../components/UserContainer';
import { store } from '../store/store';

function UserInfoPage(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(store.getState().user.isLoggedIn);
  }, [isLoggedIn]);
  return (
    <>
      <UserContainer />
    </>
  );
}

export default UserInfoPage;
