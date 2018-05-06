import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { setObservableConfig } from 'recompose';
import './index.css';
import rxjsConfig from 'recompose/rxjsObservableConfig';

setObservableConfig(rxjsConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
