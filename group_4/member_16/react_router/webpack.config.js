var path = require('path')
var webpack = require('webpack')
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new uglifyPlugin({
      compress: false
    })
  ]
}
