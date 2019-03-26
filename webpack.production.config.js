const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'production',
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'],
          plugins: [
            '@babel/plugin-transform-async-to-generator',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'react-svg-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
