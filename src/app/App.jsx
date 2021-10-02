import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, ThemeProvider } from './providers';
import Layout from './layout';

const PublicRoutes = React.lazy(() => import('pages/public'));
const PrivateRoutes = React.lazy(() => import('pages/private'));

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          {(isLoggedIn) =>
            isLoggedIn ? (
              <Layout>
                <PrivateRoutes />
              </Layout>
            ) : (
              <React.Suspense fallback={null}>
                <PublicRoutes />
              </React.Suspense>
            )
          }
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
