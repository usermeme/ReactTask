import { Location, Coordinates } from 'types/entities';
import { RootState } from '../types';

export interface LocationState {
  loading: boolean;
  list: Location[];
}

export type GetLoading = (state: RootState) => boolean;

export type GetLocationByCoordinates = (
  coordinates: Coordinates | null,
) => (state: RootState) => Location | null;

export type GetLocationById = (
  id: number,
) => (state: RootState) => Location | null;
