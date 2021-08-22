/**
 * WordPress dependencies
 */
const {__, _x} = wp.i18n;
const {registerBlockCollection} = wp.blocks;

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
	description: __('Flex item inside flex container.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	parent: ['ainoblocks/flexbox'],
	icon,
	keywords: [
		__('flexbox', 'ainoblocks'),
		__('container', 'ainoblocks'),
		__('flex', 'ainoblocks'),
		__('box', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	supports: {
		anchor: true,
		html: true,
	},
	edit,
	save,
};