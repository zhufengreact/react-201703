import React, { Component, Children, PropTypes } from 'react';
import { Link } from 'react-router';
import MessagePropTypes from './propTypes';
import store from '../../store';

export default class Message extends Component {
  static propTypes = {
    data: MessagePropTypes
  }

  constructor(props) {
    super(props);
  }

  render() {
    const message = store.getMessage(this.props.params.title);
    if (!message) {
      return null;
    }

    const { title, content } = message;

    return (
      <div>
          <h1>{title}</h1>
          <p>{content}</p>
      </div>
    );
  }
}
