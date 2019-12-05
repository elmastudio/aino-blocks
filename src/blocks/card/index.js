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
	title: __('Card', 'ainoblocks'),
	description: __('Insert a card to highlight important content such as quotes or special notices. The card has a box style format that can be customised in different ways. You can add images, text, and any other kind of block inside the card.', 'ainoblocks'),
	icon,
	keywords: [
		__('card', 'ainoblocks'),
		__('container', 'ainoblocks'),
		__('wrapper', 'ainoblocks'),
		__('box', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	supports: {
		align: ['wide', 'full'],
	},
	attributes,
	edit,
	save,
};

export { name, settings };
