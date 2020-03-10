/**
 * WordPress dependencies
 */
const { getCategories, setCategories, registerBlockCollection } = wp.blocks;

/**
 * Internal dependencies
 */
import icons from './icons';

if (typeof registerBlockCollection === 'function') {
	registerBlockCollection('ainoblocks', {

		title: 'Aino Blocks',
		icon: icons.categoryIcon,
	});
} else {
	// This can be removed once G 7.3 is shipped in the Core version.
	setCategories([
		...getCategories().filter(({ slug }) => slug !== 'ainoblocks'),
		// Add a Aino Blocks block category
		{
			slug: 'ainoblocks',
			title: 'Aino Blocks',
			icon: icons.categoryIcon,
		},
	]);
}
