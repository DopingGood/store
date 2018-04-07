const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack-hot-middleware');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: 'src/scripts/app/Components/app.module.ts',
	module: {
		rules: [
			// Scripts loaders
			{
				test: /\.ts$/,
				use: {
					loader: 'awesome-typescript-loader'
				}
			},
			// Templates loaders
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},

			// Styles loaders
			{
				test: /\.styl&/,
				use: {
					loader: 'style-loader!css-loader!stylus-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.styl', '.css', '.html']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'head'
		}),
		new ScriptExtPlugin({
			defaultAttribute: 'defer'
		}),
		new webpack.HotModuleReplacementPlugin()
	]

};