import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './maintenance/reportWebVitals';
import HomeView from './views/HomeView';
import ExampleSitesView from './views/ExampleSitesView';
import ComponentsView from './views/ComponentsView';
import DocsView from './views/DocsView';
import NotFoundPageView from './views/NotFoundPageView';

import './style.scss';

interface Routes {
  [route: string]: () => JSX.Element
};

const routes: Routes = {
  "/": () => <HomeView />,
  "/example-sites": () => <ExampleSitesView />,
  "/components": () => <ComponentsView />,
  "/docs": () => <DocsView />,
};


export function App() {
  return <div className="App">hi</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
