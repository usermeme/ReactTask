import * as React from 'react';
import { Coordinates } from 'types/entities';

type UseCurrentCoordinates = () => Coordinates | null;

const useCurrentCoordinates: UseCurrentCoordinates = () => {
  const [coordinates, setCoordinates] = React.useState<Coordinates | null>(
    null,
  );

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setCoordinates({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      }),
    );
  }, [setCoordinates]);

  return coordinates;
};

export default useCurrentCoordinates;
