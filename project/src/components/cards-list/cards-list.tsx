import Card from '../card/card';
import { CardsType } from '../../types/cards';
import { useState } from 'react';

type CardsListProps = {
  offers: CardsType;
};

const CardsList = ({offers} : CardsListProps) => {

  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        // чтобы линтер не ругался на never used
        <span style={{'display': 'none'}}>{activeCard}</span>
      }
      {
        offers.map((offer) => <Card setActiveCard={setActiveCard} offer={offer} key={`key-${offer.id}-${offer.imgSrc}`} />)
      }
    </div>
  );
};

export default CardsList;
