var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:"./app.js",
    output:{
        path: join(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
  
    module:{
        rules:[
            {test:/\.hbs$/, use:"html-loader"},
            {test:/\.css$/, use: ExtractTextPlugin.extract("css-loader")}
        ]
    },
    plugins:[
        new ExtractTextPlugin("styleMilitary.css"),
        new HtmlWebpackPlugin({
            template: "./military.html"
        })
    ]
}