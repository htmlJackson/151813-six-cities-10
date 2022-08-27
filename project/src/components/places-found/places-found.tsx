import { useAppSelector } from '../../hooks';
import {getCity, filteredOffers} from '../../store/app-data/selectors';

const PlacesFound = () => {
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(filteredOffers);

  return (
    <b className="places__found">{offers.length} places to stay in {currentCity}</b>
  );
};

export default PlacesFound;
