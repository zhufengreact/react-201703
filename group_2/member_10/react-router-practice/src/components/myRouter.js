import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './main';
import Home from './home';
import MessageList from './messageList';
import Message from './message';

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="message" component={MessageList}></Route>
                    <Route path="message/:title" component={Message}></Route>
                </Route>
            </Router>
        );
    }
};