<?php

/**
 * Register Custom Aino Block Patterns and Pattern Categories.
 */
function ainoblocks_register_block_patterns() {
	if ( function_exists( 'register_pattern' ) ) {

		/**
		 * Register block patterns.
		 */
		register_block_pattern(
			'ainoblocks/hero-one',
				array(
					'title'      => __('Hero One', 'ainoblocks'),
					'content'    => "<!-- wp:group {\"align\":\"full\",\"style\":{\"color\":{\"background\":\"#f7c7c6\"}}} -->\n<div class=\"wp-block-group alignfull has-background pt__0 pb__0 pl__0 pr__0\" style=\"background-color:#f7c7c6\"><div class=\"wp-block-group__inner-container\"><!-- wp:ainoblocks/hero {\"mediaId\":3255,\"mediaType\":\"image\",\"verticalContentAlignment\":\"center\",\"contentGridColumnStart\":2,\"contentGridColumnEnd\":8,\"mediaGridColumnStart\":5,\"mediaGridColumnEnd\":12} -->\n<div class=\"wp-block-ainoblocks-hero alignfull content-vertically-aligned-center\"><div class=\"wp-block-ainoblocks-hero__container\"><div class=\"wp-block-ainoblocks-hero__content\" style=\"grid-column-start:2;grid-column-end:8\"><!-- wp:heading {\"placeholder\":\"Write heading…\",\"fontSize\":\"l\"} -->\n<h2 class=\"has-l-font-size\">Digital Creators</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Start writing here…\",\"className\":\"hero-text col3\"} -->\n<p class=\"hero-text col3\">Hi, we are a small design agency from New Zealand. We love to create digital content and thrive to bring interactive experiences to life.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:ainoblocks/multiple-buttons {\"items\":1} -->\n<div class=\"wp-block-ainoblocks-multiple-buttons\"><div class=\"wp-block-ainoblocks-multiple-buttons__inner\"><!-- wp:ainoblocks/button {\"uppercase\":true,\"backgroundColor\":\"black\"} -->\n<div class=\"wp-block-ainoblocks-button\"><a class=\"wp-block-ainoblocks-button__link size-m fontsize-s radius-square has-background has-black-background-color is-uppercase\" style=\"box-shadow:inset 0 0 0 1px undefined\">Find out more</a></div>\n<!-- /wp:ainoblocks/button --></div></div>\n<!-- /wp:ainoblocks/multiple-buttons --></div><figure class=\"wp-block-ainoblocks-hero__media\" style=\"grid-column-start:5;grid-column-end:12\"><img src=\"http://ainodev.local/wp-content/uploads/2020/06/Image.png\" alt=\"\" class=\"wp-image-3255\"/></figure></div></div>\n<!-- /wp:ainoblocks/hero --></div></div>\n<!-- /wp:group -->",
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

		/*
		* Unregister core patterns.
		*/
		unregister_block_pattern('core/features-services');
		unregister_block_pattern('core/testimonials');
		unregister_block_pattern('core/hero-right-column');
		unregister_block_pattern('core/its-time');
		unregister_block_pattern('core/numbered-features');
		unregister_block_pattern('core/hero-two-columns');
		unregister_block_pattern('core/two-images');
		unregister_block_pattern('core/cover-abc');
		unregister_block_pattern('core/two-buttons');
		unregister_block_pattern('core/text-two-columns');
	}
}
add_action( 'init', 'ainoblocks_register_block_patterns' );
