import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { OffersType } from '../types/offers.js';
import {APIRoute, citiesList} from '../const';
import {changeCity, fillOffers, setDataLoadedStatus} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(fillOffers(data));
    dispatch(changeCity(citiesList[0]));
    dispatch(setDataLoadedStatus(false));
  },
);
