/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;

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
const { attributes, name } = metadata;

const settings = {
	title: __('Image and Text', 'ainoblocks'),
	description: __('Insert a card with image and text. You can customize the border background color and shadow. It works great in multicolumn layouts. You can use this block to differentiate your values or services.', 'ainoblocks'),
	icon,
	keywords: [
		__('image', 'ainoblocks'),
		__('media', 'ainoblocks'),
		__('text', 'ainoblocks'),
		__('card', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	edit,
	save,
};

export { name, settings };
