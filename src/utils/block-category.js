/**
 * WordPress dependencies
 */
const { getCategories, setCategories } = wp.blocks;

/**
 * Internal dependencies
 */
import icons from './icons';

setCategories([
	// Add a CoBlocks block category
	{
		slug: 'ainoblocks',
		title: 'Aino Blocks',
		icon: icons.categoryIcon,
	},
	...getCategories().filter(({ slug }) => slug !== 'ainoblocks'),
]);
