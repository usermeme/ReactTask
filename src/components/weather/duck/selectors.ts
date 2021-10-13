import * as Types from './types';

export const getWeatherInformation: Types.GetWeatherInformation = (
  t,
  weather,
) => [
  {
    label: t('real_feel'),
    value: `${weather.feelsLikeTemp}°C`,
  },
  {
    label: t('rel_humidity'),
    value: `${Math.round(weather.relHumidity)}%`,
  },
  {
    label: t('wind'),
    value: `${weather.windSpeed} m/s, ${weather.windDirString}`,
  },
  {
    label: t('wind_gust'),
    value: `${weather.windGust} m/s`,
  },
  {
    label: t('dew_point'),
    value: `${weather.dewPoint}°C`,
  },
  {
    label: t('precip_prob'),
    value: `${Math.round(weather.precipProb)}%`,
  },
  {
    label: t('cloudiness'),
    value: `${Math.round(weather.cloudiness)}%`,
  },
  {
    label: t('thunder_prob'),
    value: `${Math.round(weather.precipProb)}%`,
  },
  {
    label: t('uv_index'),
    value: `${weather.precipProb}`,
  },
  {
    label: t('pressure'),
    value: `${weather.pressure} hPa`,
  },
  {
    label: t('visibility'),
    value: `${weather.precipProb} m`,
  },
];
