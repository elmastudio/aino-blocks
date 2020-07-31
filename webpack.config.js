const path = require('path');

/**
 * External dependencies
 */

// Load webpack for use of certain webpack tools and methods
const webpack = require('webpack');

// For extracting CSS (and SASS) into separate files
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new ExtractTextPlugin({
	filename: './dist/css/blocks.style.build.css',
});
const editBlocksCSSPlugin = new ExtractTextPlugin({
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
	devtool: 'cheap-eval-source-map',
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
				use: blocksCSSPlugin.extract(extractConfig),
			},
			{
				test: /editor\.s?css$/,
				use: editBlocksCSSPlugin.extract(extractConfig),
			},
		],
	},
	plugins: [
		blocksCSSPlugin,
		editBlocksCSSPlugin,
	],
};
