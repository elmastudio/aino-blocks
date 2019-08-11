/**
 * External dependencies
 */

import classnames from "classnames";

/**
 * Internal dependencies
 */
import icons from './../../utils/icons';
import edit from './edit';
import attributes from './attributes';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
* WordPress dependencies
*/
const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	RichText,
	MediaUpload,
} = wp.editor;
const {
	Button,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType("ainoblocks/author", {
	title: __("Author", "ainoblocks"),
	description: __("This is an author block.", "ainoblocks"),
	icon: icons.author,
	keywords: [
		__("author", "ainoblocks"),
		__("avatar", "ainoblocks"),
		__("aino blocks", "ainoblocks")
	],
	category: "ainoblocks",
	attributes,
	edit,
	save,
});
