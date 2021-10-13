import * as React from 'react';
import * as Components from 'components';
import { WeatherInformation } from '../../duck/types';
import * as S from './styles';

const WeatherItem: React.FC<WeatherInformation> = ({ label, value }) => (
  <S.Wrapper>
    <Components.Typography variant="h4" as="span">
      {label}
    </Components.Typography>
    <Components.Typography variant="span">{value}</Components.Typography>
  </S.Wrapper>
);

export default WeatherItem;
