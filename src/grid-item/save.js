/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save({ attributes, className }) {

	const {
		gridColumnStartDesktop,
			gridColumnEndDesktop,
			gridColumnStartTablet,
			gridColumnEndTablet,
			gridColumnStartMobile,
			gridColumnEndMobile,
			alignItem,
			alignItemTablet,
			alignItemMobile,
			justifyItem,
			justifyItemTablet,
			justifyItemMobile,
			stacking,
			stackOrder,
			gutter,
			overlapLeft,
			overlapRight,
			marginTopDesktop,
			marginRightDesktop,
			marginBottomDesktop,
			marginLeftDesktop,
			marginTopTablet,
			marginRightTablet,
			marginBottomTablet,
			marginLeftTablet,
			marginTopMobile,
			marginRightMobile,
			marginBottomMobile,
			marginLeftMobile,
			shadowName,
	} = attributes;

	const classNames = classnames(className, shadowName, {
		[`col_start_d__${gridColumnStartDesktop}`]: gridColumnStartDesktop,
		[`col_end_d__${gridColumnEndDesktop}`]: gridColumnEndDesktop,
		[`col_start_t__${gridColumnStartTablet}`]: gridColumnStartTablet,
		[`col_end_t__${gridColumnEndTablet}`]: gridColumnEndTablet,
		[`col_start_m__${gridColumnStartMobile}`]: gridColumnStartMobile,
		[`col_end_m__${gridColumnEndMobile}`]: gridColumnEndMobile,
		'align-self__start': alignItem === 'start' && alignItem ? alignItem : undefined,
		'align-self__end': alignItem === 'end' && alignItem ? alignItem : undefined,
		'align-self__center': alignItem === 'center' && alignItem ? alignItem : undefined,
		'align-self__stretch': alignItem === 'stretch' && alignItem ? alignItem : undefined,
		'as__t__start': alignItemTablet === 'start' && alignItemTablet ? alignItemTablet : undefined,
		'as__t__end': alignItemTablet === 'end' && alignItemTablet ? alignItemTablet : undefined,
		'as__t__center': alignItemTablet === 'center' && alignItemTablet ? alignItemTablet : undefined,
		'as__t__stretch': alignItemTablet === 'stretch' && alignItemTablet ? alignItemTablet : undefined,
		'as__m__end': alignItemMobile === 'end' && alignItemMobile ? alignItemMobile : undefined,
		'as__m__center': alignItemMobile === 'center' && alignItemMobile ? alignItemMobile : undefined,
		'as__m__stretch': alignItemMobile === 'stretch' && alignItemMobile ? alignItemMobile : undefined,
		'justify-self__start': justifyItem === 'start' && justifyItem ? justifyItem : undefined,
		'justify-self__end': justifyItem === 'end' && justifyItem ? justifyItem : undefined,
		'justify-self__center': justifyItem === 'center' && justifyItem ? justifyItem : undefined,
		'justify-self__stretch': justifyItem === 'stretch' && justifyItem ? justifyItem : undefined,
		'js__t__start': justifyItemTablet === 'start' && justifyItemTablet ? justifyItemTablet : undefined,
		'js__t__end': justifyItemTablet === 'end' && justifyItemTablet ? justifyItemTablet : undefined,
		'js__t__center': justifyItemTablet === 'center' && justifyItemTablet ? justifyItemTablet : undefined,
		'js__t__stretch': justifyItemTablet === 'stretch' && justifyItemTablet ? justifyItemTablet : undefined,
		'js__m__end': justifyItemMobile === 'end' && justifyItemMobile ? justifyItemMobile : undefined,
		'js__m__center': justifyItemMobile === 'center' && justifyItemMobile ? justifyItemMobile : undefined,
		'js__m__stretch': justifyItemMobile === 'stretch' && justifyItemMobile ? justifyItemMobile : undefined,
		'no-stacking': ! stacking,
		'has-stacking': stacking === true && stackOrder ? stackOrder : undefined,
		[`stack-order__${stackOrder}`]: stacking === true && stackOrder ? stackOrder : undefined,
		'no-gutter': ! gutter,
		'overlap-left': overlapLeft,
		'overlap-right': overlapRight,
		[`mt_d__${marginTopDesktop}`] : marginTopDesktop ? marginTopDesktop : undefined,
		[`mr_d__${marginRightDesktop}`] : marginRightDesktop ? marginRightDesktop : undefined,
		[`mb_d__${marginBottomDesktop}`] : marginBottomDesktop ? marginBottomDesktop : undefined,
		[`ml_d__${marginLeftDesktop}`] : marginLeftDesktop ? marginLeftDesktop : undefined,
		[`mt_t__${marginTopTablet}`] : marginTopTablet ? marginTopTablet : undefined,
		[`mr_t__${marginRightTablet}`] : marginRightTablet ? marginRightTablet : undefined,
		[`mb_t__${marginBottomTablet}`] : marginBottomTablet ? marginBottomTablet : undefined,
		[`ml_t__${marginLeftTablet}`] : marginLeftTablet ? marginLeftTablet : undefined,
		[`mt_m__${marginTopMobile}`] : marginTopMobile ? marginTopMobile : undefined,
		[`mr_m__${marginRightMobile}`] : marginRightMobile ? marginRightMobile : undefined,
		[`mb_m__${marginBottomMobile}`] : marginBottomMobile? marginBottomMobile : undefined,
		[`ml_m__${marginLeftMobile}`] : marginLeftMobile ? marginLeftMobile : undefined,
		'mt_d__0': marginTopDesktop === 0,
		'mr_d__0': marginRightDesktop === 0,
		'ml_d__0': marginLeftDesktop === 0,
		'mb_d__0': marginBottomDesktop === 0,
		'mt_t__0': marginTopTablet === 0,
		'mr_t__0': marginRightTablet === 0,
		'ml_t__0': marginLeftTablet === 0,
		'mb_t__0': marginBottomTablet === 0,
		'mt_m__0': marginTopMobile === 0,
		'mr_m__0': marginRightMobile === 0,
		'ml_m__0': marginLeftMobile === 0,
		'mb_m__0': marginBottomMobile === 0,
	});

	const blockProps = useBlockProps.save( {
		className: classNames,
	} );

	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}