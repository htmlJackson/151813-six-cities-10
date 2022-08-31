import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, citiesList, emptyOffer, sortStatusArray} from '../../const';
import {AppData} from '../../types/state';
import {fetchOfferAction, fetchOffersAction, fetchCommentsAction, fetchNearOffersAction, fetchFavoriteOffersAction} from '../api-actions';

const initialState: AppData = {
  city: citiesList[0],
  offers: [],
  nearOffers: [],
  favoriteOffers: [],
  currentOffer: emptyOffer,
  activeCard: null,
  comments: [],
  isDataLoaded: true,
  sortStatus: sortStatusArray[0].status,
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
    setSortStatus: (state, action) => {
      state.sortStatus = action.payload;
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
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const {changeCity, setActiveCard, setSortStatus} = appData.actions;
