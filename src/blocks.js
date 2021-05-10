import "./i18n.js";

/**
 * WordPress dependencies
 */
registerBlockType
const { registerBlockType } = wp.blocks;

// Category slug and title
const category = {
	slug: 'ainoblocks',
	title: 'Aino Blocks',
};

// Register block category
import './utils/block-category';

// Register extensions
import './extensions/border-radius';
import './extensions/spacing';

// Register blocks
import * as gridItem from './blocks/grid-item';
import * as gridContainer from './blocks/grid-container';
import * as hero from './blocks/hero';
import * as card from './blocks/card';
import * as badge from './blocks/badge';
import * as author from './blocks/author';
import * as testimonial from './blocks/testimonial';
import * as button from './blocks/button';
import * as multipleButtons from './blocks/multiple-buttons';
import * as arrowButton from './blocks/arrow-button';
import * as sticker from './blocks/sticker';
import * as divider from './blocks/divider';

export function registerAinoblocksBlocks() {
	[
		gridItem,
		gridContainer,
		card,
		badge,
		author,
		testimonial,
		button,
		multipleButtons,
		arrowButton,
		hero,
		sticker,
		divider,
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
registerAinoblocksBlocks();