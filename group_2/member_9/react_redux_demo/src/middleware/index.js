import * as ActionTypes from '../actions';

export const TYPE = Symbol('My action type');

let randomHamsterIntervalId;
let checkGameIntervalId;
let indexArray = [];

function getIntervalForRound(state) {
  let interval = 1000;
  const minInterval = 500; // 2个地鼠出现的最小时间间隔是500毫秒，避免游戏太快
  const currentRound = state.currentRound;

  if (currentRound > 0) {
    // 随着回合数的增加，增加游戏的难度，加快地鼠的出现
    interval -= (currentRound - 1) * 50;
  }
  interval = Math.max(interval, minInterval);

  return interval;
}

function getRandomCountForRound(state) {
  // 随着回合数的增加，增加游戏的难度，每次可随机出现2个地鼠
  return (state.currentRound > _.toInteger(state.numberOfRounds / 2)) ? 2 : 1;
}

function getNextHamsters(state) {
  // Get next hamsters to display
  const nextHamsters = [];

  const map = new Map();
  state.data.forEach((rowItem, rowIndex) => {
    rowItem.forEach((item, colIndex) => {
      if (!item.displayed) {
        map.set(rowIndex * rowItem.length + colIndex, '');
      }
    });
  });

  const randomCount = Math.min(getRandomCountForRound(state), map.size);
  for (let i = 0; i < randomCount; i++) {
    const nextHamster = [...map.keys()][_.toInteger(_.random(map.size - 1))];
    nextHamsters.push(nextHamster);
    map.delete(nextHamster);
  }

  return nextHamsters;
}

function isGameSuccess(state) {
  const time = new Date().getTime();
  return (state.currentRound === state.numberOfRounds) && !_.some(state.data, rowItem =>
    _.some(rowItem, item => !item.displayed || !item.hitted));
}

function isGameFailed(state, checkInterval) {
  const time = new Date().getTime();
  return _.some(state.data, rowItem =>
    _.some(rowItem, item => item.displayed &&
      (time - item.displayedTime > checkInterval) &&
      !item.hitted));
}

function isRoundOver(state) {
  return !_.some(state.data, rowItem =>
    _.some(rowItem, item => !item.displayed ||
      !item.hitted));
}

function toNormalAction(action) {
  const normalAction = {...action, type: action[TYPE]};
  delete normalAction[TYPE];
  return normalAction;
}

function startGame(store, action) {
  store.dispatch(toNormalAction(action));

  store.dispatch(ActionTypes.nextRoundIfNotEnd());

  const randomSetHamsterDisplayed = () => {
    const state = store.getState();
    const rows = state.data.length;
    for (let nextHamster of getNextHamsters(state)) {
      const nextRow = _.toInteger(nextHamster / rows);
      store.dispatch(ActionTypes.updateDisplayed(nextRow, nextHamster - nextRow * rows));
    }

    randomHamsterIntervalId = setTimeout(randomSetHamsterDisplayed, getIntervalForRound(state));
  };

  const checkGameInterval = 1000;
  const checkGame = () => {
    const state = store.getState();
    if (isGameSuccess(state)) {
      store.dispatch(ActionTypes.gameSuccess());
    } if (isGameFailed(state, 1000)) {
      store.dispatch(ActionTypes.gameFailed());
    } else {
      checkGameIntervalId = setTimeout(checkGame, checkGameInterval);
    }
  };

  randomHamsterIntervalId = setTimeout(randomSetHamsterDisplayed, getIntervalForRound(store.getState()));
  checkGameIntervalId = setTimeout(checkGame, checkGameInterval);
}

function updateHitted(store, action) {
  store.dispatch(toNormalAction(action));

  if (isRoundOver(store.getState())) {
    store.dispatch(ActionTypes.nextRoundIfNotEnd());
  }
}

export default store => next => action => {
  const type = action[TYPE];
  if (typeof(type) === 'undefined') {
    return next(action);
  }

  if (type === ActionTypes.START_GAME) {
    startGame(store, action);
  } else if ((type === ActionTypes.STOP_GAME) ||
    (type === ActionTypes.GAME_SUCCESS) ||
    (type === ActionTypes.GAME_FAILED)) {
    clearInterval(randomHamsterIntervalId);
    clearInterval(checkGameIntervalId);

    store.dispatch(toNormalAction(action));
  } else if (type === ActionTypes.UPDATE_HITTED) {
    updateHitted(store, action);
  }
};
