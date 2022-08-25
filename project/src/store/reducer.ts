import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, setDataLoadedStatus, requireAuthorization} from '../store/action';
import {AuthorizationStatus} from '../const';
import { OffersType } from '../types/offers';

type InitalState = {
  city: string;
  offers: OffersType;
  filteredOffers: OffersType;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  city: '',
  offers: [],
  filteredOffers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
