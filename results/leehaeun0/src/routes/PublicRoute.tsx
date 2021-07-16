import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import Auth from '../utils/auth';

interface PublicRouteProps extends RouteProps {
  children: React.ReactChild;
  path: string;
  redirect: string;
}

function PublicRoute({ children, path, redirect, ...rest }: PublicRouteProps) {
  const accessToken = Auth.get();

  return (
    <Route path={path} {...rest}>
      {!accessToken ? children : <Redirect to={redirect} />}
    </Route>
  );
}

export default PublicRoute;
