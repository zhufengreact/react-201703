import {TYPE} from '../middleware';

export const START_GAME = 'START_GAME'; // 开始游戏
export const STOP_GAME = 'STOP_GAME'; // 结束游戏
export const NEXT_ROUND = 'NEXT_ROUND'; // 开始下一回合
export const GAME_SUCCESS = 'GAME_SUCCESS'; // 游戏成功
export const GAME_FAILED = 'GAME_FAILED'; // 游戏失败
export const UPDATE_DISPLAYED = 'UPDATE_DISPLAYED'; // 更新地鼠是否显示的状态
export const UPDATE_HITTED = 'UPDATE_HITTED'; // 更新地鼠是否被击打了的状态

export function startGame() {
  return {
    [TYPE]: START_GAME
  };
}

export function stopGame() {
  return {
    [TYPE]: STOP_GAME
  };
}

export function gameSuccess() {
  return {
    [TYPE]: GAME_SUCCESS
  };
}

export function gameFailed() {
  return {
    [TYPE]: GAME_FAILED
  };
}

export function nextRoundIfNotEnd() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.currentRound < state.numberOfRounds) {
      dispatch({
        type: NEXT_ROUND
      });
    }
  };
}

export function updateDisplayed(rowIndex, colIndex) {
  return {
    type: UPDATE_DISPLAYED,
    rowIndex,
    colIndex
  };
}

export function updateHitted(rowIndex, colIndex) {
  return {
    [TYPE]: UPDATE_HITTED,
    rowIndex,
    colIndex
  };
}
