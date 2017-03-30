var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const port = 3000;

module.exports = {
  devtool: 'cheap-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: port,
    compress: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
      }),
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: 'url-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'React demo app',
        template: 'index.html'
    }),
    new ExtractTextPlugin("styles.css")/*,
    new webpack.optimize.UglifyJsPlugin(),
    new OpenBrowserPlugin({
        url: `http://localhost:${port}`
    })*/
  ]
};
