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
	title: __('Featured Content', 'ainoblocks'),
	description: __('A popular block to feature your products or services.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
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
