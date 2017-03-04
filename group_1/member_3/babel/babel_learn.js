'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsyncAction = function () {
    function AsyncAction() {
        _classCallCheck(this, AsyncAction);
    }

    _createClass(AsyncAction, [{
        key: 'sayHello',
        value: function sayHello() {
            var _this = this;

            this.hello().then(function () {
                _this.world();
            });
        }
    }, {
        key: 'world',
        value: function world() {
            setTimeout(function () {
                console.log('world!');
            }, 1000);
        }
    }, {
        key: 'hello',
        value: function hello() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log('hello');
                    resolve();
                }, 1000);
            });
        }
    }]);

    return AsyncAction;
}();

new AsyncAction().sayHello();

exports.default = AsyncAction;