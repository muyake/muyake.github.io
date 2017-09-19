const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        game: './public/js/game.js',
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'public'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
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
