import * as React from 'react';
import { shallowEqual } from 'react-redux';
import * as Components from 'components';
import { useCurrentCoordinates, useDispatch, useSelector } from 'hooks';
import { locationActions, locationSelectors } from 'store/location';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const coordinates = useCurrentCoordinates();

  const loading = useSelector(locationSelectors.getLoading);
  const location = useSelector(
    locationSelectors.getLocationByCoordinates(coordinates),
    shallowEqual,
  );

  React.useEffect(() => {
    if (!location && coordinates) {
      dispatch(locationActions.fetchLocation(coordinates));
    }
  }, [dispatch, location, coordinates]);

  if (loading || !location) {
    // TODO: change to spinner
    return null;
  }

  return (
    <Components.WeatherController locationId={location.id}>
      {() => {
        return <div />;
      }}
    </Components.WeatherController>
  );
};

export default Home;
