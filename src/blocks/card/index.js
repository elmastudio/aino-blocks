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
	Button,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType('ainoblocks/card', {
	title: __('Card', 'ainoblocks'),
	description: __('This is a card block.', 'ainoblocks'),
	icon: icons.card,
	keywords: [
		__('card', 'ainoblocks'),
		__('background', 'ainoblocks'),
		__('aino blocks', 'ainoblocks')
	],
	category: 'ainoblocks',
	attributes,
	getEditWrapperProps({ containerWidth }) {
		if ('wide' === containerWidth || 'full' === containerWidth) {
			return { 'data-align': containerWidth };
		}
	},
	edit,
	save,
});
