import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} component={LoginPage} />
        <Route path="/user/profile" component={UserProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;
