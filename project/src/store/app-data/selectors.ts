import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {OffersType} from '../../types/offers';
import { createSelector } from '@reduxjs/toolkit';

export const getOffers = (state: State): OffersType => state[NameSpace.Data].offers;
export const getCity = (state: State): string => state[NameSpace.Data].city;

export const filteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;