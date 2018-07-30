// const webpack = require('webpack');
// const webpackMerge = require('webpack-merge');
const helpers = require('./config/webpack/helpers');
const webpackCommon = require('./config/webpack/webpack.common');


module.exports = {
	mode: webpackCommon.mode,
	entry: webpackCommon.entry,
	module: webpackCommon.module,
	resolve: webpackCommon.resolve,
	output: webpackCommon.output,
	plugins: webpackCommon.plugins
};