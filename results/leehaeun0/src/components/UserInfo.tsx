import React, { useEffect } from 'react';

import Api, { User } from '../apis/api';
import useAsync from '../hooks/useAsync';
import LoadingPage from '../pages/LoadingPage';

function UserInfo() {
  const { data, loading, error } = useAsync<User>(Api.getUser, true);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  if (loading) return <LoadingPage />;

  return (
    <main>
      {data && (
        <dl>
          <dt>account</dt>
          <dd>{data.account}</dd>

          <dt>name</dt>
          <dd>{data.name}</dd>

          <dt>level</dt>
          <dd>{data.level}</dd>
        </dl>
      )}
    </main>
  );
}

export default UserInfo;
