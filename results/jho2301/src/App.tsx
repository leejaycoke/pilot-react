import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginPage from './pages/Login/LoginPage';
import UserPage from './pages/User/UserPage';
import { accessTokenState } from './state/login';

const App = () => {
  const accessToken = useRecoilValue(accessTokenState);

  return (
    <div>
      <Switch>
        <PrivateRoute
          path={['/', '/login']}
          component={LoginPage}
          exact
          isAuthed={!accessToken}
          redirectTo="/users/me"
        />
        <ErrorBoundary fallback={<div>error발생!</div>}>
          <Suspense fallback={true}>
            <PrivateRoute
              path="/users/me"
              component={UserPage}
              isAuthed={!!accessToken}
              redirectTo="/login"
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
