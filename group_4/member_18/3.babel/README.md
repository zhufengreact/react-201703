###### React-3 babel-强大的编译器

###### 课时1：1. babel介绍 03:36
```javascript
     # babel
        ES6/7 -> ES5

        JSX

        拆分

        预设
            -core
            -plugin
            -preset

        生态
            -webpack
            -gulp
            -elint
            -....
```


###### 课时2：2. babel的安装 10:20
```javascript

     # 安装
        // 6.x
        npm install babel-cli -g                全局安装
        npm install babel-cli --save-dev        本地开发环境安装

        // 5.x
        npm install babel -g                    全局安装
        npm install babel --save-dev            本地开发环境安装


        // babel 操作
        $ babel -V                              查看安装后的版本
        $ babel --help                          查看帮助文件

        $ mkdir babel-demos                     创建一个文件夹
        $ cd babel-demos                        进入babel-demos这个文件夹里面
        $ git init                              初始化一个.git的文件
        $ npm inist -y                          生成一个package.json文件

        $ touch test.js                         创建一个文件
              var sum = (a, b) {
                  console.log(a + b);
               }
               sum(1, 6);

        // 编译text.js这个文件
        $ babel test.js --out-file output.js     编译test.js文件后，并生输出生成一个outpus.js的文件        
        $ mkdir src                              创建src一个文件夹
        $ mv test.js src                         移动test.js文件到src文件夹目录里面去
        $ ls                                     查看
        $ rm -rf output.js                       删除output.js的文件
        $ babel src --out-dir dist               就是用babel编译 src目录下面的所有js文件到dist文件夹存到这里


        $ babel src --out-dir dist -w            -w 是监听这里所有的文件


        # babel-cli 开发依赖安装
        $ npm install babel-cli --save-dev       开发环境依赖安装


        # babel-node 的应用
        $ bagel-node src/test.js
```
###### 课时3：3. 如何在babel使用预设 10:37
```javascript
    ES6/7解析

    -plugin
    -presets
        -babel-preset-es2015
        -babel-preset-es2015-loose
        -babel-preset-stage-0
        -babel-preset-stage-1
        -babel-preset-es2016

    # 第一步：创建一个.babelrc 的文件
        $ touch .babelrc
        {
            "presets":["es2015"]
        }


    # 第二步：安装 babel-preset-2015
        $ npm install babel-preset-es2015 --save-dev       主要用来解析ES6/7

        在 package.json 文件里里的对象中的位置"scripts"添加
        "build":"babel src -d dist -w"

    # 第三步：配置.baabelrc 及 package.json文件
            .babelrc
                改前
                {
                    "presets":["es2015"]
                }


                改后
                {
                    "presets":["es2015-loose"]
                }



            如下源文件 package.json
                {
                  "name": "fullStack",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "build":"babel src --out-dir dist -w"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "devDependencies": {
                    "babel-cli": "^6.23.0",
                    "babel-preset-es2015": "^6.22.0"
                  }
                }

    # 第四步：运行编译ES6
        $ npm run build     运行编译

        再次配置 .babelrc 的文件
            {
                "presets":["es2015","es2016"]
            }

```
###### 课时4：4. 如何使用babel插件 08:38
```javascript  

    # babel plugin
        -ES6



        # export default xx;
        --babel-plugin-add-module-exports

        安装插件
        $ npm install babel-plugin-add-module-exports --save-dev
            配置 .babelrc 的文件
            {
                "presets":["es2015"],
                "plugins":["add-module-exports"]
            }




        --babel-plugin-add-module-exports
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var sum = function sum(a, b) {
              return a + b;
            };

            exports.default = sum;
            module.exports = exports["default"];

        # 安装 插件 并使用转换为umd的规范来写。
            $ npm install babel-plugin-transform-es2015-modules-umd --save-dev

            配置 .babelrc文件

```

###### 课时5：5. 如何使用babel转换react语法 06:53
```javascript

     # babel 解析 react jsx 语法
     -jsxtransformer.js
     -babel
        -babel-preset-react

     安装 react的插件
      $ npm install babel-preset-react --save-dev

      配置 .babelrc 文件

      {
       "presets":["es2015", "react"]
      }


      安装 react react-dom
      $ npm install react react-dom --save-dev


      创建 test.js
          import React, {Component} from "react";
          import ReactDOM ,{render} from "react-dom";

          // 封装一个组件
          class MyComponent extends Component{
              render(){
                  return <h1>Hello World!</h1>;
              }
          };

          render(<Mycomponent />, document.getElementById("app"));


      创建 index.html

          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Document</title>
          </head>
          <body>
              <div id="app"></div>
              <script src="test.js"></script>
          </body>
          </html>

```
###### 课时6：6. 如何在gulp中使用babel 06:00
```javascript   
    /*
    # babel
        -gulp
    */    
```
###### 课时7：react第二周测试题
