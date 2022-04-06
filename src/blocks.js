import "./i18n.js";

/**
 * WordPress dependencies
 */
registerBlockType
const { registerBlockType } = wp.blocks;

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
import * as profileImage from './blocks/profile-image';
import * as icon from './blocks/icon';
import * as testimonial from './blocks/testimonial';
import * as button from './blocks/button';
import * as multipleButtons from './blocks/multiple-buttons';
import * as arrowButton from './blocks/arrow-button';
import * as sticker from './blocks/sticker';
import * as divider from './blocks/divider';
import * as flexbox from './blocks/flexbox';
import * as flexItem from './blocks/flex-item';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const {metadata, settings, name } = block;

	registerBlockType( name, {
		...metadata,
		...settings,
	} );
};

/**
 * Function to register blocks.
 */
export const registerAinoblocksBlocks = () => {
	[	
		author,
		profileImage,
		icon,
		badge,
		button,
		card,
		divider,
		gridContainer,
		gridItem,
		hero,
		multipleButtons,
		arrowButton,
		sticker,
		testimonial,
		flexbox,
		flexItem,
	].forEach( registerBlock );
};

registerAinoblocksBlocks();
