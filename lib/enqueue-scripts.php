<?php
/**
 * Enqueue Scripts.
 *
 * @package ainoblocks
 * @since 0.0.1
 */

namespace Aino_Blocks;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function enqueue_block_editor_assets() {

	$block_path = '/dist/js/editor.blocks.build.js';
	$style_path = '/dist/css/blocks.editor.build.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'ainoblocks-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $block_path ),
		true
	);

	// Enqueue optional editor only styles.
	wp_enqueue_style(
		'ainoblocks-editor-css',
		_get_plugin_url() . $style_path,
		[],
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_assets' );

/**
 * Enqueue front end and editor JavaScript and CSS assets.
 */
function enqueue_assets() {
	$style_path = '/dist/css/blocks.style.build.css';
	wp_enqueue_style(
		'ainoblocks',
		_get_plugin_url() . $style_path,
		null,
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_frontend_assets' );

/**
 * Enqueue frontend JavaScript and CSS assets.
 */
function enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$block_path = '/dist/js/frontend.blocks.build.js';
	wp_enqueue_script(
		'ainoblocks-frontend',
		_get_plugin_url() . $block_path,
		[],
		filemtime( _get_plugin_directory() . $block_path ),
		true
	);
}
