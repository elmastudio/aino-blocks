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
		gridColumnStartDesktop,
		gridColumnEndDesktop,
		gridColumnStartTablet,
		gridColumnEndTablet,
		gridColumnStartMobile,
		gridColumnEndMobile,
		alignItem,
		justifyItem,
		stacking,
		stackOrder,
		gutter,
		overlapLeft,
		overlapRight,
	} = attributes;

	const classNames = classnames(className, {
		[`grid-column_start_d__${gridColumnStartDesktop}`]: gridColumnStartDesktop,
		[`grid-column_end_d__${gridColumnEndDesktop}`]: gridColumnEndDesktop,
		[`grid-column_start_t__${gridColumnStartTablet}`]: gridColumnStartTablet,
		[`grid-column_end_t__${gridColumnEndTablet}`]: gridColumnEndTablet,
		[`grid-column_start_m__${gridColumnStartMobile}`]: gridColumnStartMobile,
		[`grid-column_end_m__${gridColumnEndMobile}`]: gridColumnEndMobile,
		[`align-self__${alignItem}`]: alignItem,
		[`justify-self__${justifyItem}`]: justifyItem,
		[`stack-order__${stackOrder}`]: stackOrder,
		'no-gutter': ! gutter,
		'no-stacking': ! stacking,
		'overlap-left': overlapLeft,
		'overlap-right': overlapRight,
	});

	return (
		<div className={classNames} >
			< InnerBlocks.Content />
		</div >
	);
}
