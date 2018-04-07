const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler, {
	publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleWare(compiler));

app.listen(3100, function () {
	console.log('Express server start at 3100 port');
});