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
		alignItem,
		justifyItem,
		stackOrder,
		gutter,
		overlapLeft,
		overlapRight,
	} = attributes;

	const classNames = classnames(className, {
		[`grid-column_start__${gridColumnStart}`]: gridColumnStart,
		[`grid-column_end__${gridColumnEnd}`]: gridColumnEnd,
		[`align-self__${alignItem}`]: alignItem,
		[`justify-self__${justifyItem}`]: justifyItem,
		[`stack-order__${stackOrder}`]: stackOrder,
		'no-gutter': ! gutter,
		'overlap-left': overlapLeft,
		'overlap-right': overlapRight,
	});

	return (
		<div className={classNames} >
			< InnerBlocks.Content />
		</div >
	);
}
