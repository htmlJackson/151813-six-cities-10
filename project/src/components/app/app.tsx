import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';

import { OffersType } from '../../types/cards';

type AppProps = {
  offers: OffersType;
  citiesList: string[];
}

const App = ({offers, citiesList} : AppProps): JSX.Element => {
  const currentCity = useAppSelector((state) => state.city);

  const currentOffers = offers.find((offer) => offer.city === currentCity)?.cards || offers[0].cards;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offers={currentOffers} citiesList={citiesList} currentCity={currentCity} />}
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
              <Favorites offers={currentOffers} />
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
