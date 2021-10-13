import * as Types from './types';

export const getLoading: Types.GetLoadingByLocationId =
  (locationId) => (state) =>
    Boolean(state.weather[locationId]?.loading);

export const getWeather: Types.GetWeatherByLocationId =
  (locationId) => (state) =>
    state.weather[locationId]?.data || null;
