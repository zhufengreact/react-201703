import { START, PASS, FAIL, SUCC, COUNT, RECOUNT } from '../actions/gopherAction';

export default function statusReducer(state = {status: false, count: 0, succ: false, fail: false, pass: false, times: 0}, action) {
    switch (action.type) {
        case START :
            return {status: true, count: state.count, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case PASS:
            return {status: state.status, count: state.count, succ: state.succ, fail: false, pass: true, times: state.times + 1};
        case FAIL:
            return {status: state.status, count: state.count, succ: state.succ, fail: true, pass: false, times: state.times};
        case SUCC:
            return {status: state.status, count: state.count, succ: true, fail: state.fail, pass: state.pass, times: state.times};
        case COUNT:
            return {status: state.status, count: state.count + 1, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case RECOUNT:
            return {status: false, count: 0, succ: false, fail: false, pass: false, times: state.times};
        default:
            return state;
    }
}