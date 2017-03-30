import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Hamster, { HamsterDataPropTypes } from '../Hamster';

export default class HamsterRow extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(HamsterDataPropTypes).isRequired,
    rowIndex: PropTypes.number.isRequired
  }

  render() {
    const { data } = this.props;

    return (
      <tr>
        {
          _.map(data, (item, index) => (
            <Hamster key={index} rowIndex={this.props.rowIndex} colIndex={index}
              data={item} onHamsterHit={this.props.onHamsterHit} />
          ))
        }
      </tr>
    );
  }
}
