const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		filename: '[name].[hash:5].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [path.resolve(__dirname, 'node_modules/')],
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
	devServer: {
		hot: false,
		port: 3000,
	},
};
