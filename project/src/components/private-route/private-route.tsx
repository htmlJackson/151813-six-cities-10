import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  switch (authorizationStatus) {
    case AuthorizationStatus.NoAuth:
      return <Navigate to={AppRoute.Login} />;
      break;
    case AuthorizationStatus.Unknown:
      return <LoadingScreen />;
      break;
    default:
      return children;
      break;
  }
};

export default PrivateRoute;
