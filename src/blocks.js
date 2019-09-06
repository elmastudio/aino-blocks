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
import * as card from './blocks/card';
import * as author from './blocks/author';
import * as testimonial from './blocks/testimonial';
import * as featuredContent from './blocks/featured-content';
import * as advancedButton from './blocks/advanced-button';
import * as advancedButtons from './blocks/advanced-buttons';

export function registerBlocks() {
	[
		card,
		author,
		testimonial,
		featuredContent,
		advancedButton,
		advancedButtons,
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
