<?php
/**
 * Plugin Name: Aino Blocks - Creative Block Collection
 * Plugin URI : https://wpaino.com
 * Description: A collection of blocks and block patterns for creative WordPress users. Let's start to build websites that stand out from the crowd.
 * Version: 1.8.1
 * Requires at least: 5.5
 * Tested up to: 5.8.1
 * Author: Elma Studio
 * Author URI: https://www.elmastudio.de/en/
 * Text Domain: ainoblocks
 * Domain Path: /languages
 * License: GPL v2 or later
 * License URI: http: //www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ainoblocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define most essential constants.
define( 'AINOBLOCKS_VERSION', '1.2.0' );
define( 'AINOBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'AINOBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Enqueue JS and CSS.
require_once AINOBLOCKS_PLUGIN_DIR . '/lib/enqueue-scripts.php';

// Block Patterns.
require_once AINOBLOCKS_PLUGIN_DIR . '/lib/block-patterns.php';
