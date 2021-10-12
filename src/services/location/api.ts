import { generatePath } from 'react-router-dom';
import { endpoints } from 'configs';
import { Location } from 'types/entities';
import { ApiRequest } from '../types';
import http from '../http';

export const fetchLocation: ApiRequest<Location> = ({ extractRouteParams }) =>
  http({
    method: 'get',
    url: generatePath(endpoints.getLocation, extractRouteParams),
  });

export const fetchLocationList: ApiRequest<{ locations: Location[] }> = ({
  extractRouteParams,
}) =>
  http({
    method: 'get',
    url: generatePath(endpoints.getLocationList, extractRouteParams),
  });
