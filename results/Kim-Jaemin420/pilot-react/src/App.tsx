import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
