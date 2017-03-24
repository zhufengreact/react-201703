'use strict';

import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

import 'normalize.css';
import 'index.styl';

import routes from './routes';

let oApp = document.getElementById('app');

ReactDOM.render(
    routes,
    oApp
)
