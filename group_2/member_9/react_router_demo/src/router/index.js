import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from '../container/App';
import Home from '../components/Home';
import MessageList from '../components/MessageList';
import Message from '../components/Message';

export default class AppRouter extends Component {
  static defaultProps = {
    history: hashHistory
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="messages" component={MessageList}>
          </Route>
          <Route path="messages/:title" component={Message} />
        </Route>
      </Router>
    );
  }
}
