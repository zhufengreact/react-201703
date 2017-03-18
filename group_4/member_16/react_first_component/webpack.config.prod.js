var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/css/[name].[hash:8].css');
var extractLESS = new ExtractTextPlugin('stylesheets/less/[name].[hash:7].css');

var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var htmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: path.resolve(__dirname, './myList.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js?[hash:6]',
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
    new uglifyPlugin({
      compress: false
    }),
    extractCSS,
    extractLESS,
    new webpack.BannerPlugin('作者： wgx\n日期：'+Date.now())
  ]
}

module.exports = config;