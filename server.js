/* eslint-disable no-console */
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(express.static(`${__dirname}/www`));
app.use(express.static(`${__dirname}/resources`));

const serverPort = process.env.PORT || 3000;

const server = app.listen(serverPort, () => {
  const { address, port } = server.address();
  console.log('App listening at http://%s:%s', address, port);
});
