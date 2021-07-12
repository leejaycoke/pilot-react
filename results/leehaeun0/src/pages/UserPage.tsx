import React from 'react';

import ReactHelmet from '../components/ReactHelmet';
import UserInfo from '../components/UserInfo';

function UserPage() {
  return (
    <>
      <ReactHelmet title="User List" description="User List Page" />
      <UserInfo />
    </>
  );
}

export default UserPage;
