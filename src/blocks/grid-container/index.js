/**
 * WordPress dependencies
 */
const {
	registerBlockCollection
} = wp.blocks;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
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
	icon,
	deprecated,
	edit,
	save,
};