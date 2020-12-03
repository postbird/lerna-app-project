const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'src/'),
		filename: '[name].[hash].bundle.[ext]',
	},
	resolve: {
		extensions: ['js', 'jsx', 'json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	devServer: {
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
};
