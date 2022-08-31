import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferType, OffersType } from '../../types/offers';
import { CommentsType } from '../../types/comments';

import { createSelector } from '@reduxjs/toolkit';
import { Marker } from 'leaflet';

export const getOffers = (state: State): OffersType =>
  state[NameSpace.Data].offers;
export const getCity = (state: State): string => state[NameSpace.Data].city;

export const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer?.city.name === city)
);

export const getFavoriteOffers = (state: State): OffersType =>
  state[NameSpace.Data].favoriteOffers;

export const getFavoriteCities = createSelector(
  [getFavoriteOffers],
  (offers) => [...new Set(offers.map((offer) => offer.city.name))]
);

export const getCityLocation = createSelector(
  [getFilteredOffers, getCity],
  (offers, city) =>
    offers.find((offer) => offer?.city.name === city)?.city.location
);

export const getSortStatus = (state: State): string =>
  state[NameSpace.Data].sortStatus;

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortStatus],
  (offers, status) => {
    switch (status) {
      case 'popular':
        return [...offers];
        break;
      case 'price-from-low':
        return [...offers].sort((offer, nextOffer) => offer.price - nextOffer.price);
        break;
      case 'price-from-high':
        return [...offers].sort((offer, nextOffer) => nextOffer.price - offer.price);
        break;
      case 'rating-from-high':
        return [...offers].sort(
          (offer, nextOffer) => nextOffer.rating - offer.rating
        );
        break;
      default:
        return offers;
        break;
    }
  }
);

export const getCityMarkers = createSelector([getFilteredOffers], (offers) =>
  offers.map((offer) => offer.location)
);

export const getLoadedDataStatus = (state: State): boolean =>
  state[NameSpace.Data].isDataLoaded;
export const getOffer = (state: State): OfferType =>
  state[NameSpace.Data].currentOffer;
export const getComments = (state: State): CommentsType =>
  state[NameSpace.Data].comments;
export const getActiveCard = (state: State): Marker | null =>
  state[NameSpace.Data].activeCard;

export const getNearOffers = (state: State): OffersType =>
  state[NameSpace.Data].nearOffers;

export const getNearCityMarkers = createSelector([getNearOffers], (offers) =>
  [...offers].map((offer) => offer.location)
);
