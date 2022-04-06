<?php
/**
 * Enqueue Scripts.
 *
 * @package ainoblocks
 */

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function ainoblocks_enqueue_block_editor_assets() {

	$block_path = '/dist/js/editor.blocks.build.js';
	$style_path = '/dist/blocks.editor.build.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'ainoblocks-js',
		AINOBLOCKS_PLUGIN_URL . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( AINOBLOCKS_PLUGIN_DIR . $block_path ),
		true
	);

	// Enqueue optional editor only styles.
	wp_enqueue_style(
		'ainoblocks-editor-css',
		AINOBLOCKS_PLUGIN_URL . $style_path,
		[],
		filemtime( AINOBLOCKS_PLUGIN_DIR . $style_path )
	);
}

add_action( 'enqueue_block_editor_assets', 'ainoblocks_enqueue_block_editor_assets' );

/**
 * Enqueue front end and editor JavaScript and CSS assets.
 */
function ainoblocks_enqueue_assets() {
	$style_path = '/dist/blocks.style.build.css';

	wp_enqueue_style(
		'ainoblocks',
		AINOBLOCKS_PLUGIN_URL . $style_path,
		null,
		filemtime( AINOBLOCKS_PLUGIN_DIR . $style_path )
	);
}

add_action( 'enqueue_block_assets', 'ainoblocks_enqueue_assets' );
