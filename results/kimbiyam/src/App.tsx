import { Switch, Route } from "react-router-dom";
import useCheckUserEffect from "./hooks/useCheckUserEffect";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";
import tokenStorage from "./utils/tokenStorage";

const App = () => {
  const isLoggedIn = !!tokenStorage.getToken();

  useCheckUserEffect({
    isLoggedIn: isLoggedIn,
    successPagePath: "/user/profile",
    failurePagePath: "/",
  });

  return (
    <Switch>
      <Route exact path={["/", "/login"]} component={LoginPage} />
      <Route exact path="/user/profile" component={UserProfilePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
