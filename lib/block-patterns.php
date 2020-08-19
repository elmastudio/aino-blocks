<?php

/**
 * Register Aino Block Patterns and Pattern Categories.
 */
function ainoblocks_register_block_patterns() {
	if ( function_exists( 'register_block_pattern' ) ) {

		/**
		 * Register block patterns.
		 */
		register_block_pattern(
			'ainoblocks/hero',
				array(
					'title'      => __('Hero Aino', 'ainoblocks'),
					'content'    => "<!-- wp:group {\"align\":\"full\",\"className\":\"pt__0 pb__0 pl__0 pr__0\",\"style\":{\"color\":{\"background\":\"#f7c7c6\"}}} -->\n<div class=\"wp-block-group alignfull pt__0 pb__0 pl__0 pr__0 has-background\" style=\"background-color:#f7c7c6\"><div class=\"wp-block-group__inner-container\"><!-- wp:ainoblocks/hero {\"mediaId\":3255,\"mediaType\":\"image\",\"verticalContentAlignment\":\"center\",\"contentGridColumnStart\":2,\"contentGridColumnEnd\":7,\"mediaGridColumnStart\":5,\"mediaGridColumnEnd\":12} -->\n<div class=\"wp-block-ainoblocks-hero alignfull content-vertically-aligned-center\"><div class=\"wp-block-ainoblocks-hero__container\"><div class=\"wp-block-ainoblocks-hero__content\" style=\"grid-column-start:2;grid-column-end:7\"><!-- wp:heading {\"placeholder\":\"Write heading…\",\"fontSize\":\"l\",\"style\":{\"typography\":{\"lineHeight\":\"1.1\"}}} -->\n<h2 class=\"has-l-font-size\" style=\"line-height:1.1\"><strong>Digital Creators</strong></h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Start writing here…\",\"className\":\"hero-text col3\",\"fontSize\":\"l\"} -->\n<p class=\"hero-text col3 has-l-font-size\">Hi, we are a small design agency from New Zealand. We love to create digital content and thrive to bring interactive experiences to life.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:ainoblocks/multiple-buttons {\"items\":1} -->\n<div class=\"wp-block-ainoblocks-multiple-buttons\"><div class=\"wp-block-ainoblocks-multiple-buttons__inner\"><!-- wp:ainoblocks/button {\"uppercase\":true,\"backgroundColor\":\"black\",\"label\":\"Find out more\"} -->\n<div class=\"wp-block-ainoblocks-button\"><a class=\"wp-block-ainoblocks-button__link size__m has-custom-background is-uppercase no-border-radius\" style=\"background-color:black\" target=\"_self\" rel=\"noopener noreferrer\">Find out more</a></div>\n<!-- /wp:ainoblocks/button --></div></div>\n<!-- /wp:ainoblocks/multiple-buttons --></div><figure class=\"wp-block-ainoblocks-hero__media\" style=\"grid-column-start:5;grid-column-end:12\"><img src=\"https://wpaino.s3.eu-central-1.amazonaws.com/aino_hero-01.png\" alt=\"\" class=\"wp-image-3255\"/></figure></div></div>\n<!-- /wp:ainoblocks/hero --></div></div>\n<!-- /wp:group -->",
					'categories' => array( 'ainoblocks-hero' ),
				)
		);

		/*
		* Register pattern categories.
		*/
		register_block_pattern_category(
			'ainoblocks-hero',
				array( 'label' => __( 'Aino Hero', 'ainoblocks' ) )
		);

		register_block_pattern_category(
			'ainoblocks-portfolio',
				array( 'label' => __( 'Aino Portfolio', 'ainoblocks' ) )
		);
	}
}
add_action( 'init', 'ainoblocks_register_block_patterns' );
