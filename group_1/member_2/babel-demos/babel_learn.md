##安装
1. npm install babel-cli -g
2. npm install babel-cli --save-dev
3. npm install babel -g

##babel-cli
-babel
-babel-node  
    直接进入repl环境  babel-node
    直接运行某一个文件 babel-node src/test.js
    
##es6/7
-plugin
-preset
    -babel-preset-es2015
    -babel-preset-es2015-loose
    -babel-preset-stage-0
    -babel-preset-stage-1
    -babel-preset-es2016
    
##babel plugin
-es6
  ```
    export default xx;
  ```
  -使用babel-plugin-add-module-exports
  ```
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var sum = function sum(a, b) {
    return a + b;
  };
  
  exports.default = sum;
   ```
   使用插件后：
   ```
   "use strict";
   
   Object.defineProperty(exports, "__esModule", {
     value: true
   });
   var sum = function sum(a, b) {
     return a + b;
   };
   
   exports.default = sum;
   module.exports = exports["default"];
   ```
   babel-plugin-transform-es2015-modules-umd
   ```
   (function (global, factory) {
     if (typeof define === "function" && define.amd) {
       define(["module", "exports"], factory);
     } else if (typeof exports !== "undefined") {
       factory(module, exports);
     } else {
       var mod = {
         exports: {}
       };
       factory(mod, mod.exports);
       global.sum = mod.exports;
     }
   })(this, function (module, exports) {
     "use strict";
   
     Object.defineProperty(exports, "__esModule", {
       value: true
     });
     var sum = function sum(a, b) {
       return a + b;
     };
   
     exports.default = sum;
     module.exports = exports["default"];
   });
   ```
   
##babel 解析react jsx语法
-jsxtransformer.js
-babel
    -babel-preset-react
    
-npm install react react-dom --save

##babel与gulp结合使用
- npm install gulp-babel gulp --save-dev
