import {connect} from 'react-redux';
import GameBox from '../components/gameBox';

let timer;
let gameAll;
let count = 1;

const getStop = () => {
    return (dispatch, getState) => {
        clearInterval(timer);
    };
}

const getBegin = () => {

    console.log('click ... ');
    return (dispatch, getState) => {
        const settime = () => {
            gameAll = setTimeout(function () {
                let data = getState();
                let hasInitData = data.items.find(item => item.img === 'init');
                let hasHitData = data.items.find(item => item.img === 'hit');
                if (count === 5) {
                    clearInterval(timer);
                    clearTimeout(gameAll);
                    alert('回合总数：' + count + '，  失败,游戏结束！！！');
                    return;
                }
                if (!!hasInitData && !hasHitData) {
                    clearInterval(timer);
                    clearTimeout(gameAll);
                    alert('当前回合：' + count + '，没有一只被打中， 失败,游戏结束！！！');
                    return;
                } else if (!hasInitData && !!hasHitData) {
                    clearInterval(timer);
                    clearTimeout(gameAll);
                    alert('当前回合：' + count + '，全部被打中， 成功,游戏结束！！！');
                    return;
                } else if (!!hasInitData && !!hasHitData) {

                    alert('当前回合：' + count + '， 有未打中的地鼠，点击确定进入下一回合！！！');
                    clearTimeout(gameAll);
                    settime();
                }
                count = count + 1;
            }, 15000);
        };
        if (!gameAll) {
            settime();
        }
        timer = setInterval(() => {
            return dispatch({type: 'witch'});
        }, 1000);
    };

};

const getHit = (id) => {

    return (dispatch, getState) => {
        return dispatch({type: 'click', id: id});
    };
};


const mapStateToProps = (data) => {

    return {data: data};
};

const mapDispatchToProps = (dispatch, getState) => {

    return {
        onHit: (id) => {
            dispatch(getHit(id));
        },
        beginGame: () => {
            dispatch(getBegin());
        },
        stopGame: () => {
            dispatch(getStop());
        }
    };
};


//方法和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(GameBox);

export default RootApp;