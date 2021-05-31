/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	useBlockProps,
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
		marginTopDesktop,
		marginBottomDesktop,
		marginTopTablet,
		marginBottomTablet,
		marginTopMobile,
		marginBottomMobile,
		backgroundColor,
	} = attributes;

	const classNames = classnames(className, {
		[`col_start_d__${gridColumnStartDesktop}`]: gridColumnStartDesktop,
		[`col_end_d__${gridColumnEndDesktop}`]: gridColumnEndDesktop,
		[`col_start_t__${gridColumnStartTablet}`]: gridColumnStartTablet,
		[`col_end_t__${gridColumnEndTablet}`]: gridColumnEndTablet,
		[`col_start_m__${gridColumnStartMobile}`]: gridColumnStartMobile,
		[`col_end_m__${gridColumnEndMobile}`]: gridColumnEndMobile,
		[`align-self__${alignItem}`]: alignItem,
		[`justify-self__${justifyItem}`]: justifyItem,
		'no-stacking': ! stacking,
		'has-stacking': stacking === true && stackOrder ? stackOrder : undefined,
		[`stack-order__${stackOrder}`]: stacking === true && stackOrder ? stackOrder : undefined,
		'no-gutter': ! gutter,
		'overlap-left': overlapLeft,
		'overlap-right': overlapRight,
		[`mt_d__${marginTopDesktop}`] : marginTopDesktop ? marginTopDesktop : undefined,
		[`mt_t__${marginTopTablet}`] : marginTopTablet ? marginTopTablet : undefined,
		[`mt_m__${marginTopMobile}`] : marginTopMobile ? marginTopMobile : undefined,
		[`mb_d__${marginBottomDesktop}`] : marginBottomDesktop ? marginBottomDesktop : undefined,
		[`mb_t__${marginBottomTablet}`] : marginBottomTablet ? marginBottomTablet : undefined,
		[`mb_m__${marginBottomMobile}`] : marginBottomMobile? marginBottomMobile : undefined,
		'mt_d__0': marginTopDesktop === 0,
		'mt_t__0': marginTopTablet === 0,
		'mt_m__0': marginTopMobile === 0,
		'mb_d__0': marginBottomDesktop === 0,
		'mb_t__0': marginBottomTablet === 0,
		'mb_m__0': marginBottomMobile === 0,
	});

	const styles = {
		backgroundColor: backgroundColor,
	};

	const blockProps = useBlockProps.save( {
		className: classNames,
		style: styles,
	} );

	return (
		<div { ...blockProps }>
			< InnerBlocks.Content />
		</div >
	);
}
