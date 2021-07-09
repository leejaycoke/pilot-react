import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserInfoPage from '../pages/UserInfoPage';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage}></Route>
      <Route path="/user" component={UserInfoPage}></Route>
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);
