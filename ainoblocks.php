<?php
 /**
 * Plugin Name:       AinoBlocks - Essential Gutenberg Page Builder Blocks
 * Plugin URI:        https://ainoblocks.io/
 * Description:       A collection of page builder blocks for professional WordPress websites.
 * Requires at least: 5.9
 * Tested up to:      6.0
 * Requires PHP:      7.0
 * Version:           1.9.2
 * Author:            Elma Studio
 * Author URI:        https://elmastudio.de/en/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ainoblocks
 *
 * @package           ainoblocks
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
define( 'AINOBLOCKS_VERSION', '1.9.2' );
define( 'AINOBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'AINOBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Enqueue JS and CSS.
 */
require_once AINOBLOCKS_PLUGIN_DIR . '/lib/enqueue-scripts.php';

/**
 * Add CTA link to plugin list
 */
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'add_action_links' );

function add_action_links ( $links ) {
 $mylinks = array(
 '<a href="https://ainoblocks.io/pricing/" target="_blank">Upgrade</a>',
 );
return array_merge( $links, $mylinks );
}