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
	description: __('A single button within a Buttons block.', 'ainoblocks'),
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
	styles: [
		{
			name: 'primary',
			/* translators: block style */
			label: __( 'Fill', 'ainoblocks' ),
			isDefault: true,
		},
		{
			name: 'outline',
			/* translators: block style */
			label: __( 'Outline' ),
		},
		{ 
			name: 'naked',
			/* translators: block style */
			label: __( 'Naked' ),
		},
	],
	supports: {
		"anchor": true
	},
	attributes,
	edit,
	save,
};

export {
	name,
	settings
};