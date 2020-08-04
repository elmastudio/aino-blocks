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
	title: __('Button', 'ainoblocks'),
	description: __('A single button within a multiple buttons block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	parent: ['ainoblocks/multiple-buttons'],
	icon,
	keywords: [
		__('button', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('cta', 'ainoblocks'),
		__('buttons', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	styles: [{
			name: 'primary',
			label: _x('Fill', 'ainoblocks'),
			isDefault: true
		},
		{
			name: 'outline',
			label: __('Outline', 'ainoblocks')
		},
		{
			name: 'naked',
			label: __('Naked', 'ainoblocks')
		},
	],
	example: {
		attributes: {
			className: 'is-style-primary',
			text: __( 'Call to Action' ),
		},
	},
	edit,
	save,
};

export {
	name,
	settings
};