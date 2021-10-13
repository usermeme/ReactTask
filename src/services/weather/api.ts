import { generatePath } from 'react-router-dom';
import { endpoints } from 'configs';
import { Weather } from 'types/entities';
import { ApiRequest } from '../types';
import http from '../http';

export const fetchWeather: ApiRequest<{ current: Weather }> = ({
  extractRouteParams,
}) =>
  http({
    method: 'get',
    url: generatePath(endpoints.getWeather, extractRouteParams),
  });
