import { HIT, SHOW, HIDE, RESET } from '../actions/gopherAction';

export default function gopherReducer(state = [], action) {
    switch (action.type) {
        case HIT:
            const newData = state.map((curData, index) => {
                if (index === action.index) {
                    curData.alive = false;
                }
                return curData;
            });
            return newData;
        case SHOW:
            const newData2 = state.map((curData, index) => {
                if (index === action.index) {
                    curData.show = true;
                }
                return curData;
            });
            return newData2;
        case HIDE:
            const newData3 = state.map((curData, index) => {
                if (index === action.index) {
                    curData.show = false;
                }
                return curData;
            });
            return newData3;
        case RESET:
            const newData4 = state.map((curData, index) => {
                curData.alive = true;
                curData.show = false;
                return curData;
            });
            return newData4;
        default:
            return state;
    }
}