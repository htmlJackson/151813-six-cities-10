import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { OffersType } from '../types/offers';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type AppData = {
  city: string;
  offers: OffersType;
  isDataLoaded: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
