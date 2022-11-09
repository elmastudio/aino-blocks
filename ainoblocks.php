<?php
/**
 * Plugin Name:       AinoBlocks - Gutenberg Website Builder Blocks
 * Plugin URI:        https://ainoblocks.io/
 * Description:       A collection of website builder blocks for the Gutenberg block editor.
 * Requires at least: 5.9
 * Tested up to:      6.1
 * Requires PHP:      7.0
 * Version:           1.13.0
 * Author:            ElmaStudio
 * Author URI:        https://elmastudio.de/en/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ainoblocks
 *
 * @package            ainoblocks
 */

 /**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define most essential constants.
 */
define( 'AINOBLOCKS_VERSION', '1.13.0' );
define( 'AINOBLOCKS_DIR', plugin_dir_path( __FILE__ ) );
define( 'AINOBLOCKS_URL', plugin_dir_url( __FILE__ ) );

 /**
 * Registers the custom block category
 */
add_filter( 'block_categories_all', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'ainoblocks',
				'title' => 'AinoBlocks',
			),
		)
	);
}, 10, 2 );

/**
 * Registers the blocks
 */
function create_block_ainoblocks_block_init() {

	register_block_type( __DIR__ . '/build/testimonial' );
	register_block_type( __DIR__ . '/build/sticker' );
	register_block_type( __DIR__ . '/build/button' );
	register_block_type( __DIR__ . '/build/multiple-buttons' );
	register_block_type( __DIR__ . '/build/icon' );
	register_block_type( __DIR__ . '/build/hero' );
	register_block_type( __DIR__ . '/build/grid-item' );
	register_block_type( __DIR__ . '/build/grid-container' );
	register_block_type( __DIR__ . '/build/flexbox' );
	register_block_type( __DIR__ . '/build/flex-item' );
	register_block_type( __DIR__ . '/build/divider' );
	register_block_type( __DIR__ . '/build/card' );
	register_block_type( __DIR__ . '/build/author' );
	register_block_type( __DIR__ . '/build/profile-image' );
	register_block_type( __DIR__ . '/build/badge' );
	register_block_type( __DIR__ . '/build/accordion-faq' );
}

add_action( 'init', 'create_block_ainoblocks_block_init' );

/**
 * Enqueue editor assets
 */
function ainoblocks_editor_assets() {

	$filters_path = '/assets/js/filters.js';
	$editor_style_path = '/assets/css/editor.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'ainoblocks-js',
		plugin_dir_url( __FILE__ ) . 'assets/js/filters.js',
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( AINOBLOCKS_DIR . $filters_path ),
		true
	);

	// Enqueue editor only styles.
	wp_enqueue_style(
		'ainoblocks-editor-style',
		plugin_dir_url( __FILE__ ) . 'assets/css/editor.css',
		[],
		filemtime( AINOBLOCKS_DIR . $editor_style_path )
	);
}

add_action( 'enqueue_block_editor_assets', 'ainoblocks_editor_assets' );


/**
 * Enqueue frontend CSS
 */
function ainoblocks_frontend_assets() {
	$frontend_style_path = '/assets/css/frontend.css';

	wp_enqueue_style(
	  'ainoblocks-frontend-style',
	  plugin_dir_url( __FILE__ ) . 'assets/css/frontend.css',
	  null,
	  filemtime( AINOBLOCKS_DIR . $frontend_style_path )
	);

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'assets/frontend.asset.php');

	wp_enqueue_script(
		'-frontend',
		plugins_url( 'assets/js/frontend.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

}
add_action( 'enqueue_block_assets', 'ainoblocks_frontend_assets' );