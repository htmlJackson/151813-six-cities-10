import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {OfferType, OffersType} from '../../types/offers';
import {CommentsType} from '../../types/comments';

import { createSelector } from '@reduxjs/toolkit';
import { Marker } from 'leaflet';

export const getOffers = (state: State): OffersType => state[NameSpace.Data].offers;
export const getCity = (state: State): string => state[NameSpace.Data].city;

export const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer?.city.name === city)
);

export const getCityLocation = createSelector(
  [getFilteredOffers, getCity],
  (offers, city) => offers.find((offer) => offer?.city.name === city)?.city.location
);

export const getCityMarkers = createSelector(
  [getFilteredOffers],
  (offers) => offers.map((offer) => offer.location)
);

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getOffer = (state: State): OfferType => state[NameSpace.Data].currentOffer;
export const getComments = (state: State): CommentsType => state[NameSpace.Data].comments;
export const getActiveCard = (state: State): Marker | null => state[NameSpace.Data].activeCard;