import Card from '../card/card';
import { useAppSelector } from '../../hooks';
import {getSortedOffers} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';

const CardsList = () => {
  const offers = useAppSelector(getSortedOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card offer={offer} addClass={'cities'} key={`key-${offer?.id}-${offer?.previewImage}`} disableFavorite={authorizationStatus === AuthorizationStatus.NoAuth} />)
      }
    </div>
  );
};

export default CardsList;
