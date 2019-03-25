/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./src/contact/sendEmail');
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const serverPort = process.env.PORT || 3000;

app.post('/sendMessage', sendEmail);

const server = app.listen(serverPort, () => {
  const { address, port } = server.address();
  console.log('App listening at http://%s:%s', address, port);
});
