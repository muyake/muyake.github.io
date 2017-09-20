const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        game: './public/js/game.js',
        //pc: './public/css/pc.css',
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [            
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            {
                test: /\.(png|jpg|ico)$/,
                loader: "url-loader?limit=8192&name=../static/img/[hash].[ext]"
            }, {
                test: path.join(__dirname, 'public/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                }
            }, {
                test: /\.mp3(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '../static/mp3/[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new extractTextPlugin("../css/[name]-[hash].css"),
        new htmlWebpackPlugin({
            title: "",
            favicon:'./public/images/ico/favicon.ico',
            filename: '../html/index.html',
            template: './public/template/index.ejs',
        })

    ]
}
