import React, {Component} from 'React';
import ReactDOM, {render} from 'React-DOM';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from './containers/App'
import Home from './containers/Home';
import Message from './containers/Message';
import Content from './containers/Content';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ Home } />
            <Route path="message" component={Message} />
            <Route path="content/:title/:content" component={Content} />
    </Route>
    </Router>
)

render(router, document.getElementById('app'));