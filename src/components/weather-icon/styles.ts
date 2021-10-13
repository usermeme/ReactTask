import styled from 'styled-components';

export const Wrapper = styled('div')`
  height: ${(props) => props.theme.spacing(15)};

  & > img {
    height: 100%;
    width: 100%;
  }
`;
