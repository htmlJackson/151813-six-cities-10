import { getCity } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';

const NoPlaces = () => {
  const currentCity = useAppSelector(getCity);
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {currentCity}
        </p>
      </div>
    </section>
  );
};

export default NoPlaces;
