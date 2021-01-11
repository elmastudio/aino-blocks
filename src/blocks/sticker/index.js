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

/**
 * Register block
 */
const {
	attributes,
	name
} = metadata;

const settings = {
	title: __('Sticker', 'ainoblocks'),
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
				backgroundColor: '#4D2CF0',
				textColor: '#ffffff',
				rotateStart: '-30',
				rotate: 'rotate__infinite',
			},
	},
	attributes,
	edit,
	save,
};

export {
	name,
	settings
};