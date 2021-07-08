import { Route } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';

const App = () => {
  return (
    <div>
      <Route path={['/', '/login']} exact component={LoginPage} />
    </div>
  );
};

export default App;
