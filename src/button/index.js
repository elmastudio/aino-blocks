/**
 * Registers a new block provided a unique name and an object defining its behavior.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 */
import './style.scss';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import icon from './icon';
import Edit from './edit';
import save from './save';
import metadata from './block.json';


/**
 * Every block starts by registering a new block type definition.
 *
 */
registerBlockType( metadata.name, {
	icon,
	example: {
		name: 'ainoblocks/button',
		attributes: {
			className: 'is-style-primary',
			label: __( 'Call to Action', 'ainoblocks' ),
			borderRadius: 200,
			size: 'size__m',
		},
	},
	edit: Edit,
	save,
	deprecated,
} );