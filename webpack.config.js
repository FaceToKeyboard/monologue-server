const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
  ],
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
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'}
        ],
      },
    ]
  }
}
