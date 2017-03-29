import { render } from 'react-dom';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configStore from './store/configStore'
import GopherGrid from './components/gopherGrid'
import './styles/common.less'

const dummyData = [{
    id: 'gopher1',
    alive: true,
    show: false
}, {
    id: 'gopher2',
    alive: true,
    show: false
}, {
    id: 'gopher3',
    alive: true,
    show: false
}, {
    id: 'gopher4',
    alive: true,
    show: false
}, {
    id: 'gopher5',
    alive: true,
    show: false
}, {
    id: 'gopher6',
    alive: true,
    show: false
}, {
    id: 'gopher7',
    alive: true,
    show: false
}, {
    id: 'gopher8',
    alive: true,
    show: false
}, {
    id: 'gopher9',
    alive: true,
    show: false
}];

const store = configStore({data: dummyData, status: false, count: 0, succ: false, fail: false, pass: false, times: 0});
let timer;

function mapStateToProps(state) {
    return {
        gridData: state.data,
        status: state.status,
        succ: state.succ,
        fail: state.fail,
        pass: state.pass
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onHitGopher: (index) => {
            return () => {
                dispatch({type: 'HIT', index: index});
                setTimeout(() => {
                    dispatch({type: 'HIDE', index: index});
                    if (checkPass()) {
                        console.log('ssssssss');
                        if (checkSucc()) {
                            console.log('ssssssss1');
                            dispatch({type: 'SUCC'});
                        } else {
                            console.log('ssssssss2');
                            dispatch({type: 'PASS'});
                        }
                    }
                }, 1000)
            }
        },
        onStart: () => {
            dispatch({type: 'START'});
            timer = setInterval(() => {
                const next = getNext();
                console.log('hhhhhhhhhhhhh'+next);
                if (next != null) {
                    dispatch({type: 'SHOW', index: next});
                    setTimeout(() => {
                        dispatch({type: 'HIDE', index: next});
                    }, 1000);
                } else {
                    clearInterval(timer);
                    if (checkPass()) {
                        if (checkSucc()) {
                            dispatch({type: 'SUCC'});
                        } else {
                            dispatch({type: 'PASS'});
                        }
                    } else {
                        dispatch({type: 'FAIL'});
                    }
                }
            }, 1000);
            setTimeout(() => {
                clearInterval(timer);
                if (checkPass()) {
                    if (checkSucc()) {
                        dispatch({type: 'SUCC'});
                    } else {
                        dispatch({type: 'PASS'});
                    }
                } else {
                    dispatch({type: 'FAIL'});
                }
            }, 15000);
        },
        onReset: () => dispatch({type: 'RESET'})
    }
}

function getNext() {
    const restArr = [];
    const curState = store.getState();
    curState.data.every((curData, index) => {
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

function checkPass() {
    const curState = store.getState();
    if (curState.count < 9) {
        return false;
    }
    return true;
}

function checkSucc() {
    const curState = store.getState();
    if (curState.times < 5) {
        return false;
    }
    return true;
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(GopherGrid)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);