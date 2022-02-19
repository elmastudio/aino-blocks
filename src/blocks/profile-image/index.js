/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './styles/editor.scss';
import './styles/style.scss';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	edit,
	save,
};