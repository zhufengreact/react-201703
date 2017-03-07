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

    var asyncAction = function () {
        function asyncAction() {
            _classCallCheck(this, asyncAction);
        }

        asyncAction.prototype.sayHello = function sayHello() {
            var _this = this;

            this.hello().then(function () {
                _this.world();
            });
        };

        asyncAction.prototype.world = function world() {
            setTimeout(function () {
                console.log('world!');
            }, 1000);
        };

        asyncAction.prototype.hello = function hello() {
            return new Promise(function (res, rej) {
                setTimeout(function () {
                    console.log('hello');
                    res();
                }, 1000);
            });
        };

        return asyncAction;
    }();

    new asyncAction().sayHello();
    exports.default = asyncAction;
    module.exports = exports['default'];
});