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
	title: __('Buttons', 'ainoblocks'),
	description: __('A row of buttons.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('button', 'ainoblocks'),
		__('buttons', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('cta', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	supports: {
		align: ['left', 'right', 'center'],
	},
	edit,
	save,
};

export {
	name,
	settings
};