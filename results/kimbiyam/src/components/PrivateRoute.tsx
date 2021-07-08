import { Redirect, Route, RouteProps } from "react-router";

export type PrivateRouteProps = RouteProps & {
  isLoggedIn: boolean;
  redirect: string;
};

const PrivateRoute = ({ isLoggedIn, redirect, ...rest }: PrivateRouteProps) => {
  return isLoggedIn ? <Route {...rest} /> : <Redirect to={redirect} />;
};

export default PrivateRoute;
