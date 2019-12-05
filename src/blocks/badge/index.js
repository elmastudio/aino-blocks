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
	title: __('Badge', 'ainoblocks'),
	description: __('This is a badge block.', 'ainoblocks'),
	icon,
	keywords: [
		__('badge', 'ainoblocks'),
		__('notice', 'ainoblocks'),
		__('highlight', 'ainoblocks'),
		__('info', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	edit,
	save,
};

export { name, settings };
