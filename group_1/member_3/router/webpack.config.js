const webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    merge = require('webpack-merge'),
    mode = require('yargs').argv.mode;

const development = require('./webpack.dev.config.js');
const production = require('./webpack.prod.config.js');

const PATHS = {
    src: path.resolve(__dirname, 'src'),   // 源路径
    build: path.resolve(__dirname, 'build'),  // 根路径
    modules: path.resolve(__dirname, 'node_modules') // 依赖模块路径
};

const config = {

    output: {
        path: './build/',
        publicPath: '/',
        filename: 'js/[name].min.js'
    },

	module: {
		loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot','babel'],
                exclude: PATHS.modules,
                include: PATHS.src
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css!postcss')
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style','css!postcss!stylus'),
                include: PATHS.src
            },
            // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
				test: /\.(png|jpg)$/i,
				loader: 'url?limit=8195&name=images/[name].[ext]',
                include: PATHS.src
			},
			{
				test: /\.(svg|woff|eot|ttf)([\?]?.*)$/i,
				loader: 'url?&limit=8195&name=fonts/[name].[ext]',
                include: PATHS.src
			}
		]
	},

    resolve: {
        root: PATHS.src,
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['', '.js', '.jsx', '.css', '.styl', '.png', '.jpg', '.jpeg']
    },

    postcss: function() {
        return [
            cssnext({
                autoprefixer: {
                    browsers: ['ie >= 9', 'ios >= 8', 'android >= 4.4.2']
                }
            }),
            postcssImport({
                addDependencyTo: webpack
            })
       ];
    }
}

// Default configuration
if(mode === 'dev') {
  module.exports = merge(development, config);
}

if(mode === 'build') {
  module.exports = merge(production, config);
}
