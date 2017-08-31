import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Message from './Message'
import Info from './Info'


import './index.css';

const router = (
  <Router history={ browserHistory} >
    <Route path="/" components={ App }>
      <IndexRoute component= { Home }/>
      <Route path="home" components={ Home }/>
      <Route path="message" components={ Message }/>
      <Route path="info/:title/:content" components={ Info }/>
    </Route>
  </Router>

)
render(
  router,
  document.getElementById('root')
);
