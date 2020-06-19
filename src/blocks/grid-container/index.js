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
	title: __('Grid Container', 'ainoblocks'),
	description: __('A grid container with a 12-column grid and a flexible number of grid items.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'layout' : 'ainoblocks',
	icon,
	keywords: [
		__('grid', 'ainoblocks'),
		__('container', 'ainoblocks'),
		__('items', 'ainoblocks'),
		__('layout', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	attributes,
	supports: {
		align: ['wide']
	},
	edit,
	save,
};

export {
	name,
	settings
};