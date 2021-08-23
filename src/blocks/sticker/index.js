/**
 * WordPress dependencies
 */
const {
	__,
	_x
} = wp.i18n;
const {
	registerBlockCollection
} = wp.blocks;

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
	description: __('A circle sticker with a text slogan to highlight featured elements.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('sticker', 'ainoblocks'),
		__('link', 'ainoblocks'),
		__('featured', 'ainoblocks'),
		__('sticker', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	supports: {
		"anchor": true
	},
	example: {
			name: 'ainoblocks/sticker',
			attributes: {
				label: __( 'New', 'ainoblocks' ),
				stickerSize: '4',
				fontSize: 'font__xxl',
				backgroundColor: '#f7a12c',
				textColor: '#121212',
				rotateStart: '-30',
				rotate: 'rotate__infinite',
			},
	},
	edit,
	save,
};