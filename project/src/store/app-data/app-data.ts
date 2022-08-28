import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, citiesList} from '../../const';
import {AppData} from '../../types/state';
import {fetchOfferAction, fetchOffersAction} from '../api-actions';

const initialState: AppData = {
  city: citiesList[0],
  offers: [],
  currentOffer: null,
  isDataLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isDataLoaded = false;
      });
  }
});

export const {changeCity} = appData.actions;
