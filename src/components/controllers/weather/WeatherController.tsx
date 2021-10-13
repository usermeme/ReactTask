import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from 'hooks';
import { weatherActions, WeatherTypes, weatherSelectors } from 'store/weather';
import { getDateDifference } from 'utils';
import { MAX_DIFFERENCE } from 'constants/time';

interface WeatherControllerProps {
  locationId: number;
  children: (props: {
    loading: boolean;
    weather: WeatherTypes.StoredWeather | null;
  }) => React.ReactElement;
}

const WeatherController: React.FC<WeatherControllerProps> = ({
  locationId,
  children,
}) => {
  const dispatch = useDispatch();

  const loading = useSelector(weatherSelectors.getLoading(locationId));
  const weather = useSelector(
    weatherSelectors.getWeather(locationId),
    shallowEqual,
  );

  const shouldUpdate =
    !weather ||
    getDateDifference(weather.updatedAt, new Date()) > MAX_DIFFERENCE;

  React.useEffect(() => {
    if (shouldUpdate) {
      dispatch(weatherActions.fetchWeather({ locationId }));
    }
  }, [dispatch, locationId, shouldUpdate]);

  return children({ loading, weather });
};

export default WeatherController;
