import * as path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
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
