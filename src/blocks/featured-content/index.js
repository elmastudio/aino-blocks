/**
 * External dependencies
 */
import classnames from 'classnames';
import noop from 'lodash/noop';

/**
 * Internal dependencies
 */
import icons from './../../utils/icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
* WordPress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType('ainoblocks/featured-content', {
	title: __('Featured Content', 'ainoblocks'),
	description: __('Feature content with media, heading, text and buttons.', 'ainoblocks'),
	icon: icons.featuredContent,
	keywords: [
		__('image', 'ainoblocks'),
		__('video', 'ainoblocks'),
		__('featured', 'ainoblocks'),
		__('front page', 'ainoblocks'),
		__('aino blocks', 'ainoblocks'),
	],
	supports: {
		align: ['wide', 'full'],
		anchor: true,
	},
	category: 'ainoblocks',
	attributes,
	edit,
	save,
});
