import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserInfoPage from './pages/UserInfoPage';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/users" component={UserInfoPage} />
    </div>
  );
}

export default App;
