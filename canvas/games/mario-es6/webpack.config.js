var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        public: './public/js/public.js',
        requestNextAnimationFrame: './public/js/libs/requestNextAnimationFrame.js',
        sprite: './public/js/libs/sprite.js',
        gameEngine: './public/js/libs/gameEngine.js',
        stopwatch: './public/js/libs/stopwatch.js',
        config: './public/js/config.js',
        gameSource: './public/js/gameSource.js',
        audioControl: './public/js/audioControl.js',
        gameProgress: './public/js/gameProgress.js',
        clip: './public/js/clip.js',
        progressbar: './public/js/progressbar.js',
        collisionDetection: './public/js/collisionDetection.js',
        behaviorList: './public/js/behaviorList.js',
        spriteAnimator: './public/js/spriteAnimator.js',
        gameSprite: './public/js/gameSprite.js',
        game: './public/js/game.js',
        
       // main:'./public/js/test/main.js'
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
        new htmlWebpackPlugin({
            title: "超级玛丽",
            filename: '../html/index.html',
            template: 'index2.ejs',
            // chunks: ['public','requestNextAnimationFrame','sprite','gameEngine','stopwatch','config','gameSource','audioControl','gameProgress','clip','progressbar','collisionDetection','behaviorList','spriteAnimator','gameSprite','game'],
             
chunks: ['main'],
             chunksSortMode: function (chunk1, chunk2) {
                var order = ['public','requestNextAnimationFrame','sprite','gameEngine','stopwatch','config','gameSource','audioControl','gameProgress','clip','progressbar','collisionDetection','behaviorList','spriteAnimator','gameSprite','game'];
                var order1 = order.indexOf(chunk1.names[0]);
                var order2 = order.indexOf(chunk2.names[0]);
                return order1 - order2;  
        },
        })

    ]
}
