import Header from '../../components/header/header';
import Reviews from '../../components/reviews/reviews';
import { getOffer } from '../../store/app-data/selectors';
import { fetchOfferAction } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks';
import useHotelId from '../../hooks/useHotelId';
import Gallery from '../../components/gallery/gallery';
import Rating from '../../components/rating/rating';
import User from '../../components/user/user';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import useScrollToTop from '../../hooks/useScrollToTop';
import { MouseEvent, useState } from 'react';
import { AddFavoriteType } from '../../types/add-favorite-type';
import { addFavoriteAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import {AppRoute} from '../../const';
import { useNavigate } from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';

const Room = () => {
  useHotelId(fetchOfferAction);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hotelData = useAppSelector(getOffer);

  const {
    id,
    title,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    location,
  } = hotelData;

  const [favState, setFavState] = useState(isFavorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleFavoriteClick = (evt: MouseEvent) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NoAuth) {
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

  useScrollToTop();

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button button${
                    favState ? ' place-card__bookmark-button--active' : ''
                  }`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <Rating addClass={'property'} value={rating} showValue />

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedroom${bedrooms > 1 && 's'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((goodsItem) => (
                    <li
                      className="property__inside-item"
                      key={`goods-${goodsItem}`}
                    >
                      {goodsItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <User user={host} addClass={'property'} />
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <Reviews />
            </div>
          </div>
          <Map addClass='property' nearOnly currentOfferLocation={location} />
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
};

export default Room;
