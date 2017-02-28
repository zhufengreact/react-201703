(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.babel_learn = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var asyncAction = function () {
        function asyncAction() {
            _classCallCheck(this, asyncAction);
        }

        _createClass(asyncAction, [{
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
                return new Promise(function (res, rej) {
                    setTimeout(function () {
                        console.log('hello');
                        res();
                    }, 1000);
                });
            }
        }]);

        return asyncAction;
    }();

    new asyncAction().sayHello();
    exports.default = asyncAction;
    module.exports = exports['default'];
});