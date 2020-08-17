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
	title: __('Grid', 'ainoblocks'),
	description: __('A grid container with a 12-column. Add a flexible number of grid items.', 'ainoblocks'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	keywords: [
		__('grid', 'ainoblocks'),
		__('container', 'ainoblocks'),
		__('items', 'ainoblocks'),
		__('layout', 'ainoblocks'),
		__('aino', 'ainoblocks'),
	],
	attributes,
	supports: {
		align: ['wide'],
		anchor: true,
		html: true,
	},
	example: {
		innerBlocks: [
			{
				name: 'ainoblocks/grid-item',
				attributes: {
					align: 'full',
					gridColumnStartDesktop: 1,
					gridColumnEndDesktop: 7,
					stackOrder: 2,
					stacking: false,
				},
				innerBlocks: [
					{
						name: 'core/image',
						attributes: {
							sizeSlug: 'large',
							url: 'https://www.elmastudio.de/wp-content/uploads/2020/08/example01.jpg',
						},
					},
				],
			},
			{
				name: 'ainoblocks/grid-item',
				attributes: {
					align: 'full',
					gridColumnStartDesktop: 5,
					gridColumnEndDesktop: 13,
					marginTopDesktop: 5,
					stackOrder: 1,
					stacking: true,
				},
				innerBlocks: [
					{
						name: 'core/image',
						attributes: {
							sizeSlug: 'large',
							url: 'https://www.elmastudio.de/wp-content/uploads/2020/08/example02.jpg',
						},
					},
				],
			},
		],
	},
	edit,
	save,
};

export {
	name,
	settings
};