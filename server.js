/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const { sendEmail } = require('./src/contact/sendEmail');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.production.config.js');

const app = express();

const compiler = webpack(webpackConfig);

app.use(compression());

app.use(webpackDevMiddleware(compiler, {
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
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
