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

const { name } = metadata;

export { metadata, name };

export const settings = {
	description: __('A grid container with a 12-column. Add a flexible number of grid items.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('grid', 'ainoblocks'),
		__('container', 'ainoblocks'),
		__('items', 'ainoblocks'),
		__('layout', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	supports: {
		align: ['wide', 'full'],
		anchor: true,
		html: true,
	},
	edit,
	save,
};