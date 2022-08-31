import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import NoPlaces from '../../components/no-places/no-places';
import PlacesFound from '../../components/places-found/places-found';

import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/app-data/selectors';

const MainPage = () => {
  const offers = useAppSelector(getSortedOffers);

  const isEmpty = offers.length === 0;
  return (
    <div
      className={`page page--gray page--main${
        isEmpty ? ' page__main--index-empty' : ''
      }`}
    >
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div
            className={`cities__places-container container${
              isEmpty ? ' cities__places-container--empty' : ''
            }`}
          >
            {isEmpty ? (
              <NoPlaces />
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesFound />
                <Sorting />
                <CardsList />
              </section>
            )}

            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
