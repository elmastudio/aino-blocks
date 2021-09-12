const path = require('path');

/**
 * External dependencies
 */

// Load webpack for use of certain webpack tools and methods
const webpack = require('webpack');

// For extracting CSS (and SASS) into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new MiniCssExtractPlugin({
	filename: './dist/css/blocks.style.build.css',
});
const editBlocksCSSPlugin = new MiniCssExtractPlugin({
	filename: './dist/css/blocks.editor.build.css',
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{
			loader: 'postcss-loader',
			options: {
				plugins: [require('autoprefixer')],
			},
		},
		{
			loader: 'sass-loader',
			query: {
				outputStyle:
					'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
			},
		},
	],
};

module.exports = {
	entry: {
		'./dist/js/editor.blocks.build': './src/blocks.js',
		'./dist/js/frontend.blocks.build': './src/frontend.js',
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js',
	},
	watch: 'production' !== process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /style\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
			},
			{
				test: /editor\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		blocksCSSPlugin,
		editBlocksCSSPlugin,
	],
	externals: {
		'lodash': 'lodash'
	}
};