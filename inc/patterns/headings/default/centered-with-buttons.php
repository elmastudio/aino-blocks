<?php
return array(
	'title'      => __( 'Centered with buttons, default', 'abpatterns' ),
	'categories' => array( 'headings' ),
	'content'    => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12"}}},"backgroundColor":"background-primary","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull has-background-primary-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-bottom:var(--wp--preset--spacing--12)"><!-- wp:ainoblocks/grid-container {"columnGap":"col-gap-m"} -->
	<div class="wp-block-ainoblocks-grid-container alignwide ab-grid-block col-gap-m"><!-- wp:ainoblocks/grid-item {"gridColumnStartDesktop":3,"gridColumnEndDesktop":11,"gridColumnStartTablet":3,"gridColumnEndTablet":11} -->
	<div class="wp-block-ainoblocks-grid-item col_start_d__3 col_end_d__11 col_start_t__3 col_end_t__11 col_start_m__1 col_end_m__13 no-stacking"><!-- wp:heading {"textAlign":"center","textColor":"font-tertiary","fontSize":"text-xs","paddingBottom":5} -->
	<h2 class="has-text-align-center has-font-tertiary-color has-text-color has-text-xs-font-size pb__5">Introduction to this section</h2>
	<!-- /wp:heading -->
	
	<!-- wp:heading {"textAlign":"center","textColor":"font-primary","fontSize":"text-xxxl"} -->
	<h2 class="has-text-align-center has-font-primary-color has-text-color has-text-xxxl-font-size">A smaller section heading</h2>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"align":"center","textColor":"font-secondary","fontSize":"text-m","paddingTop":5,"paddingBottom":1} -->
	<p class="has-text-align-center has-font-secondary-color has-text-color has-text-m-font-size pt__5 pb__1">A description text to describe the content further.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:ainoblocks/multiple-buttons {"align":"center","flexDirectionMobile":"m__row","gapDesktop":true,"gapTablet":true,"gapMobile":true,"paddingTop":8} -->
	<div class="wp-block-ainoblocks-multiple-buttons aligncenter m__row m__gap t__gap d__gap pt__8"><!-- wp:ainoblocks/button {"borderRadius":12,"label":"Get started","className":"is-style-primary"} -->
	<div class="wp-block-ainoblocks-button is-style-primary" style="border-radius:12px"><a class="wp-block-ainoblocks-button__link size__m 12" style="border-radius:12px">Get started</a></div>
	<!-- /wp:ainoblocks/button -->
	
	<!-- wp:ainoblocks/button {"borderRadius":12,"label":"More info","className":"is-style-outline"} -->
	<div class="wp-block-ainoblocks-button is-style-outline" style="border-radius:12px"><a class="wp-block-ainoblocks-button__link size__m 12" style="border-radius:12px">More info</a></div>
	<!-- /wp:ainoblocks/button --></div>
	<!-- /wp:ainoblocks/multiple-buttons --></div>
	<!-- /wp:ainoblocks/grid-item --></div>
	<!-- /wp:ainoblocks/grid-container --></div>
	<!-- /wp:group -->',
);