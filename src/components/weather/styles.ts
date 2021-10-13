import styled from 'styled-components';

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TemperatureWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(4)};
`;

export const Temperature = styled('div')`
  background-color: ${(props) => props.theme.palette.secondary.main}25;
  font-size: ${(props) => props.theme.typography.fontSizes[1]};
  font-weight: 600;
  padding: ${(props) => props.theme.spacing(4)};
`;
