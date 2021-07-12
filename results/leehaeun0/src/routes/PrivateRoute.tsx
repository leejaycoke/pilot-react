import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

import Auth from '../utils/auth';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactChild;
  path: string;
}

function PrivateRoute({ children, path, ...rest }: PrivateRouteProps) {
  const history = useHistory();
  const accessToken = Auth.get();
  if (!accessToken) history.push('/login');

  return (
    <Route path={path} {...rest}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
