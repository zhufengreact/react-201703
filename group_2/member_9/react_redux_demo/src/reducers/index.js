import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import _ from 'lodash';

const rows = 3;
const cols = 3;

export const GAME_STATUS = {
  NOT_RUNNING: 0,
  RUNNING: 1,
  SUCCESS: 2,
  FAILED: 3
};

function initData() {
  const data = [];
  for (let i = 0; i < rows; i++) {
    const rowData = [];
    for (let j = 0; j < cols; j++) {
      rowData.push({
        displayed: false,
        hitted: false
      });
    }
    data.push(rowData);
  }

  return data;
}

const initialState = {
  data: initData(),
  numberOfRounds: 5,
  currentRound: 0,
  status: GAME_STATUS.NOT_RUNNING
};

function updateDataAt(data, rowIndex, colIndex, callback) {
  const newData = [];

  data.forEach((item, index) => {
    const newItem = _.clone(item);
    if (index === rowIndex) {
      callback(newItem);
    }
    newData.push(newItem);
  });

  return newData;
}

function rootReducer(state = initialState, action) {
  if (action.type === ActionTypes.START_GAME) {
    return {
      ...state,
      status: GAME_STATUS.RUNNING,
      currentRound: 0
    };
  } else if (action.type === ActionTypes.STOP_GAME) {
    return {
      ...state,
      status: GAME_STATUS.NOT_RUNNING
    };
  } else if (action.type === ActionTypes.GAME_SUCCESS) {
    return {
      ...state,
      status: GAME_STATUS.SUCCESS
    };
  } else if (action.type === ActionTypes.GAME_FAILED) {
    return {
      ...state,
      status: GAME_STATUS.FAILED
    };
  } else if (action.type === ActionTypes.NEXT_ROUND) {
    return {
      ...state,
      data: initData(),
      currentRound: state.currentRound + 1
    };
  } else if (action.type === ActionTypes.UPDATE_DISPLAYED) {
    return {
      ...state,
      data: updateDataAt(state.data, action.rowIndex, action.colIndex, (newRowItem) => {
        newRowItem[action.colIndex].displayed = true;
        newRowItem[action.colIndex].displayedTime = new Date().getTime();
      })
    };
  } else if (action.type === ActionTypes.UPDATE_HITTED) {
    return {
      ...state,
      data: updateDataAt(state.data, action.rowIndex, action.colIndex, (newRowItem) => {
        if (state.status === GAME_STATUS.RUNNING) {
          newRowItem[action.colIndex].hitted = true;
        }
      })
    };
  }

  return state;
}

export default rootReducer;
