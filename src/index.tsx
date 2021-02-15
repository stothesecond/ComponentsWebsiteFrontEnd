import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './maintenance/reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';

import HomeView from './views/HomeView';
import ExampleSitesView from './views/ExampleSitesView';
import ComponentsView from './views/ComponentsView';
import DocsView from './views/DocsView';
import NotFoundPageView from './views/NotFoundPageView';

import './style.scss';

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');

  const defaultTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#6ec6ff',
            main: '#2196f3',
            dark: '#0069c0',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff6090',
            main: '#e91e63',
            dark: '#b0003a',
            contrastText: '#fff',
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

const Routes: () => JSX.Element = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route path="/example-sites">
        <ExampleSitesView />
      </Route>
      <Route path="/components">
        <ComponentsView />
      </Route>
      <Route path="/docs">
        <DocsView />
      </Route>
      <Route path="*">
        <NotFoundPageView />
      </Route>
    </Switch>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
