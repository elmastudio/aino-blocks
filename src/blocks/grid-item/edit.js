/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const {Component,Fragment,} = wp.element;
const {
	compose,
	createHigherOrderComponent,
} = wp.compose;
const {
	InnerBlocks,
} = wp.blockEditor;

/**
 * Block edit function
 */
class GridItemEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			setAttributes,
			className,
			hasChildBlocks,
			isSelected,
		} = this.props;

		const alignItemOptions = [{
				value: 'start',
				label: __('start', 'ainoblocks')
			},
			{
				value: 'end',
				label: __('end', 'ainoblocks')
			},
			{
				value: 'center',
				label: __('center', 'ainoblocks')
			},
			{
				value: 'stretch',
				label: __('stretch', 'ainoblocks')
			}
		];

		const justifyItemOptions = [{
				value: 'start',
				label: __('start', 'ainoblocks')
			},
			{
				value: 'end',
				label: __('end', 'ainoblocks')
			},
			{
				value: 'center',
				label: __('center', 'ainoblocks')
			},
			{
				value: 'stretch',
				label: __('stretch', 'ainoblocks')
			}
		];

		const classNames = classnames(className, {
		});

		return (
			<Fragment>
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				<div className={classNames} >
					<InnerBlocks
						templateLock={ false }
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</Fragment>
		);
	}
}

export default compose(
)(GridItemEdit);

/**
 * Override the default block element to add wrapper props.
 *
 * @param {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const addCustomClassName = createHigherOrderComponent((BlockListBlock) => {

	return (props) => {

		const {
			attributes,
			className,
		} = props;

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
			'no-gutter': ! gutter,
			'no-stacking': ! stacking,
			'has-stacking': stacking === true && stackOrder ? stackOrder : undefined,
			[`stack-order__${stackOrder}`]: stacking === true && stackOrder ? stackOrder : undefined,
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

		return <BlockListBlock {...props} className={classNames} style={styles} />;
	};

}, 'addCustomClassName');

addFilter('editor.BlockListBlock',
	'ainoblocks/grid-item',
	addCustomClassName
);
