/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

/**
 * Allowed blocks and template constant is passed to InnerBlocks precisely as specified here.
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
export default function TestimonialEdit( { attributes, setAttributes, className } ) {

	const testimonialClasses = classnames(className, {});

	const blockProps = useBlockProps( {
		className: testimonialClasses,
	} );

	return (
		<Fragment>
			<div { ...blockProps }>
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
