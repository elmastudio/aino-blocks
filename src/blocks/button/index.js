/**
 * WordPress dependencies
 */
const {__,_x} = wp.i18n;
const {registerBlockCollection} = wp.blocks;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

const { name } = metadata;

export { metadata, name };

export const settings = {
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
		{ 
			name: 'raised',
			/* translators: block style */
			label: __( 'Raised' ),
		},
	],
	example: {
			name: 'ainoblocks/button',
			attributes: {
				className: 'is-style-primary',
				label: __( 'Call to Action', 'ainoblocks' ),
				borderRadius: 'radius-circular',
				size: 'size__l',
			},
	},
	edit,
	save,
	deprecated,
};