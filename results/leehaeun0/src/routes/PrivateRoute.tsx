import React from 'react';
import { Route, useHistory } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactChild;
  path: string;
};

function PrivateRoute({ children, path, ...rest }: PrivateRouteProps) {
  const history = useHistory();
  if ('isNotLogin') history.push('/login');

  return (
    <Route path={path} {...rest}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
