import Card from '../card/card';
import { useAppSelector } from '../../hooks';
import {getFilteredOffers} from '../../store/app-data/selectors';

const CardsList = () => {
  const offers = useAppSelector(getFilteredOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card offer={offer} key={`key-${offer?.id}-${offer?.previewImage}`} />)
      }
    </div>
  );
};

export default CardsList;
