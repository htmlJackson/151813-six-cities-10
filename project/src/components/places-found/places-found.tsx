import { useAppSelector } from '../../hooks';
import {getCity, getFilteredOffers} from '../../store/app-data/selectors';

const PlacesFound = () => {
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getFilteredOffers);

  return (
    <b className="places__found">{offers.length} places to stay in {currentCity}</b>
  );
};

export default PlacesFound;
