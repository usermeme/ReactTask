import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'configs';

const Home = React.lazy(() => import('./home'));

const PrivateRoutes: React.FC = () => (
  <Switch>
    <Route component={Home} path={routes.home} exact />
    <Redirect to={routes.home} />
  </Switch>
);

export default PrivateRoutes;
