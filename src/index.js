/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';
import './index.css';
import { createBrowserHistory } from 'history';
import * as api from './services/api';

let user = JSON.parse(localStorage.getItem('user'));
user !== null
  ? user
  : (user = {
      user: '',
      registered: false,
    });

export const history = createBrowserHistory();
const store = configureStore({ api, history })({ user: user });

ReactDOM.render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
