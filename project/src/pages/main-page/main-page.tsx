import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import PlacesFound from '../../components/places-found/places-found';

const MainPage = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound />
              <Sorting />
              <CardsList />
            </section>
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
