import { lazy } from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute exact path="/user">
        <UserPage />
      </PrivateRoute>
      {'isNotLogin' ? <Redirect to="/login" /> : <Redirect to="/user" />}
    </Switch>
  );
}

export default MainRouter;
