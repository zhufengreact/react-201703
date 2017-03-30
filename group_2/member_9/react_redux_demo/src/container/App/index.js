import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import HamsterGame from '../../components/HamsterGame';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <HamsterGame />
      </Provider>
    );
  }
}
