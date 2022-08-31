import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import {
  getFavoriteOffers,
  getFavoriteCities,
} from '../../store/app-data/selectors';

const Favorites = () => {
  const offers = useAppSelector(getFavoriteOffers);
  const favoriteCities = useAppSelector(getFavoriteCities);

  const isEmpty = offers.length === 0;

  return (
    <div className={`page ${isEmpty ? ' page--favorites-empty' : ''}`}>
      <Header />
      <main
        className={`page__main page__main--favorites${
          isEmpty ? ' page__main--favorites-empty' : ''
        }`}
      >
        <div className="page__favorites-container container">
          {isEmpty ? (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city) => (
                  <li className="favorites__locations-items" key={`key-locations-${city}`}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offers.map((offer) => (
                        offer.city.name === city &&
                        <Card
                          addClass="favorites"
                          isFavoriteCard
                          offer={offer}
                          key={`key-${offer.id}-${offer.previewImage}`}
                        />
                      ))}
                    </div>
                  </li>
                )
                )}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
