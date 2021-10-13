import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.palette.background.dark} 10%,
    ${(props) => props.theme.palette.background.light} 0%
  );
  background-position: 0 ${(props) => props.theme.typography.fontSizes[4]};
  background-size: 6px 1px;
  background-repeat: repeat-x;
  width: 100%;

  & > * {
    background-color: ${(props) => props.theme.palette.background.light};
  }
`;
