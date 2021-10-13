import { TFunction } from 'i18next';
import { Weather } from 'types/entities';

export interface WeatherInformation {
  label: string;
  value: string;
}

export type GetWeatherInformation = (
  t: TFunction,
  weather: Weather,
) => WeatherInformation[];
