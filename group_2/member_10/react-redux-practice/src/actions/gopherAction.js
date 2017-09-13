export const HIT = 'HIT';
export const START = 'START';
export const SHOW = 'SHOW';
export const HIDE = 'HIDE';
export const PASS = 'PASS';
export const FAIL = 'FAIL';
export const SUCC = 'SUCC';
export const RESET = 'RESET';
export const COUNT = 'COUNT';
export const RECOUNT = 'RECOUNT';

function checkPass(getState) {
    const curState = getState();
    if (curState.indicator.count < 9) {
        return false;
    }
    return true;
}

function checkSucc(getState) {
    const curState = getState();
    if (curState.indicator.times < 4) {
        return false;
    }
    return true;
}

function getNext(getState) {
    const restArr = [];
    const curState = getState();
    curState.gridData.every((curData, index) => {
        if (curData.alive) {
            restArr.push(index);
        }
        return curData;
    });
    if (restArr.length) {
        return restArr[Math.floor(Math.random() * restArr.length)];
    }
    return null;
}

function hit(index) {
    return {type: HIT, index: index};
}

function hide(index) {
    return {type: HIDE, index: index};
}

function show(index) {
    return {type: SHOW, index: index};
}

function pass() {
    return {type: PASS};
}

function fail() {
    return {type: FAIL};
}

function succ() {
    return {type: SUCC};
}

function start() {
    return {type: START};
}

function reset() {
    return {type: RESET};
}

function count() {
    return {type: COUNT};
}

function reCount() {
    return {type: RECOUNT};
}

export function onStart() {
    return (dispatch, getState) => {
        dispatch(start());
        let timer = setInterval(() => {
            const next = getNext(getState);
            if (next != null) {
                dispatch(show(next));
                setTimeout(() => {
                    dispatch(hide(next));
                }, 1000);
            } else {
                clearInterval(timer);
                clearTimeout(delayTimer);
                if (checkSucc(getState)) {
                    dispatch(succ());
                } else if (checkPass(getState)) {
                    dispatch(pass());
                }
            }
        }, 1000);
        let delayTimer = setTimeout(() => {
            clearInterval(timer);
            if (checkSucc(getState)) {
                dispatch(succ());
            } else if (checkPass(getState)) {
                dispatch(pass());
            } else {
                dispatch(fail());
            }
        }, 15000);
    }
}

export function onReset() {
    return (dispatch) => {
        dispatch(reset());
        dispatch(reCount());
    }
}

export function onHitGopher(index) {
    return (dispatch) => {
        dispatch(hit(index));
        dispatch(count());
        setTimeout(() => {
            dispatch(hide(index));
        }, 1000)
    }
}