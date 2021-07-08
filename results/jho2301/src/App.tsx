import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';
import UserPage from './pages/User/UserPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={['/', '/login']} component={LoginPage} exact />
        <Route path="/users/me" component={UserPage} exact />
      </Switch>
    </div>
  );
};

export default App;
