import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, setDataLoadedStatus} from '../store/action';
import { OffersType } from '../types/offers';

type InitalState = {
  city: string;
  offers: OffersType;
  filteredOffers: OffersType;
  isDataLoaded: boolean;
}

const initialState: InitalState = {
  city: '',
  offers: [],
  filteredOffers: [],
  isDataLoaded: false,
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
    });
});

export {reducer};
