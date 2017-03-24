"use strict";

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App, Home, Message, Article } from '../containers';

export default (
    <Router history={ hashHistory }>
        <Route path="/" components={ App } >
            <IndexRoute components={ Home } />
            <Route path="message" components={ Message } />
            <Route path="article/:id" components={ Article } />
        </Route>
    </Router>
);
