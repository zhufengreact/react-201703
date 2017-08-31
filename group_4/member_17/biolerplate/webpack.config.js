const path = require('path')
const webpack = require('webpack')
const webpackHtmlPlungin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const openBrowser = require('open-browser-webpack-plugin')

const config = {
  entry: {
    index:  path.resolve(__dirname, './src/entries/index.js'),
    zhufeng: path.resolve(__dirname, './src/entries/zhufeng.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // main.js?hash
    filename: '[name].js?[hash:6]'
  },
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.resolve(__dirname, 'imgs')],
    compress: true,
    port: 9000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules'
    }, {
      test: /\.css$/,
      // style->css
      // https://github.com/webpack-contrib/style-loader
      // loader: 'style-loader!css-loader',
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'}
      ),
      //包括的目录
      include: path.resolve(__dirname, 'src')
    },{
      test: /\.less$/,
      // style->css->less
      // loader: 'style-loader!css-loader!less-loader',
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!less-loader'
      }),
      //包括的目录
      include: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [
    new webpackHtmlPlungin({
      title: 'webpackHtmlPlungin',
      // relate to output.path
      filename: 'index.html',
      template: 'src/templates/index.html',
      //模板的入口文件
      chunks: ['index']
    }),
    new webpackHtmlPlungin({
      title: 'zhufeng react',
      filename: 'zhufeng.html',
      template: 'src/templates/zhufeng.html',
      // 模板的入口文件
      chunks: ['zhufeng']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      async: true
    }),
    new ExtractTextPlugin('styles.css'),

    new openBrowser({url: 'http://localhost:9000'})
  ],
  resolve: {
    extensions: ['.css', '.js', '.less'],
    alias: {
        components : path.resolve(__dirname,'src/components'),
        containers : path.resolve(__dirname, 'src/containers/'),
        mock: path.resolve(__dirname, 'src/mock'),
        assets: path.resolve(__dirname, 'src/assets')
    }
  }
}

module.exports = config

