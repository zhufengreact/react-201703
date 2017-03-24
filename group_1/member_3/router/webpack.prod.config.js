'use strict';

const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

const config = {
    devtool: false,

    entry: {
        index: './src/index'
    },

	plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
		// 分离打包css文件
		new ExtractTextPlugin('css/[name].min.css', {
	        allChunks: true,
	        disable: false
	    }),
        // 压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', 'exports', 'require']
        }),
        // 确保模块按顺序执行
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.MinChunkSizePlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
		// 自动创建html文件
		new HtmlWebpackPlugin({
            title: 'React-router Demo',
			template: path.resolve(__dirname, './src/index.html'),
			filename: path.resolve(__dirname, './build/index.html'),
			inject: 'body',
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: false    //删除空白符与换行符
            },
            chunks:['index']
		})
	]
};

module.exports = config;
