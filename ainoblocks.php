<?php
/**
 * Plugin Name: Aino Blocks - Site Building Blocks
 * Plugin URI: https://wpaino.com
 * Description: A collection of site building blocks for the WordPress Gutenberg editor.
 * Version: 0.2.0
 * Author: Elmastudio
 * Author URI: https://www.elmastudio.de/en/
 * Text Domain: ainoblocks
 * Domain Path: /languages
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ainoblocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gets this plugin's absolute directory path.
 *
 * @since 0.0.1
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since 0.0.1
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS.
require_once __DIR__ . '/lib/enqueue-scripts.php';

// Block Templates.
require_once __DIR__ . '/lib/block-templates.php';
