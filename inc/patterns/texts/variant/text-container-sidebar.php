<?php
return array(
	'title'      => __( 'Text container + sidebar, variant', 'abpatterns' ),
	'categories' => array( 'texts' ),
	'content'    => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|12"}}},"backgroundColor":"variant-background-primary","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull has-variant-background-primary-background-color has-background" style="padding-top:var(--wp--preset--spacing--12)"><!-- wp:ainoblocks/grid-container {"columnGap":"col-gap-m"} -->
	<div class="wp-block-ainoblocks-grid-container alignwide ab-grid-block col-gap-m"><!-- wp:ainoblocks/grid-item {"gridColumnStartDesktop":1,"gridColumnEndDesktop":8,"gridColumnStartTablet":1,"gridColumnEndTablet":7,"gridColumnStartMobile":1,"gridColumnEndMobile":13,"alignItem":"start","justifyItem":"stretch","justifyItemTablet":"stretch","justifyItemMobile":"stretch","borderRadius":"none","borderTopLeft":"s","borderTopRight":"s","borderBottomRight":"s","paddingBottom":13} -->
	<div class="wp-block-ainoblocks-grid-item col_start_d__1 col_end_d__8 col_start_t__1 col_end_t__7 col_start_m__1 col_end_m__13 align-self__start justify-self__stretch js__t__stretch js__m__stretch no-stacking btl__s btr__s bbr__s br-all__none pb__13"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|6"}},"layout":{"type":"default"}} -->
	<div class="wp-block-group"><!-- wp:heading {"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-xxl"} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-xxl-font-size">Heading</h2>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary"} -->
	<p class="has-variant-font-secondary-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id integer orci, nunc pellentesque vitae dolor. Etiam mi volutpat, sed at ullamcorper arcu eget dui. Maecenas blandit erat tristique quis. Pellentesque pulvinar ullamcorper dui aliquam, viverra. Malesuada aliquam non congue porttitor dui sodales nec phasellus.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:heading {"style":{"spacing":{"margin":{"top":"var:preset|spacing|9"}}},"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-xxl"} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-xxl-font-size" style="margin-top:var(--wp--preset--spacing--9)">Heading</h2>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary"} -->
	<p class="has-variant-font-secondary-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id integer orci, nunc pellentesque vitae dolor. Etiam mi volutpat, sed at ullamcorper arcu eget dui. Maecenas blandit erat tristique quis. Pellentesque pulvinar ullamcorper dui aliquam, viverra.   Malesuada aliquam non congue porttitor dui sodales nec phasellus.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:heading {"style":{"spacing":{"margin":{"top":"var:preset|spacing|9"}}},"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-xxl"} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-xxl-font-size" style="margin-top:var(--wp--preset--spacing--9)">Heading</h2>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"style":{"spacing":{"padding":{"bottom":"var:preset|spacing|6"}}},"textColor":"variant-font-secondary"} -->
	<p class="has-variant-font-secondary-color has-text-color" style="padding-bottom:var(--wp--preset--spacing--6)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id integer orci, nunc pellentesque vitae dolor. Etiam mi volutpat, sed at ullamcorper arcu eget dui. Maecenas blandit erat tristique quis. Pellentesque pulvinar ullamcorper dui aliquam, viverra. Malesuada aliquam non congue porttitor dui sodales nec phasellus.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:separator {"backgroundColor":"variant-border-secondary"} -->
	<hr class="wp-block-separator has-text-color has-variant-border-secondary-color has-alpha-channel-opacity has-variant-border-secondary-background-color has-background"/>
	<!-- /wp:separator -->
	
	<!-- wp:heading {"style":{"spacing":{"margin":{"top":"var:preset|spacing|9"}}},"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-xxl"} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-xxl-font-size" style="margin-top:var(--wp--preset--spacing--9)">Heading</h2>
	<!-- /wp:heading -->
	
	<!-- wp:ainoblocks/accordion-faq-block {"borderRadius":"none","question":"What do you think is the best way to keep learning?","style":{"border":{"radius":"8px","width":"1px"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}},"borderColor":"variant-border-secondary","textColor":"variant-font-secondary","className":"br__xs","paddingTop":7,"paddingBottom":7,"paddingLeft":7,"paddingRight":7} -->
	<div class="wp-block-ainoblocks-accordion-faq-block icon__right br__xs has-border-color has-variant-border-secondary-border-color has-variant-font-secondary-color has-text-color br-all__none pt__7 pb__7 pl__7 pr__7" style="border-width:1px;border-radius:8px;margin-bottom:var(--wp--preset--spacing--6)" x-data="{ open: false }" @click="open = !open" :class="{\'open\': open, \'close\': ! open }"><div class="accordion"><h3 class="has-xxs-font-size">What do you think is the best way to keep learning?</h3></div><div class="panel"><!-- wp:paragraph {"placeholder":"Write an answer ...","textColor":"variant-font-secondary","fontSize":"text-xs","paddingTop":7} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size pt__7">Great question! My answer is there\'s no one right way to go about it. Even though today\'s fast-paced business world can demand optimised time management, self-accelerated education resources is critical for any entrepreneur looking to gain more knowledge on.</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:ainoblocks/accordion-faq-block -->
	
	<!-- wp:ainoblocks/accordion-faq-block {"borderRadius":"none","question":"What is the best digital marketing strategy that you have used?","style":{"border":{"radius":"8px","width":"1px"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}},"borderColor":"variant-border-secondary","textColor":"variant-font-secondary","className":"br__xs","paddingTop":7,"paddingBottom":7,"paddingLeft":7,"paddingRight":7} -->
	<div class="wp-block-ainoblocks-accordion-faq-block icon__right br__xs has-border-color has-variant-border-secondary-border-color has-variant-font-secondary-color has-text-color br-all__none pt__7 pb__7 pl__7 pr__7" style="border-width:1px;border-radius:8px;margin-bottom:var(--wp--preset--spacing--6)" x-data="{ open: false }" @click="open = !open" :class="{\'open\': open, \'close\': ! open }"><div class="accordion"><h3 class="has-xxs-font-size">What is the best digital marketing strategy that you have used?</h3></div><div class="panel"><!-- wp:paragraph {"placeholder":"Write an answer ...","textColor":"variant-font-secondary","fontSize":"text-xs","paddingTop":7} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size pt__7">We have used a diversified digital marketing strategy to grow our business including SEO, Social Media Marketing, PPC, Content Marketing, Email Marketing and even Mobile Marketing.</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:ainoblocks/accordion-faq-block -->
	
	<!-- wp:ainoblocks/accordion-faq-block {"borderRadius":"none","question":"What\'s your favourite type of marketing?","style":{"border":{"radius":"8px","width":"1px"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}},"borderColor":"variant-border-secondary","textColor":"variant-font-secondary","className":"br__xs","paddingTop":7,"paddingBottom":7,"paddingLeft":7,"paddingRight":7} -->
	<div class="wp-block-ainoblocks-accordion-faq-block icon__right br__xs has-border-color has-variant-border-secondary-border-color has-variant-font-secondary-color has-text-color br-all__none pt__7 pb__7 pl__7 pr__7" style="border-width:1px;border-radius:8px;margin-bottom:var(--wp--preset--spacing--6)" x-data="{ open: false }" @click="open = !open" :class="{\'open\': open, \'close\': ! open }"><div class="accordion"><h3 class="has-xxs-font-size">What\'s your favourite type of marketing?</h3></div><div class="panel"><!-- wp:paragraph {"placeholder":"Write an answer ...","textColor":"variant-font-secondary","fontSize":"text-xs","paddingTop":7} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size pt__7">Marketing is the communication of your brand vision, mission and value through a variety of channels.</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:ainoblocks/accordion-faq-block -->
	
	<!-- wp:ainoblocks/accordion-faq-block {"borderRadius":"none","question":"What are some things you do to help run your business?","style":{"border":{"radius":"8px","width":"1px"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}},"borderColor":"variant-border-secondary","textColor":"variant-font-secondary","className":"br__xs is-style-faq","paddingTop":7,"paddingBottom":7,"paddingLeft":7,"paddingRight":7} -->
	<div class="wp-block-ainoblocks-accordion-faq-block icon__right br__xs is-style-faq has-border-color has-variant-border-secondary-border-color has-variant-font-secondary-color has-text-color br-all__none pt__7 pb__7 pl__7 pr__7" style="border-width:1px;border-radius:8px;margin-bottom:var(--wp--preset--spacing--6)" x-data="{ open: false }" @click="open = !open" :class="{\'open\': open, \'close\': ! open }"><div class="accordion"><h3 class="has-xxs-font-size">What are some things you do to help run your business?</h3></div><div class="panel"><!-- wp:paragraph {"placeholder":"Write an answer ...","textColor":"variant-font-secondary","fontSize":"text-xs","paddingTop":7} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size pt__7">We offer a wide variety of marketing, communication and technical services to improve your business. Our solutions are fully adaptable and have proved successful time and time again.</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:ainoblocks/accordion-faq-block --></div>
	<!-- /wp:group --></div>
	<!-- /wp:ainoblocks/grid-item -->
	
	<!-- wp:ainoblocks/grid-item {"gridColumnStartDesktop":9,"gridColumnEndDesktop":12,"gridColumnStartTablet":7,"gridColumnEndTablet":13,"gridColumnStartMobile":1,"gridColumnEndMobile":13,"alignItem":"stretch","justifyItem":"stretch","marginTopTablet":0,"marginTopMobile":6,"className":"align-self__start","borderRadius":"none","paddingBottom":13} -->
	<div class="wp-block-ainoblocks-grid-item col_start_d__9 col_end_d__12 col_start_t__7 col_end_t__13 col_start_m__1 col_end_m__13 align-self__stretch justify-self__stretch no-stacking mt_t__0 mt_m__6 align-self__start br-all__none pb__13"><!-- wp:heading {"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-m","paddingBottom":5} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-m-font-size pb__5">Sidebar section</h2>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary","fontSize":"text-xs"} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size">Omnis itaque iste. Quo aut beatae. Delectus voluptas maxime nam quia amet qui debitis ea qui. Incidunt iusto quam possimus pariatur corporis perspiciatis facilis voluptatem.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:heading {"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-m","paddingTop":10,"paddingBottom":5} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-m-font-size pt__10 pb__5">Sidebar section</h2>
	<!-- /wp:heading -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
	<div class="wp-block-group"><!-- wp:ainoblocks/badge {"content":"Outdoors","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Outdoors</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Industrial","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Industrial</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Cities","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Cities</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Lifestyle","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Lifestyle</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Camping","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Camping</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Computers","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Computers</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Grocery","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Grocery</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Cities","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Cities</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Shoes","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Shoes</span></div>
	<!-- /wp:ainoblocks/badge -->
	
	<!-- wp:ainoblocks/badge {"content":"Tools","size":"size__xs","backgroundColor":"variant-border-secondary","style":{"border":{"radius":"100px"}},"textColor":"button-color-primary"} -->
	<div class="wp-block-ainoblocks-badge size__xs has-button-color-primary-color has-variant-border-secondary-background-color has-text-color has-background" style="border-radius:100px"><span>Tools</span></div>
	<!-- /wp:ainoblocks/badge --></div>
	<!-- /wp:group -->
	
	<!-- wp:heading {"textColor":"variant-font-primary","className":"wp-block-heading","fontSize":"text-m","paddingTop":10,"paddingBottom":5} -->
	<h2 class="wp-block-heading has-variant-font-primary-color has-text-color has-text-m-font-size pt__10 pb__5">Sidebar section</h2>
	<!-- /wp:heading -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|2"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
	<div class="wp-block-group"><!-- wp:ainoblocks/icon {"iconType":"Lifebuoy","iconSize":"size-xs","textColor":"variant-accent-primary"} -->
	<div class="wp-block-ainoblocks-icon Lifebuoy size-xs has-variant-accent-primary-color has-text-color"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c4.556 0 8.25-3.694 8.25-8.25s-3.694-8.25-8.25-8.25zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75z"></path><path d="M12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3c1.657 0 3-1.343 3-3s-1.343-3-3-3zM7.5 12c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5z"></path><path d="M5.104 5.104c0.293-0.293 0.768-0.293 1.061 0l3.712 3.712c0.293 0.293 0.293 0.768 0 1.061s-0.768 0.293-1.061 0l-3.713-3.713c-0.293-0.293-0.293-0.768 0-1.061z"></path><path d="M18.896 5.104c0.293 0.293 0.293 0.768 0 1.061l-3.712 3.713c-0.293 0.293-0.768 0.293-1.061 0s-0.293-0.768 0-1.061l3.712-3.712c0.293-0.293 0.768-0.293 1.061 0z"></path><path d="M14.123 14.123c0.293-0.293 0.768-0.293 1.061 0l3.712 3.712c0.293 0.293 0.293 0.768 0 1.061s-0.768 0.293-1.061 0l-3.712-3.713c-0.293-0.293-0.293-0.768 0-1.061z"></path><path d="M9.877 14.123c0.293 0.293 0.293 0.768 0 1.061l-3.713 3.713c-0.293 0.293-0.768 0.293-1.061 0s-0.293-0.768 0-1.061l3.712-3.712c0.293-0.293 0.768-0.293 1.061 0z"></path></svg></div>
	<!-- /wp:ainoblocks/icon -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary","fontSize":"text-xs"} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size">Description text</p>
	<!-- /wp:paragraph --></div>
	<!-- /wp:group -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|2","padding":{"top":"var:preset|spacing|4"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--4)"><!-- wp:ainoblocks/icon {"iconType":"Medal","iconSize":"size-xs","textColor":"variant-accent-primary"} -->
	<div class="wp-block-ainoblocks-icon Medal size-xs has-variant-accent-primary-color has-text-color"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75s3.022 6.75 6.75 6.75 6.75-3.022 6.75-6.75c0-3.728-3.022-6.75-6.75-6.75zM3.75 9c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25c0 4.556-3.694 8.25-8.25 8.25s-8.25-3.694-8.25-8.25z"></path><path d="M12 5.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75c2.071 0 3.75-1.679 3.75-3.75s-1.679-3.75-3.75-3.75zM6.75 9c0-2.899 2.351-5.25 5.25-5.25s5.25 2.351 5.25 5.25c0 2.899-2.351 5.25-5.25 5.25s-5.25-2.351-5.25-5.25z"></path><path d="M7.5 14.25c0.414 0 0.75 0.336 0.75 0.75v6.286l3.415-1.707c0.211-0.106 0.46-0.106 0.671 0l3.415 1.707v-6.286c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v7.5c0 0.26-0.135 0.501-0.356 0.638s-0.497 0.149-0.73 0.033l-4.165-2.082-4.165 2.082c-0.232 0.116-0.509 0.104-0.73-0.033s-0.356-0.378-0.356-0.638v-7.5c0-0.414 0.336-0.75 0.75-0.75z"></path></svg></div>
	<!-- /wp:ainoblocks/icon -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary","fontSize":"text-xs"} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size">Description text</p>
	<!-- /wp:paragraph --></div>
	<!-- /wp:group -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|2","padding":{"top":"var:preset|spacing|4"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--4)"><!-- wp:ainoblocks/icon {"iconType":"ImageSquare","iconSize":"size-xs","textColor":"variant-accent-primary"} -->
	<div class="wp-block-ainoblocks-icon ImageSquare size-xs has-variant-accent-primary-color has-text-color"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5c0-0.828 0.672-1.5 1.5-1.5h15c0.828 0 1.5 0.672 1.5 1.5v15c0 0.828-0.672 1.5-1.5 1.5h-15c-0.828 0-1.5-0.672-1.5-1.5v-15zM19.5 4.5h-15v15h15v-15z"></path><path d="M15.171 10.177c0.183-0.077 0.38-0.116 0.579-0.116s0.396 0.040 0.579 0.116c0.182 0.076 0.348 0.188 0.487 0.329l3.964 3.964c0.293 0.293 0.293 0.768 0 1.061s-0.768 0.293-1.061 0l-3.97-3.97-4.184 4.184c-0.139 0.141-0.305 0.252-0.487 0.329s-0.38 0.116-0.579 0.116-0.396-0.040-0.579-0.116c-0.182-0.076-0.348-0.188-0.487-0.329l-1.934-1.934-0.004 0.004-3.216 3.216c-0.293 0.293-0.768 0.293-1.061 0s-0.293-0.768 0-1.061l3.214-3.214c0.139-0.141 0.305-0.252 0.487-0.329 0.183-0.077 0.38-0.116 0.579-0.116s0.396 0.040 0.579 0.116c0.182 0.076 0.348 0.188 0.487 0.329l1.934 1.934 4.184-4.184c0.139-0.141 0.305-0.252 0.487-0.329z"></path><path d="M9.375 9.75c0.621 0 1.125-0.504 1.125-1.125s-0.504-1.125-1.125-1.125c-0.621 0-1.125 0.504-1.125 1.125s0.504 1.125 1.125 1.125z"></path></svg></div>
	<!-- /wp:ainoblocks/icon -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary","fontSize":"text-xs"} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size">Description text</p>
	<!-- /wp:paragraph --></div>
	<!-- /wp:group -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|2","padding":{"top":"var:preset|spacing|4"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--4)"><!-- wp:ainoblocks/icon {"iconType":"ShieldWarning","iconSize":"size-xs","textColor":"variant-accent-primary"} -->
	<div class="wp-block-ainoblocks-icon ShieldWarning size-xs has-variant-accent-primary-color has-text-color"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.439 4.189c0.281-0.281 0.663-0.439 1.061-0.439h15c0.398 0 0.779 0.158 1.061 0.439s0.439 0.663 0.439 1.061v5.503c0 8.389-7.123 11.166-8.52 11.63-0.311 0.111-0.65 0.111-0.961 0-1.397-0.464-8.52-3.241-8.52-11.63v-5.503c0-0.398 0.158-0.779 0.439-1.061zM19.5 5.25h-15v5.503c0 7.337 6.206 9.781 7.5 10.209 1.294-0.429 7.5-2.872 7.5-10.209v-5.503z"></path><path d="M12 8.25c0.414 0 0.75 0.336 0.75 0.75v3.75c0 0.414-0.336 0.75-0.75 0.75s-0.75-0.336-0.75-0.75v-3.75c0-0.414 0.336-0.75 0.75-0.75z"></path><path d="M12 17.25c0.621 0 1.125-0.504 1.125-1.125s-0.504-1.125-1.125-1.125c-0.621 0-1.125 0.504-1.125 1.125s0.504 1.125 1.125 1.125z"></path></svg></div>
	<!-- /wp:ainoblocks/icon -->
	
	<!-- wp:paragraph {"textColor":"variant-font-secondary","fontSize":"text-xs"} -->
	<p class="has-variant-font-secondary-color has-text-color has-text-xs-font-size">Description text</p>
	<!-- /wp:paragraph --></div>
	<!-- /wp:group --></div>
	<!-- /wp:ainoblocks/grid-item --></div>
	<!-- /wp:ainoblocks/grid-container --></div>
	<!-- /wp:group -->',
);