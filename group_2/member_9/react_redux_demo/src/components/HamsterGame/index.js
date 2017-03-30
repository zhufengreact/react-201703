import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';
import { startGame, stopGame, updateHitted } from '../../actions';
import { GAME_STATUS } from '../../reducers';
import HamsterRow from '../HamsterRow';
import "./index.less";

class HamsterGame extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired
  }

  static defaultProps = {
      rows: 3,
      cols: 3
  }

  isGameRunning = () => {
    return this.props.status === GAME_STATUS.RUNNING;
  }

  isGameAlreadyRunning = () => {
    return this.isGameRunning() || this.isGameSuccess() || this.isGameFailed();
  }

  isGameSuccess = () => {
    return this.props.status === GAME_STATUS.SUCCESS;
  }

  isGameFailed = () => {
    return this.props.status === GAME_STATUS.FAILED;
  }

  render() {
    const { rows, cols } = this.props;

    return (
      <div className={classNames('hamster-game', {'game-over': !this.isGameRunning()})}>
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <td colSpan={cols}>
                <p>
                  <b>打地鼠游戏介绍:</b><br />
                  每次游戏一共5个回合，随着回合数的增加，游戏难度会增加，具体为：<br />
                  地鼠出现的时间间隔会缩短，并且从第3回合开始，每次随机出现2只地鼠。
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            {
              _.map(Array(rows), (item, index) => (
                <HamsterRow key={index} data={this.props.data[index]}
                  rowIndex={index} onHamsterHit={this.props.updateHitted} />
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={cols}>
                <div className="round">
                  <span className={classNames({'hide': !this.isGameAlreadyRunning()})}>
                    当前是第<span className="current-round">{this.props.currentRound}</span>回合，
                  </span>
                  共<span className="number-of-rounds">{this.props.numberOfRounds}</span>回合
                </div>
                <div className="message">
                  <span className={classNames({success: this.isGameSuccess(), failed: this.isGameFailed()})}>
                    {this.isGameSuccess() ? '恭喜您，游戏成功' : (this.isGameFailed() ? '游戏失败，请重新开始游戏' : null)}
                  </span>
                </div>
                <button onClick={this.isGameRunning() ? this.props.stopGame : this.props.startGame}>
                  {this.isGameRunning() ? '停止游戏' : '开始游戏'}
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.status,
    data: state.data,
    numberOfRounds: state.numberOfRounds,
    currentRound: state.currentRound
  };
}

export default connect(mapStateToProps, {
  startGame,
  stopGame,
  updateHitted
})(HamsterGame);
