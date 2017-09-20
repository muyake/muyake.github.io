const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        game: './public/js/game.js',
        pc: './public/css/pc.css',
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: extractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpg|ico)$/,
            loader: "url-loader?limit=8192&name=../static/img/[hash].[ext]"
        }, {
            test: path.join(__dirname, 'public/js'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            }
        }, {
            test: /\.ejs$/,
            loader: 'ejs-loader?variable=data'
        }, {
            test: /\.mp3(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '../static/mp3/[hash].[ext]'
            }
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new extractTextPlugin("[name].css"),
        new htmlWebpackPlugin({
            title: "",
            filename: '../html/index.html',
            template: 'index2.ejs',
            //chunks: ['public', 'requestNextAnimationFrame', 'sprite', 'gameEngine', 'stopwatch', 'config', 'gameSource', 'audioControl', 'gameProgress', 'clip', 'progressbar', 'collisionDetection', 'behaviorList', 'spriteAnimator', 'gameSprite', 'game'],
            //chunks: ['game'],
            // chunks: ['main'],
            chunksSortMode: function(chunk1, chunk2) {
                var order = ['public', 'requestNextAnimationFrame', 'sprite', 'gameEngine', 'stopwatch', 'config', 'gameSource', 'audioControl', 'gameProgress', 'clip', 'progressbar', 'collisionDetection', 'behaviorList', 'spriteAnimator', 'gameSprite', 'game'];
                var order1 = order.indexOf(chunk1.names[0]);
                var order2 = order.indexOf(chunk2.names[0]);
                return order1 - order2;
            },
        })

    ]
}