import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import Auth from '../utils/auth';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactChild;
  path: string;
  redirect: string;
}

function PrivateRoute({ children, path, redirect, ...rest }: PrivateRouteProps) {
  const accessToken = Auth.get();

  return (
    <Route path={path} {...rest}>
      {accessToken ? children : <Redirect to={redirect} />}
    </Route>
  );
}

export default PrivateRoute;
