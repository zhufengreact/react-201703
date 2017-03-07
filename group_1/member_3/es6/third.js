function count() {
    "use strict";

    let _number = 0;

    return function() {
        let _timer = setInterval(() => {
            if (_number < 10) {
                _number ++;
                console.log(_number);
            } else {
                console.log('停止计数');
                clearInterval(_timer);
            }
        }, 1000);
    };
}

var startCount = count();

startCount();
