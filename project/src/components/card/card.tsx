import { OfferType } from '../../types/offers';
import { Link, useNavigate } from 'react-router-dom';
import { getLinkToRoom } from '../../utils';
import {useAppDispatch} from '../../hooks';
import {setActiveCard} from '../../store/app-data/app-data';
import { MouseEvent, useState } from 'react';
import { AddFavoriteType } from '../../types/add-favorite-type';
import { addFavoriteAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import {AppRoute} from '../../const';


type CardProps = {
  offer: OfferType;
  addClass?: string;
  isFavoriteCard?: boolean;
  disableFavorite?: boolean;
};

const Card = ({offer, addClass = 'cities', isFavoriteCard = false, disableFavorite = false} : CardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id, title, price, type, rating, isFavorite, isPremium, previewImage, location} = offer;

  const [favState, setFavState] = useState(isFavorite);

  const handleMouseEnter = () => {
    dispatch(setActiveCard(location));
  };

  const handleFavoriteClick = (evt: MouseEvent) => {
    evt.preventDefault();

    if (disableFavorite) {
      return navigate(AppRoute.Login);
    }

    setFavState(!favState);
    onFavoriteClick({
      hotelId: id,
      favoriteStatus: +!favState,
    });
  };

  const onFavoriteClick = (addFavorite: AddFavoriteType) => {
    dispatch(addFavoriteAction(addFavorite));
    setTimeout(() => dispatch(fetchFavoriteOffersAction()), 100);
  };

  return (
    <article
      className={`${addClass}__card place-card`}
      onMouseEnter={handleMouseEnter}
    >

      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }

      <div className={`${addClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={getLinkToRoom(id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoriteCard ? 150 : 260}
            height={isFavoriteCard ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${isFavoriteCard ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${favState && !disableFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getLinkToRoom(id)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Card;
