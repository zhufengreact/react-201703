import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './containers/App'
import Message from './containers/Message'
import Home from './containers/Home'
import Detail from './containers/Detail'

const router = (
  <Router history={ hashHistory }>
    <Route path="/" components={ App }>
      <IndexRoute component={ Home } />
      <Route path="message" components={ Message }/>
      <Route path="detail/:title/:content" components={ Detail }/>
    </Route>
  </Router>
)

render(router, document.getElementById('app'))
