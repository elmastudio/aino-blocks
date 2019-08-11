/**
 * Internal dependencies
 */
import icons from './../../utils/icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("ainoblocks/advanced-button", {
	title: __('Advanced Button', 'ainoblocks'),
	description: __('Easy to customize advanced button link.', 'ainoblocks'),
	icon: icons.advancedButton,
	keywords: [
		__('button', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('cta', 'ainoblocks'),
		__('buttons', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	category: 'ainoblocks',
	supports: {
		align: true,
		alignWide: false,
	},
	styles: [
		{ name: 'primary', label: _x('Primary', 'block style'), isDefault: true },
		{ name: 'outline', label: __('Outline') },
		{ name: 'naked', label: _x('Naked', 'block style') },
	],
	attributes,
});
