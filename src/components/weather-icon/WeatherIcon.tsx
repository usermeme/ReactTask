import * as React from 'react';
import { generatePath } from 'react-router-dom';
import { endpoints } from 'configs';
import * as S from './styles';

interface WeatherIconProps {
  symbol: string;
  symbolPhrase?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ symbol, symbolPhrase }) => (
  <S.Wrapper>
    <img
      src={generatePath(endpoints.weatherIcon, { symbol })}
      alt={symbolPhrase}
    />
  </S.Wrapper>
);

export default WeatherIcon;
