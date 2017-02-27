```shell
npm init -y;
npm install babel-cli -g
npm install babel-cli babel-loader babel-preset-es2015 webpack --save-dev
mkdir {src3,src4}
touch .babelrc  # 或者 webpack.config.js 里设置query
{
    "presets":["es2015"]
}
touch webpack.config.js

var path = require('path');
var webpack = require('webpack');


var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./disc'),
        filename:'babel_learn.js'
    },
    module:{
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            //query: {
            //    presets: ["es2015"]
            //}
        }]
    }
};

module.exports = config;

# package.json "scripts" 加入 "build": "webpack -w --progress --colors"
npm run build
```