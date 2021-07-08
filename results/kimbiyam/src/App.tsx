import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
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
          component={UserProfilePage}
        />
      </Switch>
    </Router>
  );
};

export default App;
