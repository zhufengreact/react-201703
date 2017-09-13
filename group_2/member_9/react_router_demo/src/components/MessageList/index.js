import React, { Component, Children, PropTypes } from 'react';
import { Link } from 'react-router';
import MessagePropTypes from '../Message/propTypes';
import store from '../../store';

export default class MessageList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(MessagePropTypes)
  }

  constructor(props) {
    super(props);

    this.messages = store.listMessages();
  }

  render() {
    return (
      <ul>
        {
          this.messages.map(message => {
            return (
              <li key={message.title}>
                <Link to={`/messages/${message.title}`}>{message.title}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
