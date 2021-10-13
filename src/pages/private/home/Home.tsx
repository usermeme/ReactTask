import * as React from 'react';
import { shallowEqual } from 'react-redux';
import * as Components from 'components';
import {
  useCurrentCoordinates,
  useDispatch,
  useSelector,
  useTranslation,
} from 'hooks';
import { locationActions, locationSelectors } from 'store/location';

const Home: React.FC = () => {
  const { t } = useTranslation('weather');
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
    <>
      <Components.VisuallyHidden>
        <Components.Typography variant="h1">
          {t('weather_details')}
        </Components.Typography>
      </Components.VisuallyHidden>
      <Components.WeatherController locationId={location.id}>
        {({ loading, weather }) => (
          <Components.Weather
            city={location.name}
            country={location.country}
            loading={loading}
            weather={weather}
          />
        )}
      </Components.WeatherController>
    </>
  );
};

export default Home;
