const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('public'),
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
