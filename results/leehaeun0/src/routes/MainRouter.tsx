import { lazy } from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../utils/auth';
import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

function MainRouter() {
  const accessToken = Auth.get();

  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute exact path="/user">
        <UserPage />
      </PrivateRoute>
      {accessToken ? <Redirect to="/user" /> : <Redirect to="/login" />}
    </Switch>
  );
}

export default MainRouter;
