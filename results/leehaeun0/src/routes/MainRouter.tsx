import { lazy } from '@loadable/component';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Auth from '../utils/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

function MainRouter() {
  const accessToken = Auth.get();

  return (
    <Switch>
      <PublicRoute exact path="/login" redirect="/user">
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path="/user" redirect="/login">
        <UserPage />
      </PrivateRoute>
      {accessToken ? <Redirect to="/user" /> : <Redirect to="/login" />}
    </Switch>
  );
}

export default MainRouter;
