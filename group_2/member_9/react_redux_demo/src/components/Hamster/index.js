import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateHitted } from '../../actions';

export const HamsterDataPropTypes = React.PropTypes.shape({
  displayed: PropTypes.bool.isRequired,
  hitted: PropTypes.bool.isRequired
}).isRequired;

export default class Hamster extends Component {
  static propTypes = {
    data: HamsterDataPropTypes,
    onHamsterHit: PropTypes.func.isRequired
  }

  onClick = () => {
    const {rowIndex, colIndex} = this.props;
    this.props.onHamsterHit(rowIndex, colIndex);
  }

  render() {
    const data = this.props.data;
    let image;
    if (data.displayed) {
      image = <img src={require(`../../assets/images/${this.props.data.hitted ? 'hamster2' : 'hamster1'}.png`)}
        onClick={this.onClick} />;
    }

    return (
      <td className={classNames('hamster', {displayed: data.displayed, hitted: data.hitted})}>
        {image}
      </td>
    );
  }
}
