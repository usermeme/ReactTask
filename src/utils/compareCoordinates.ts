import { Coordinates } from 'types/entities';

type CompareCoordinates = (first: Coordinates, second: Coordinates) => boolean;

const compareCoordinates: CompareCoordinates = (first, second) =>
  Math.round(first.latitude) === Math.round(second.latitude) &&
  Math.round(first.longitude) === Math.round(second.longitude);

export default compareCoordinates;
