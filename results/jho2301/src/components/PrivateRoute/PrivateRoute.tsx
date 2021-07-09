import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuthed: boolean;
  redirectTo: string;
}

const PrivateRoute = ({ isAuthed, redirectTo, ...props }: PrivateRouteProps) => {
  return isAuthed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default PrivateRoute;
