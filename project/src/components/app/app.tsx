import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';

import LoadingScreen from '../loading-screen/loading-screen';


type AppProps = {
  citiesList: string[];
}

const App = ({citiesList} : AppProps): JSX.Element => {

  const {isDataLoaded} = useAppSelector((state) => state);

  const currentCity = useAppSelector((state) => state.city);


  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage citiesList={citiesList} currentCity={currentCity} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
