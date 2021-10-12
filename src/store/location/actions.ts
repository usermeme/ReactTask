import { Location, Coordinates } from 'types/entities';
import { locationApi } from 'services/location';
import { AppThunk } from '../types';
import * as actionTypes from './actionTypes';

export const setLoading = (payload: boolean) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const setLocations = (payload: Location[]) => ({
  type: actionTypes.SET_LOCATIONS,
  payload,
});

export const fetchLocation: AppThunk<Coordinates> =
  ({ latitude, longitude }) =>
  (dispatch) => {
    dispatch(setLoading(true));

    return (
      locationApi
        .fetchLocation({
          extractRouteParams: { coordinates: `${longitude},${latitude}` },
        })
        .then((response) => dispatch(setLocations([response.data])))
        // TODO: add error reducer
        .catch(() => {})
        .finally(() => dispatch(setLoading(false)))
    );
  };

export const fetchLocationList: AppThunk<{ search: string }> =
  ({ search }) =>
  (dispatch) => {
    dispatch(setLoading(true));

    return (
      locationApi
        .fetchLocationList({ extractRouteParams: { query: search } })
        .then((response) => dispatch(setLocations(response.data.locations)))
        // TODO: add error reducer
        .catch(() => {})
        .finally(() => dispatch(setLoading(false)))
    );
  };
