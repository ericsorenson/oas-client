import { Provider } from 'react-redux';
import { Router } from './Router';
import { store } from '../presenter/presenter';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  window.document.querySelector('#app'),
);
