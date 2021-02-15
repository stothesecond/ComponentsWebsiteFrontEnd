import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './maintenance/reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomeView from './views/HomeView';
import ExampleSitesView from './views/ExampleSitesView';
import ComponentsView from './views/ComponentsView';
import DocsView from './views/DocsView';
import NotFoundPageView from './views/NotFoundPageView';

import './style.scss';

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
