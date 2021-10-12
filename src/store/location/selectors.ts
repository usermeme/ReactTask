import { compareCoordinates } from 'utils';
import * as Types from './types';

export const getLoading: Types.GetLoading = (state) => state.location.loading;

export const getLocationByCoordinates: Types.GetLocationByCoordinates =
  (coords) => (state) =>
    (coords &&
      state.location.list.find((item) =>
        compareCoordinates(coords, { latitude: item.lat, longitude: item.lon }),
      )) ||
    null;

export const getLocationById: Types.GetLocationById = (id) => (state) =>
  state.location.list.find((item) => item.id == id) || null;
