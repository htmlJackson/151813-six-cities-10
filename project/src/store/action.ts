import {createAction} from '@reduxjs/toolkit';
import { OffersType } from '../types/offers';

export const changeCity = createAction<string>('changeCity');
export const fillOffers = createAction<OffersType>('fillOffers');
export const filterOffers = createAction('filterOffers');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
