import * as React from 'react';
import * as Components from 'components';

const Main: React.FC = ({ children }) => (
  <Components.Grid.Container as="main">{children}</Components.Grid.Container>
);

export default Main;
