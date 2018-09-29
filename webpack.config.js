const webpack = require('webpack');
// const { rootPath } = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack-hot-middleware');

const helpers = require('./config/webpack/helpers');
// const webpackCommon = require('./config/webpack/webpack.common');


// module.exports = {
// 	mode: webpackCommon.mode,
// 	entry: webpackCommon.entry,
// 	module: webpackCommon.module,
// 	resolve: webpackCommon.resolve,
// 	output: webpackCommon.output,
// 	plugins: webpackCommon.plugins
// };

module.exports = {
	mode: 'development',
	entry: {
		'polyfills': './src/polyfills.js',
		'app': './src/app/Components/app.module.ts'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				common: {
					name: 'common',
					chunks: 'initial',
					minSize: 2
				}
			}
		}
	},
	module: {
		rules: [
			// Scripts loaders
			{
				test: /\.ts$/,
				use: {
					loader: 'ts-loader'
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
				test: /\.styl$/,
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
		filename: 'bundle.[name].js',
		path: helpers.path('dist'),
		publicPath: '/'
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
        	// The (\\|\/) piece accounts for path separators in *nix and Windows
        	/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        	'./src', // location of your src
        	{} // a map of your routes 
      	),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			output: './dist',
			inject: 'head'
		}),
		new ScriptExtPlugin({
			defaultAttribute: 'defer'
		}),
		new webpack.HotModuleReplacementPlugin()
	]

};