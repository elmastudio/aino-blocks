/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;
const { registerBlockCollection } = wp.blocks;

/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import "./styles/style.scss";
import './styles/editor.scss';

/**
 * Register block
 */
const { attributes, name } = metadata;

const settings = {
	title: __('Testimonial', 'ainoblocks'),
	description: __('Insert a testimonial or review with the option to add author information. Works great in combination with the Columns block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('testimonial', 'ainoblocks'),
		__('quote', 'ainoblocks'),
		__('feedback', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	edit,
	save,
};

export { name, settings };
