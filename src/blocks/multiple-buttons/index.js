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
	supports: {
		align: ['left', 'right', 'center'],
	},
	example: {
		innerBlocks: [
		{
			name: 'ainoblocks/button',
			attributes: {
				className: 'is-style-primary',
				label: __( 'Sign up', 'ainoblocks' ),
				borderRadius: 'radius-circular',
				size: 'size__l',
			},
		},
		{
			name: 'ainoblocks/button',
			attributes: {
				className: 'is-style-outline',
				label: __( 'Learn more', 'ainoblocks' ),
				borderRadius: 'radius-circular',
				size: 'size__l',
			},
		},
		],
	},
	edit,
	save,
};