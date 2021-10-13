import * as React from 'react';
import { Weather } from 'types/entities';

interface WeatherViewProps extends Weather {
  cityName: string;
}

const WeatherView: React.FC<WeatherViewProps> = () => {
  return null;
};

export default WeatherView;
