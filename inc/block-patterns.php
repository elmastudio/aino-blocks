<?php
/**
 * Registers block patterns and categories.
 */

function abpatterns_register_block_patterns() {

	$block_pattern_categories = array(
		'heroes'       => array( 'label' => __( 'Heroes', 'abpatterns' ) ),
		'features'     => array( 'label' => __( 'Features', 'abpatterns' ) ),
		'accordions'   => array( 'label' => __( 'Accordions', 'abpatterns' ) ),
		'ctas'         => array( 'label' => __( 'CTAs', 'abpatterns' ) ),
		'headings'     => array( 'label' => __( 'Headings', 'abpatterns' ) ),
		'texts'        => array( 'label' => __( 'Texts', 'abpatterns' ) ),
		'pricing'      => array( 'label' => __( 'Pricing', 'abpatterns' ) ),
		'stats'        => array( 'label' => __( 'Stats', 'abpatterns' ) ),
		'testimonials' => array( 'label' => __( 'Testimonials', 'abpatterns' ) ),
		'galleries'    => array( 'label' => __( 'Galleries', 'abpatterns' ) ),
		'headers'      => array( 'label' => __( 'Headers', 'abpatterns' ) ),
		'footers'      => array( 'label' => __( 'Footers', 'abpatterns' ) ),
	);

	$block_pattern_categories = apply_filters( 'abpatterns_block_patterns_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		register_block_pattern_category( $name, $properties );
	}

		$block_patterns = array(
			'accordions/default/1col-bg',
			'accordions/variant/1col-bg',
			'accordions/default/2col-bg',
			'accordions/variant/2col-bg',
			'accordions/default/3col-bg',
			'accordions/variant/3col-bg',
			'accordions/default/1col-borders',
			'accordions/variant/1col-borders',
			'accordions/default/2col-borders',
			'accordions/variant/2col-borders',
			'ctas/default/centered-with-image',
			'ctas/variant/centered-with-image',
			'heroes/default/6col-gallery',
			'heroes/variant/6col-gallery',
			'features/default/card-1-col',
			'features/variant/card-1-col',
			'features/default/card-1-col-text-image',
			'features/variant/card-1-col-text-image',
			'features/default/cards-2-col',
			'features/variant/cards-2-col',
			'features/default/cards-2-col-33-66',
			'features/variant/cards-2-col-33-66',
			'features/default/cards-2-col-66-33',
			'features/variant/cards-2-col-66-33',
			'features/default/cards-2-col-text-button',
			'features/variant/cards-2-col-text-button',
			'features/default/cards-3-col-text-button',
			'features/variant/cards-3-col-text-button',
			'features/default/cards-3-col-icon-text',
			'features/variant/cards-3-col-icon-text',
			'features/default/brands-oncard',
			'features/variant/brands-oncard',
			'features/default/brands',
			'features/variant/brands',
			'footers/default/horizontal-logo-4col',
			'footers/default/centered',
			'footers/variant/centered',
			'headers/default/nav-centered',
			'headers/variant/nav-centered',
			'headings/default/centered-with-buttons',
			'headings/variant/centered-with-buttons',
			'headings/default/left-with-buttons',
			'headings/variant/left-with-buttons',
			'pricing/default/cards-4-col',
			'pricing/variant/cards-4-col',
			'pricing/default/cards-3-col',
			'pricing/variant/cards-3-col',
			'pricing/default/cards-1-col',
			'pricing/variant/cards-1-col',
			'stats/default/cards-4-col',
			'stats/variant/cards-4-col',
			'galleries/default/2-col-image-text',
			'galleries/default/tab-menu-with-2-col-horizontal',
			'galleries/variant/tab-menu-with-2-col-horizontal',
			'galleries/default/tab-menu-with-2-col-vertical',
			'galleries/variant/tab-menu-with-2-col-vertical',
			'galleries/variant/2-col-image-text',
			'galleries/default/3-col-image-text',
			'galleries/variant/3-col-image-text',
			'galleries/default/image-grid-1-col-2-col',
			'galleries/variant/image-grid-1-col-2-col',
			'texts/default/text-container-sidebar',
			'texts/variant/text-container-sidebar',
			'testimonials/default/cards-3-col-1-big',
			'testimonials/variant/cards-3-col-1-big',
		);

	$block_patterns = apply_filters( 'abpatterns_block_patterns', $block_patterns );

	foreach ( $block_patterns as $block_pattern ) {
		register_block_pattern(
			'abpatterns/' . $block_pattern,
			require __DIR__ . '/patterns/' . $block_pattern . '.php'
		);
	}
}

add_action( 'init', 'abpatterns_register_block_patterns', 9 );