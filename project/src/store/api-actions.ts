import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { OfferType, OffersType, HotelId } from '../types/offers.js';
import {AppRoute, APIRoute} from '../const';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {NewReviewData} from '../types/new-review-data';

import {saveToken, dropToken} from '../services/token';
import { CommentsType } from '../types/comments.js';
import { AddFavoriteType } from '../types/add-favorite-type.js';

export const fetchOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Offers);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<OffersType, HotelId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchNearOffers',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(`${APIRoute.Offers}/${hotelId}/nearby`);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(`${APIRoute.Favorite}`);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<OfferType, HotelId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffer',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${hotelId}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<CommentsType, HotelId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchComments',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentsType>(`${APIRoute.Comments}/${hotelId}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data : {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const addReviewAction = createAsyncThunk<NewReviewData, NewReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'addReview',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<NewReviewData>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    return data;
  },
);

export const addFavoriteAction = createAsyncThunk<AddFavoriteType, AddFavoriteType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'addFavorite',
  async ({hotelId, favoriteStatus}, {dispatch, extra: api}) => {
    const {data} = await api.post<AddFavoriteType>(`${APIRoute.Favorite}/${hotelId}/${favoriteStatus}`);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.delete(APIRoute.Logout);
    dropToken();
    return data;
  },
);
