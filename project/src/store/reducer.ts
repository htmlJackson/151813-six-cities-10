import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocs/offers';
import {changeCity} from '../store/action';

const initialState = {
  city: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
