<?php
 /**
 * Plugin Name:       AinoBlocks - Block Collection
 * Plugin URI:        https://ainoblocks.io/
 * Description:       A collection of blocks to help you build professional WordPress websites. Let's start to build websites that stand out from the crowd.
 * Requires at least: 5.9
 * Tested up to:      5.9.3
 * Requires PHP:      7.0
 * Version:           1.9.0
 * Author:            Elma Studio
 * Author URI:        https://elmastudio.de/en/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ainoblocks
 *
 * @package           ainoblocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define most essential constants.
define( 'AINOBLOCKS_VERSION', '1.9.0' );
define( 'AINOBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'AINOBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Enqueue JS and CSS.
require_once AINOBLOCKS_PLUGIN_DIR . '/lib/enqueue-scripts.php';
