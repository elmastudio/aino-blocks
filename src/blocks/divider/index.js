/**
 * WordPress dependencies
 */
const {__,_x} = wp.i18n;
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
	description: __('A visual divider between sections.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('divider', 'ainoblocks'),
		__('separator', 'ainoblocks'),
		__('spacer', 'ainoblocks'),
		__('icon', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	styles: [
		{
			name: 'default',
			/* translators: block style */
			label: __( 'Default', 'ainoblocks' ),
			isDefault: true,
		},
		{
			name: 'outline',
			/* translators: block style */
			label: __( 'Outline' ),
		},
	],
	supports: {
		"anchor": true
	},
	edit,
	save,
};