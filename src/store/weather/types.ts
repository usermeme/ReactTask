import { Weather } from 'types/entities';
import { WithUpdatedAt } from 'types/utils';
import { RootState } from '../types';

export type StoredWeather = WithUpdatedAt<Weather>;

export interface WeatherState {
  [locationId: number]: { loading: boolean; data: StoredWeather | null };
}

export type GetLoadingByLocationId = (
  locationId: number,
) => (state: RootState) => boolean;

export type GetWeatherByLocationId = (
  locationId: number,
) => (state: RootState) => StoredWeather | null;
