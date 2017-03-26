import React from 'react';
import ReactDOM,{render} from 'react-dom';
import {Router,Route,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Message from './components/Message';
import Detail from './components/Detail';

const router = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Home}/>
            <Route path="msg" components={Message}/>
        </Route>
        <Route path="msg/:title" components={Detail}/>
    </Router>
);



render(router,document.getElementById('app'));