import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";
import tokenStorage from "./utils/tokenStorage";

const App = () => {
  const isLoggedIn = !!tokenStorage.getToken();

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={LoginPage} />
        <PrivateRoute
          isLoggedIn={isLoggedIn}
          exact
          path="/user/profile"
          redirect="/"
          component={UserProfilePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
