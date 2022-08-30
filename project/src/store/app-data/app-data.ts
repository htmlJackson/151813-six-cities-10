import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, citiesList, emptyOffer} from '../../const';
import {AppData} from '../../types/state';
import {fetchOfferAction, fetchOffersAction, fetchCommentsAction} from '../api-actions';

const initialState: AppData = {
  city: citiesList[0],
  offers: [],
  currentOffer: emptyOffer,
  activeCard: null,
  comments: [],
  isDataLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
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
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

export const {changeCity, setActiveCard} = appData.actions;
