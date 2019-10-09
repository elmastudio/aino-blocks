/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;

/**
 * Internal dependencies
 */
import icons from './../../utils/icons';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Register block
 */
const { attributes, name } = metadata;

const settings = {
	title: __('Advanced Buttons', 'ainoblocks'),
	description: __('A row of buttons with advanced customization options.', 'ainoblocks'),
	icon: icons.advancedButtons,
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

export { name, settings };
