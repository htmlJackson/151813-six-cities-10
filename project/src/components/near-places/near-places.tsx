import Card from '../card/card';
import { useAppSelector } from '../../hooks';
import { getNearOffers } from '../../store/app-data/selectors';
import useHotelId from '../../hooks/useHotelId';
import { fetchNearOffersAction } from '../../store/api-actions';

const NearPlaces = () => {
  useHotelId(fetchNearOffersAction);
  const offers = useAppSelector(getNearOffers);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <Card
            offer={offer}
            addClass={'near-places'}
            key={`key-${offer?.id}-${offer?.previewImage}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NearPlaces;
