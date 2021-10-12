const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
