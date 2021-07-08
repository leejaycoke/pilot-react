import { Redirect, Route, RouteProps } from "react-router";

export type PrivateRouteProps = RouteProps & {
  isLoggedIn: boolean;
};

const PrivateRoute = ({ isLoggedIn, ...rest }: PrivateRouteProps) => {
  return isLoggedIn ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
