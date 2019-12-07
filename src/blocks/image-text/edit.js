/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;
const {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
} = wp.blockEditor;

/**
 * Allowed blocks and template constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In standout block, the only block we allow is 'core/list'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'ainoblocks/card'];
const TEMPLATE = [

	['ainoblocks/card', {}, [
		['core/image'],
		['core/heading', { placeholder: _x('Heading…', 'content placeholder'), content: _x('Add a Heading', 'content placeholder'), level: 4, className: 'h-image-text', }],
		['core/paragraph', { placeholder: 'Write text...' }],
	]
	]
];

/**
 * Block edit function
 */
class ImageTextEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		return (
			<Fragment>

				<div
					className={classnames(className)}
				>
					<InnerBlocks
						template={TEMPLATE}
						allowedBlocks={ALLOWED_BLOCKS}
						templateInsertUpdatesSelection={false}
					/>
				</div>
			</Fragment>
		);
	}
}
export default ImageTextEdit;
