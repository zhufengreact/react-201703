'use strict';

const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin'),
    path = require('path');

const config = {
    devtool: 'cheap-source-map',

    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://192.168.1.44:2046',
            path.resolve(__dirname, 'src/index.js')
        ]
    },

    devServer: {
        host: '192.168.1.44',
        port: 2046,
        contentBase: 'build'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('css/[name].min.css', {
	        allChunks: true,
	        disable: false
	    }),
        new OpenBrowserWebpackPlugin({url: 'http://192.168.1.44:2046'})
    ]
};

module.exports = config;
