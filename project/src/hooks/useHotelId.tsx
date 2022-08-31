import { useAppDispatch } from '../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AsyncThunk } from '@reduxjs/toolkit';
import { HotelId } from '../types/offers';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.js';

const useHotelId = (action : AsyncThunk<any, HotelId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action(id));
  }, [action, dispatch, id]);

  return null;
};

export default useHotelId;
