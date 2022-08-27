import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, citiesList} from '../../const';
import {AppData} from '../../types/state';
import {fetchOffersAction} from '../api-actions';

const initialState: AppData = {
  city: citiesList[0],
  offers: [],
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
      });
  }
});

export const {changeCity} = appData.actions;
