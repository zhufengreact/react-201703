import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './container/App';
import configureStore from './store';

const store = configureStore();

render(
  <App store={store} />,
  document.getElementById('app')
);
