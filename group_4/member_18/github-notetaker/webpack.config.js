let path = require("path");
let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:path.join(__dirname, "./src/app.js"),
    output:{
        path:path.join(__dirname, "dist"),
        filename:"bundle.js"
    },

    module:{
        loader:[
            {
                test:/\jsx?$/,
                loader:"babel",
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname, "./src/index.html")
        })
    ]
}
