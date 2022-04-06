/**
 * WordPress dependencies
 */
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
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	parent: ['ainoblocks/grid-container'],
	icon,
	edit,
	save,
};