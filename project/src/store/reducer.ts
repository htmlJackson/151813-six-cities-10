import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocs/city';
import {offers} from '../mocs/offers';

const initialState = {
  city: CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  // builder
  //   .addCase(incrementStep, (state) => {
  //     state.step = state.step + STEP_COUNT;
  //   });
});

export {reducer};