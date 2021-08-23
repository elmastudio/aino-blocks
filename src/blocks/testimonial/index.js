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

const { name } = metadata;

export { metadata, name };

export const settings = {
	description: __('Insert a testimonial or review with the option to add author information.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('testimonial', 'ainoblocks'),
		__('quote', 'ainoblocks'),
		__('feedback', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	example: {
		innerBlocks: [
			{
			name: 'ainoblocks/card',
				attributes: {
					borderRadius: '0',
					shadowName: 'shadow-b',
					paddingTop: '3',
					paddingBottom: '3',
					paddingLeft: '9',
					paddingRight: '9',
					backgroundColor: '#eeeeee',
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							content: __( 'We love to create designs for WordPress. The new editor offers exciting new opportunities to take WordPress to the next level.', 'ainoblocks' ),
							fontSize: 'xl',
						},
					},
					{
						name: 'ainoblocks/author',
						attributes: {
							imgURL: 'https://wpaino.s3.eu-central-1.amazonaws.com/ellen.jpg',
							imgID: '4637',
							name: 'Ellen Bauer',
							info: 'Frontend Developer',
							imgSize: 'avatar-m',
							layout: 'floated-left',
							imgRadius: '100',
							nameTextColor: '#111',
							infoTextColor: '#111',
						},
					},
				],
			},
		],
	},
	edit,
	save,
};