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
	title: __('Card', 'ainoblocks'),
	description: __('Insert a card to highlight important content such as quotes or special notices. The card has a box style format that can be customised.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
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
	example: {
		attributes: {
			borderRadius: '20',
			shadowName: 'shadow-a',
			paddingTop: '10',
			paddingBottom: '10',
			paddingLeft: '10',
			paddingRight: '10',
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					content: __( 'Include your content here...', 'ainoblocks' ),
				},
			},
			],
	},
	edit,
	save,
};

export { name, settings };
