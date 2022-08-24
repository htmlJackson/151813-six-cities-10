import {createAction} from '@reduxjs/toolkit';
import { OffersType } from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('changeCity');
export const fillOffers = createAction<OffersType>('fillOffers');
export const filterOffers = createAction('filterOffers');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
