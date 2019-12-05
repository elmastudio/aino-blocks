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
	title: __('Button', 'ainoblocks'),
	description: __('A single button within a multiple buttons block.', 'ainoblocks'),
	parent: ['ainoblocks/multiple-buttons'],
	icon,
	keywords: [
		__('button', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('cta', 'ainoblocks'),
		__('buttons', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	attributes,
	styles: [
		{ name: 'primary', label: _x('Fill', 'block style'), isDefault: true },
		{ name: 'outline', label: __('Outline') },
		{ name: 'ghost', label: _x('Ghost', 'block style') },
	],
	edit,
	save,
};

export { name, settings };
