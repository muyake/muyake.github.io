var path = require('path');
module.exports = {
  entry: "./public/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'public'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}