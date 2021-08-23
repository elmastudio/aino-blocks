/**
 * WordPress dependencies
 */
const {__, _x} = wp.i18n;
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
	description: __('A grid item in a grid container block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	parent: ['ainoblocks/grid-container'],
	icon,
	keywords: [
		__('grid', 'ainoblocks'),
		__('layout', 'ainoblocks'),
		__('column', 'ainoblocks'),
		__('rows', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	supports: {
		anchor: true,
		html: true,
	},
	edit,
	save,
};