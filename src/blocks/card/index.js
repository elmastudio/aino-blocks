/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;
const { registerBlockCollection } = wp.blocks;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from './block.json';
import icon from './icon';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

const { name } = metadata;

export { metadata, name };

export const settings = {
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
	example: {
		attributes: {
			borderRadius: '20',
			shadowName: 'shadow-a',
			paddingTop: '9',
			paddingBottom: '9',
			paddingLeft: '9',
			paddingRight: '9',
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					content: __( 'You can include any kind of block inside a card. It is a great block to be used on coloured backgrounds.', 'ainoblocks' ),
				},
			},
		],
	},
	edit,
	save,
	deprecated,
};