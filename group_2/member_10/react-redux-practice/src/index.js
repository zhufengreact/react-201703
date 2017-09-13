import { render } from 'react-dom';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configStore from './store/configStore';
import { onStart, onReset, onHitGopher } from './actions/gopherAction';
import GopherGrid from './components/gopherGrid';
import './styles/common.less';

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

const store = configStore({gridData: dummyData, indicator: {status: false, count: 0, succ: false, fail: false, pass: false, times: 0}});

function mapStateToProps(state) {
    return {
        gridData: state.gridData,
        indicator: state.indicator
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onStart: () => dispatch(onStart()),
        onReset: () => dispatch(onReset()),
        onHitGopher: (index) => {
            return () => {
                dispatch(onHitGopher(index))
            }
        }
    }
}

// function getNext() {
//     const restArr = [];
//     console.log('kkkkkkkkkkkkkkkk');
//     const curState = store.getState();
//     console.log(curState);
//     curState.data.every((curData, index) => {
//         if (curData.alive) {
//             restArr.push(index);
//         }
//         return curData;
//     });
//     console.log(curState);
//     console.log(restArr.length);
//     if (restArr.length) {
//         return restArr[Math.floor(Math.random() * restArr.length)];
//     }
//     return null;
// }

// function checkPass() {
//     const curState = store.getState();
//     if (curState.count < 9) {
//         return false;
//     }
//     return true;
// }

// function checkSucc() {
//     const curState = store.getState();
//     if (curState.times < 5) {
//         return false;
//     }
//     return true;
// }

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