import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { CITY } from '../../mocs/city';
import { POINTS } from '../../mocs/points';
import { useAppSelector } from '../../hooks';
import { citiesList } from '../../const';
import Header from '../../components/header/header';

const MainPage = () => {
  const currentCity = useAppSelector((state) => state.city);
  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const currentMarkers = POINTS.find((point) => point.city === currentCity)?.markers || POINTS[0].markers;


  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList citiesList={citiesList} currentCity={currentCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardsList offers={filteredOffers} />
            </section>
            <div className="cities__right-section">
              <Map city={CITY} points={currentMarkers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
