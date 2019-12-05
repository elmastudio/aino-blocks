/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
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
const ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'ainoblocks/card', 'ainoblocks/author'];
const TEMPLATE = [

	['ainoblocks/card', {}, [
		['core/paragraph', { placeholder: 'Write testimonial text...' }],
		['ainoblocks/author'],
	]
	]
];

/**
 * Block edit function
 */
class TestimonialEdit extends Component {

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
						templateLock="insert"
						templateInsertUpdatesSelection={false}
					/>
				</div>
			</Fragment>
		);
	}
}
export default TestimonialEdit;
