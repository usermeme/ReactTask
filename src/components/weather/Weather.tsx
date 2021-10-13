import * as React from 'react';
import * as Components from 'components';
import { Weather } from 'types/entities';
import { useTranslation } from 'hooks';
import { WeatherItem } from './components';
import { getWeatherInformation } from './duck/selectors';
import * as S from './styles';

interface WeatherViewProps {
  city: string;
  country: string;
  loading: boolean;
  weather: Weather | null;
}

const WeatherView: React.FC<WeatherViewProps> = ({
  city,
  country,
  loading,
  weather,
}) => {
  const { t } = useTranslation('weather');
  const weatherInformation = React.useMemo(
    () => (weather ? getWeatherInformation(t, weather) : []),
    [t, weather],
  );

  return (
    <Components.Card>
      <S.Header>
        <Components.Typography variant="h1" as="h2">
          {country} / {city}
        </Components.Typography>
        {loading || !weather ? null : (
          <S.TemperatureWrapper>
            <Components.WeatherIcon
              symbol={weather.symbol}
              symbolPhrase={weather.symbolPhrase}
            />
            <S.Temperature>{weather?.temperature}°C</S.Temperature>
          </S.TemperatureWrapper>
        )}
      </S.Header>
      {/* TODO: add spinner */}
      {loading || !weather ? null : (
        <Components.Grid.Container stretch columnCount={2}>
          {weatherInformation.map((item) => (
            <WeatherItem key={item.label} {...item} />
          ))}
        </Components.Grid.Container>
      )}
    </Components.Card>
  );
};

export default WeatherView;
