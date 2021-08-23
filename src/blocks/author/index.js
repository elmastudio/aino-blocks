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

const { name } = metadata;

export { metadata, name };

export const settings = {
	description: __('This is an author block.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('author', 'ainoblocks'),
		__('avatar', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	example: {
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
	edit,
	save,
};