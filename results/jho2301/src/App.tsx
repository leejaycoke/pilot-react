import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';
import UserPage from './pages/User/UserPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={['/', '/login']} component={LoginPage} exact />
        <ErrorBoundary fallback={<div>error발생!</div>}>
          <Suspense fallback={true}>
            <Route path="/users/me" component={UserPage} exact />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
