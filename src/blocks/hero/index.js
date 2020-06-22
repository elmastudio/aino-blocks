/**
 * WordPress dependencies
 */
const {
	__,
	_x
} = wp.i18n;
const {
	registerBlockCollection
} = wp.blocks;

/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Register block
 */
const {
	attributes,
	name
} = metadata;

const settings = {
	title: __('Hero', 'ainoblocks'),
	description: __('Include a fullscreen featured header area at the top of your front page.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('header', 'ainoblocks'),
		__('hero', 'ainoblocks'),
		__('featured', 'ainoblocks'),
		__('front page', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	supports: {
		align: ['full'],
	},
	attributes,
	edit,
	save,
};

export {
	name,
	settings
};