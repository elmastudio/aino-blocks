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

/**
 * Register block
 */
const {
	attributes,
	name
} = metadata;

const settings = {
	title: __('Grid Item', 'ainoblocks'),
	description: __('A grid item in a grid container block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'layout' : 'ainoblocks',
	parent: ['ainoblocks/grid-container'],
	icon,
	keywords: [
		__('grid', 'ainoblocks'),
		__('layout', 'ainoblocks'),
		__('column', 'ainoblocks'),
		__('rows', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	attributes,
	edit,
	save,
};

export {
	name,
	settings
};