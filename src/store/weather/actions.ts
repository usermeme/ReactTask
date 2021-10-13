import { weatherApi } from 'services/weather';
import { AppThunk } from '../types';
import { StoredWeather } from './types';
import * as actionTypes from './actionTypes';

export const setLoading = (payload: {
  locationId: number;
  value: boolean;
}) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const setWeather = (payload: {
  locationId: number;
  weather: StoredWeather;
}) => ({ type: actionTypes.SET_WEATHER, payload });

export const fetchWeather: AppThunk<{ locationId: number }> =
  ({ locationId }) =>
  (dispatch) => {
    dispatch(setLoading({ locationId, value: true }));

    return (
      weatherApi
        .fetchWeather({ extractRouteParams: { locationId } })
        .then((response) => {
          const updatedAt = new Date();
          const weather = { ...response.data.current, updatedAt };
          dispatch(setWeather({ locationId, weather }));
        })
        // TODO: add error reducer
        .catch(() => {})
        .finally(() => dispatch(setLoading({ locationId, value: false })))
    );
  };
