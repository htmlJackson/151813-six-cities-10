import { CardType } from '../../types/cards';
import { Link } from 'react-router-dom';
import { getLinkToRoom } from '../../utils';

type FavoritesCard = {
  offer: CardType;
};

const FavoritesCard = ({offer} : FavoritesCard) => {
  const {id, title, price, imgSrc, type, rating, isFavorite, isPremium} = offer;

  return (
    <article className="favorites__card place-card">
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={getLinkToRoom(id)}>
          <img
            className="place-card__image"
            src={imgSrc}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getLinkToRoom(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default FavoritesCard;
