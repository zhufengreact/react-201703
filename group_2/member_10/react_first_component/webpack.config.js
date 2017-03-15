var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
//            {
//                test: /\.js$/,
//                exclude: /node_modules/,
//                loader: 'eslint-loader'
//            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.html/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    'devtool': 'cheap-source-map'
}