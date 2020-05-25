/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.blockEditor;

export default function save({ attributes, className }) {

	const {
		gridColumnStart,
		gridColumnEnd,
		stackOrder,
		gutter,
	} = attributes;

	const classNames = classnames(className, {
		[`grid-column_start__${gridColumnStart}`]: gridColumnStart,
		[`grid-column_end__${gridColumnEnd}`]: gridColumnEnd,
		[`stack-order__${stackOrder}`]: stackOrder,
		'no-gutter': ! gutter,
	});

	return (
		<div className={classNames} >
			< InnerBlocks.Content />
		</div >
	);
}
