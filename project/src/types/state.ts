import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { OfferType, OffersType } from '../types/offers';
import { CommentsType } from './comments';
import { Marker } from 'leaflet';

export type UserProcess = {
  user: UserData;
  authorizationStatus: AuthorizationStatus;
};

export type UserData = {
  avatarUrl?: string;
  email?: string;
  id?: number;
  isPro?: boolean;
  name?: string;
  token?: string;
};

export type AppData = {
  city: string;
  offers: OffersType;
  currentOffer: OfferType;
  activeCard: Marker | null;
  comments: CommentsType;
  isDataLoaded: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
