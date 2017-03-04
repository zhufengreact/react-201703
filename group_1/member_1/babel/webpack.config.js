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