/**
 * WordPress dependencies
 */
const {__, _x} = wp.i18n;
const {registerBlockCollection} = wp.blocks;

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
const { name } = metadata;

export { metadata, name };

export const settings = {
	category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',
	icon,
	edit,
	save,
};