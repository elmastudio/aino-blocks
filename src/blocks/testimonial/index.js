/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import icons from './../../utils/icons';
import attributes from "./attributes";
import edit from './edit';
import save from './save';
import "./styles/style.scss";
import './styles/editor.scss';

/**
* WordPress dependencies
*/
const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	Button,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType("ainoblocks/testimonial", {
	title: __("Testimonial", "ainoblocks"),
	description: __("This is a testimonial block.", "ainoblocks"),
	icon: icons.testimonial,
	keywords: [
		__("testimonial", "ainoblocks"),
		__("quote", "ainoblocks"),
		__("feedback", "ainoblocks"),
		__("aino blocks", "ainoblocks")
	],
	category: "ainoblocks",
	attributes,
	getEditWrapperProps({ containerWidth }) {
		if ('wide' === containerWidth || 'full' === containerWidth) {
			return { 'data-align': containerWidth };
		}
	},
	edit,
	save,
});
