const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * External dependencies
 */

// For extracting CSS (and SASS) into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new MiniCssExtractPlugin({
	filename: './dist/css/blocks.style.build.css',
});

const editBlocksCSSPlugin = new MiniCssExtractPlugin({
	filename: './dist/css/blocks.editor.build.css',
});

module.exports = {
	entry: {
		'./js/editor.blocks.build': './src/blocks.js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                style: {
                    name: 'style',
                    test: /style\.s?css$/,
                    chunks: 'all',
                    enforce: true,
                },
                editor: {
                    name: 'editor',
                    test: /editor\.s?css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
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
				use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
			},
			{
				test: /editor\.s?css$/,
				use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ],
			},
		],
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: 'blocks.[name].build.css'
        }),

        new CleanWebpackPlugin(['dist'])
    ],
};