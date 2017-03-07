/**
 * Created by dujingya on 17/2/28.
 */

var webpack=require("webpack");
var CleanPlugin=require('clean-webpack-plugin');
var webpackDevServer=require('webpack-dev-server');

module.exports={
    entry:"./src",
    output:{
        path:'./builds',
        filename:"bundle.js",
    },
    module:{
        loaders:[
            {
                test:/\.js/,
                // exclude:/node_modules/,
                loader:'babel-loader',
                include:/src/
            },
            {
                test:/\.scss/,
                loaders:['style-loader','css-loader','sass-loader'],
                include:/src/
            },
            {
                test:/\.(png|gif|jpe?g|svg)/,
                loader:'url?limit=10000'
            },
            {
                test:/\.html/,
                loader:'html-loader',
            }

        ]
    },
    plugins:[
        new webpack.BannerPlugin('webpack教程实例'),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            },
            output:{
                comments:false,
            },
        }),
    ],
    devServer:{
        stats:{color:true},
        port:8081,
        contentBase:"builds"
    }
}