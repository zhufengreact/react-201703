import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import Message from './components/Message';
import First from './components/First';
import Show from './components/Show';
import App from './components/App';
import './components/indexStyle.css'



const router = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={First}/>
            <Route path="/first" component={First}/>
            <Route path="/message" component={Message}/>
            <Route path="/show/:title/:content" component={Show}/>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));
