<?php

/**
 * Register Aino Block Patterns and Pattern Categories.
 */
function ainoblocks_register_block_patterns() {
	if ( function_exists( 'register_block_pattern' ) ) {

	}
}
add_action( 'init', 'ainoblocks_register_block_patterns' );
