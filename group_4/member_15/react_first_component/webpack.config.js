
var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserPlugin = require('open-browser-webpack-plugin')
var extractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js?[hash:6]'
  },
  devServer:{
    contentBase: "dist",
    inline: true,
    port: 9999,
    stats: {
      colors: true
    }
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        loader: extractTextPlugin.extract({
          fallback:'style-loader',
          use: ['css-loader','sass-loader']
        }),
        include: path.resolve(__dirname, 'src')
      },
      {
        test:/\.sass $/,
        loader: 'style-loader!sass-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title: 'FE flow',
      template: './src/index.html'
    }),
    new extractTextPlugin("styles.css"),
    new openBrowserPlugin({
      url: 'http://localhost:9999'
    })
  ]
}

module.exports = config
