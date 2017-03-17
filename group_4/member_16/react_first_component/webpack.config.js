var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/css/[name].[hash:8].css');
var extractLESS = new ExtractTextPlugin('stylesheets/less/[name].[hash:7].css');

var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var config = {
  entry: path.resolve(__dirname, './myList.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: 'dist',
    inline: true,
    port: 8080,
    stats: {
      color: true,
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.less$/,
        loader: extractLESS.extract({ fallback: 'style-loader', use: 'css-loader!less-loader'}),
        include: path.resolve(__dirname, 'src'),
      },
      {
        test:/\.css$/,
        loader: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader'}),
        include: path.resolve(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'myList',
      template: './src/index.html'
    }),
    new openBrowserWebpackPlugin({ url : 'http://localhost:8080'}),
    extractCSS,
    extractLESS,
  ]
}

module.exports = config;