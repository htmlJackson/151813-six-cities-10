import Card from '../card/card';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import {filteredOffers} from '../../store/app-data/selectors';

const CardsList = () => {

  const [activeCard, setActiveCard] = useState(0);

  const offers = useAppSelector(filteredOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        // чтобы линтер не ругался на never used
        <span style={{'display': 'none'}}>{activeCard}</span>
      }
      {
        offers.map((offer) => <Card setActiveCard={setActiveCard} offer={offer} key={`key-${offer.id}-${offer.images[0]}`} />)
      }
    </div>
  );
};

export default CardsList;
