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
	title: __('Featured Content', 'ainoblocks'),
	description: __('Present content with media, sub and main heading, text and buttons. It is a popular block to show your product, services, or portfolio.', 'ainoblocks'),
	icon,
	keywords: [
		__('featured', 'ainoblocks'),
		__('tour', 'ainoblocks'),
		__('services', 'ainoblocks'),
		__('image', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	supports: {
		align: ['wide', 'full'],
		anchor: true,
	},
	attributes,
	edit,
	save,
};

export { name, settings };
