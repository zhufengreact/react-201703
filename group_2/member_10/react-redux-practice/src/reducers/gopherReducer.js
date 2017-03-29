export default function gopherReducer(state = {data: [], status: false, count: 0, succ: false, fail: false, pass: false, times: 0}, action) {
    switch (action.type) {
        case 'HIT':
            const newData = state.data.map((curData, index) => {
                if (index === action.index) {
                    curData.alive = false;
                }
                return curData;
            });
            return {data: newData, status: state.status, count: state.count + 1, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case 'START' :
            return {data: state.data, status: true, count: state.count, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case 'SHOW':
            const newData2 = state.data.map((curData, index) => {
                if (index === action.index) {
                    console.log(index);
                    curData.show = true;
                }
                return curData;
            });
            return {data: newData2, status: state.status, count: state.count, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case 'HIDE':
            const newData3 = state.data.map((curData, index) => {
                if (index === action.index) {
                    console.log(index);
                    curData.show = false;
                }
                return curData;
            });
            return {data: newData3, status: state.status, count: state.count, succ: state.succ, fail: state.fail, pass: state.pass, times: state.times};
        case 'PASS':
            return {data: state.data, status: state.status, count: state.count, succ: state.succ, fail: false, pass: true, times: state.times + 1};
        case 'FAIL':
            return {data: state.data, status: state.status, count: state.count, succ: state.succ, fail: true, pass: false, times: state.times};
        case 'SUCC':
            return {data: state.data, status: state.status, count: state.count, succ: true, fail: state.fail, pass: state.pass, times: state.times};
        case 'RESET':
            console.log('NEXT');
            const newData4 = state.data.map((curData, index) => {
                if (index === action.index) {
                    curData.alive = true;
                    curData.show = true;
                }
                return curData;
            });
            return {data: newData4, status: false, count: 0, succ: false, fail: false, pass: false, times: state.times};
        default:
            return state;
    }
}