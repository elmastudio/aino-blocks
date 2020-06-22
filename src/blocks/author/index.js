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
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Register block
 */
const { attributes, name } = metadata;

const settings = {
	title: __('Author', 'ainoblocks'),
	description: __('This is an author block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('author', 'ainoblocks'),
		__('avatar', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	edit,
	save,
};

export { name, settings };
