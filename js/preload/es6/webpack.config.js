module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './bin/app.nw.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}