import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page-not-found/page-not-found';

import {AppRoute, AuthorizationStatus} from '../../const';

type AppProps = {
  cardsCount: number;
}

const App = ({cardsCount} : AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage cardsCount={cardsCount} />}
      />
      <Route
        path={AppRoute.Login}
        element={<Login />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
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

export default App;
