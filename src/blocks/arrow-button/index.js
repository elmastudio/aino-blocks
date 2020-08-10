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
	title: __('Arrow Button', 'ainoblocks'),
	description: __('A special button within an arrow icon and a unique hover style.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('button', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('cta', 'ainoblocks'),
		__('icon', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	example: {
		attributes: {
			className: 'is-style-primary',
			label: __( 'Tell me more', 'ainoblocks' ),
			size: 'size__xxl',
			iconPositionAfter: true,
		},
	},
	edit,
	save,
};

export {
	name,
	settings
};