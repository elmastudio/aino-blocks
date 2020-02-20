import "./i18n.js";

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

// Category slug and title
const category = {
	slug: 'ainoblocks',
	title: 'Aino Blocks',
};

// Register block category
import './utils/block-category';

// Register Blocks
import * as hero from './blocks/hero';
import * as card from './blocks/card';
import * as badge from './blocks/badge';
import * as author from './blocks/author';
import * as testimonial from './blocks/testimonial';
import * as featuredContent from './blocks/featured-content';
import * as button from './blocks/button';
import * as multipleButtons from './blocks/multiple-buttons';
import * as imageText from './blocks/image-text';

export function registerBlocks() {
	[
		card,
		badge,
		author,
		testimonial,
		featuredContent,
		button,
		multipleButtons,
		hero,
		imageText,
	].forEach(block => {
		if (!block) {
			return;
		}

		const { name, icon, settings } = block;

		registerBlockType(`ainoblocks/${name}`, {
			category: category.slug,
			icon: { src: icon },
			...settings,
		});
	});
}
registerBlocks();
