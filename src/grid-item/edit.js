/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	TabPanel,
} from '@wordpress/components';
import {
	createHigherOrderComponent,
} from '@wordpress/compose';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';

/**
 * Block edit function
 */
export default function GridItemEdit( { attributes, setAttributes, className, onSelect } ) {

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
		} = attributes;

		const alignItemOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks') }
		];

		const alignItemTabletOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks') }
		];

		const alignItemMobileOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks') }
		];

		const justifyItemOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks')}
		];

		const justifyItemTabletOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks')}
		];

		const justifyItemMobileOptions = [
			{ value: 'start', label: __('start', 'ainoblocks') },
			{ value: 'end', label: __('end', 'ainoblocks') },
			{ value: 'center', label: __('center', 'ainoblocks') },
			{ value: 'stretch', label: __('stretch', 'ainoblocks')}
		];

		const gridColumnStartDesktopTooltipContent = gridColumnStartDesktop => `line ${gridColumnStartDesktop}`
		const gridColumnEndDesktopTooltipContent = gridColumnEndDesktop => `line ${gridColumnEndDesktop}`
		const gridColumnStartTabletTooltipContent = gridColumnStartTablet => `line ${gridColumnStartTablet}`
		const gridColumnEndTabletTooltipContent = gridColumnEndTablet => `line ${gridColumnEndTablet}`
		const gridColumnStartMobileTooltipContent = gridColumnStartMobile => `line ${gridColumnStartMobile}`
		const gridColumnEndMobileTooltipContent = gridColumnEndMobile => `line ${gridColumnEndMobile}`

		const classNames = classnames(className, {
		});

		const blockProps = useBlockProps( {
			className: classNames,
		} );

		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			templateLock: false,
		} );

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Location', 'ainoblocks')}>
					<p><em>{ __( 'Determine the Grid Item block location within the 12 column grid by referring to specific grid lines. Use Preview for Desktop, Tablet, and Mobile views.', 'ainoblocks' ) }</em></p>
						<TabPanel className="aino-device-panel"
							activeClass="is-active"
							initialTabName="desktop"
							onSelect={ onSelect }
							tabs={ [
								{
									name: 'desktop',
									title: 'Desktop',
									className: 'device-d',
								},
								{
									name: 'tablet',
									title: 'Tablet',
									className: 'device-t',
								},
								{
									name: 'mobile',
									title: 'Mobile',
									className: 'device-m',
								},
							] }>
							{
								( tab ) => {
									switch ( tab.name ) {
										case 'desktop':
											return (
												<Fragment>
													<RangeControl
														label={__('Grid Column Start', 'ainoblocks')}
														value={gridColumnStartDesktop}
														onChange={(gridColumnStartDesktop) => setAttributes({ gridColumnStartDesktop })}
														min={1}
														max={13}
														allowReset={true}
														renderTooltipContent={ gridColumnStartDesktopTooltipContent }
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndDesktop}
														onChange={(gridColumnEndDesktop) => setAttributes({ gridColumnEndDesktop })}
														min={1}
														max={13}
														allowReset={true}
														renderTooltipContent={gridColumnEndDesktopTooltipContent }
													/>
												</Fragment>
											);
										case 'tablet':
											return [
												<Fragment>
													<RangeControl
													label={__('Grid Column Start', 'ainoblocks')}
													value={gridColumnStartTablet}
													onChange={(gridColumnStartTablet) => setAttributes({ gridColumnStartTablet })}
													min={1}
													max={13}
													allowReset={true}
													renderTooltipContent={ gridColumnStartTabletTooltipContent }
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndTablet}
														onChange={(gridColumnEndTablet) => setAttributes({ gridColumnEndTablet })}
														min={1}
														max={13}
														allowReset={true}
														renderTooltipContent={ gridColumnEndTabletTooltipContent }
													/>
												</Fragment>
											];
										
										case 'mobile':
											return [
												<Fragment>
													<RangeControl
													label={__('Grid Column Start', 'ainoblocks')}
													value={gridColumnStartMobile}
													onChange={(gridColumnStartMobile) => setAttributes({ gridColumnStartMobile })}
													min={1}
													max={13}
													allowReset={true}
													renderTooltipContent={ gridColumnStartMobileTooltipContent }
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndMobile}
														onChange={(gridColumnEndMobile) => setAttributes({ gridColumnEndMobile })}
														min={1}
														max={13}
														allowReset={true}
														renderTooltipContent={ gridColumnEndMobileTooltipContent }
													/>
												</Fragment>
											];
									}
								}
							}
						</TabPanel>
					</PanelBody>
					<PanelBody
						title={__('Aligment', 'ainoblocks')}
						initialOpen={false}
					>
					<TabPanel className="aino-device-panel"
						activeClass="is-active"
						initialTabName="desktop"
						onSelect={ onSelect }
						tabs={ [
							{
								name: 'desktop',
								title: 'Desktop',
								className: 'device-d',
							},
							{
								name: 'tablet',
								title: 'Tablet',
								className: 'device-t',
							},
							{
								name: 'mobile',
								title: 'Mobile',
								className: 'device-m',
							},
						] }>
						{
							( tab ) => {
								switch ( tab.name ) {
									case 'desktop':
										return (
											<Fragment>
												<SelectControl
													label={__('Align item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area along the vertical column axis.', 'ainoblocks')}
													value={alignItem}
													options={alignItemOptions}
													onChange={alignItem => setAttributes({ alignItem })}
												/>
												<SelectControl
													label={__('Justify item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area on the horizontal row axis.', 'ainoblocks')}
													value={justifyItem}
													options={justifyItemOptions}
													onChange={justifyItem => setAttributes({ justifyItem })}
												/>
											</Fragment>
										);
									case 'tablet':
										return [
											<Fragment>
												<SelectControl
													label={__('Align item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area along the vertical column axis.', 'ainoblocks')}
													value={alignItemTablet}
													options={alignItemTabletOptions}
													onChange={alignItemTablet => setAttributes({ alignItemTablet })}
												/>
												<SelectControl
													label={__('Justify item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area on the horizontal row axis.', 'ainoblocks')}
													value={justifyItemTablet}
													options={justifyItemTabletOptions}
													onChange={justifyItemTablet => setAttributes({ justifyItemTablet })}
												/>
											</Fragment>
										];
									
									case 'mobile':
										return [
											<Fragment>
												<SelectControl
													label={__('Align item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area along the vertical column axis.', 'ainoblocks')}
													value={alignItemMobile}
													options={alignItemMobileOptions}
													onChange={alignItemMobile => setAttributes({ alignItemMobile })}
												/>
												<SelectControl
													label={__('Justify item', 'ainoblocks')}
													help={__('Aligns the Grid Item block inside its Grid area on the horizontal row axis.', 'ainoblocks')}
													value={justifyItemMobile}
													options={justifyItemMobileOptions}
													onChange={justifyItemMobile => setAttributes({ justifyItemMobile })}
												/>
											</Fragment>
										];
								}
							}
						}
					</TabPanel>
					</PanelBody>
					<PanelBody
						title={__('Margins', 'ainoblocks')}
						initialOpen={false}
					>
						<TabPanel className="aino-device-panel"
							activeClass="is-active"
							initialTabName="desktop"
							onSelect={ onSelect }
							tabs={ [
								{
									name: 'desktop',
									title: 'Desktop',
									className: 'device-d',
								},
								{
									name: 'tablet',
									title: 'Tablet',
									className: 'device-t',
								},
								{
									name: 'mobile',
									title: 'Mobile',
									className: 'device-m',
								},
							] }>
							{
								( tab ) => {
									switch ( tab.name ) {
										case 'desktop':
											return (
												<Fragment>
													<RangeControl
														label={__('Margin Top', 'ainoblocks')}
														value={marginTopDesktop}
														onChange={(marginTopDesktop) => setAttributes({ marginTopDesktop })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Right', 'ainoblocks')}
														value={marginRightDesktop}
														onChange={(marginRightDesktop) => setAttributes({ marginRightDesktop })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomDesktop}
														onChange={(marginBottomDesktop) => setAttributes({ marginBottomDesktop })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Left', 'ainoblocks')}
														value={marginLeftDesktop}
														onChange={(marginLeftDesktop) => setAttributes({ marginLeftDesktop })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
												</Fragment>
											);
										case 'tablet':
											return [
												<Fragment>
													<RangeControl
														label={__('Margin Top', 'ainoblocks')}
														value={marginTopTablet}
														onChange={(marginTopTablet) => setAttributes({ marginTopTablet })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Right', 'ainoblocks')}
														value={marginRightTablet}
														onChange={(marginRightTablet) => setAttributes({ marginRightTablet })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomTablet}
														onChange={(marginBottomTablet) => setAttributes({ marginBottomTablet })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Left', 'ainoblocks')}
														value={marginLeftTablet}
														onChange={(marginLeftTablet) => setAttributes({ marginLeftTablet })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
												</Fragment>
											];
										
										case 'mobile':
											return [
												<Fragment>
													<RangeControl
														label={__('Margin Top', 'ainoblocks')}
														value={marginTopMobile}
														onChange={(marginTopMobile) => setAttributes({ marginTopMobile })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Right', 'ainoblocks')}
														value={marginRightMobile}
														onChange={(marginRightMobile) => setAttributes({ marginRightMobile })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomMobile}
														onChange={(marginBottomMobile) => setAttributes({ marginBottomMobile })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
													<RangeControl
														label={__('Margin Left', 'ainoblocks')}
														value={marginLeftMobile}
														onChange={(marginLeftMobile) => setAttributes({ marginLeftMobile })}
														min={-18}
														max={18}
														allowReset={true}
														resetFallbackValue={0}
													/>
												</Fragment>
											];
									}
								}
							}
						</TabPanel>
					</PanelBody>
					<PanelBody
						title={__('Stacking', 'ainoblocks')}
						initialOpen={false}
					>
						<ToggleControl
							label={__('Stacking', 'ainoblocks')}
							checked={!!stacking}
							onChange={() => setAttributes({ stacking: !stacking })}
							help={!!stacking ? __('Toogle off to show grid items below the previous grid item.', 'ainoblocks') : __('Toggle on to allow stacking of grid item.', 'ainoblocks')}
						/>
						{ stacking === true && (
						<RangeControl
							label={__('Stack Order', 'ainoblocks')}
							help={__('An item with greater stack order is always in front of an item with a lower stack order.', 'ainoblocks')}
							value={stackOrder}
							onChange={(stackOrder) => setAttributes({ stackOrder })}
							min={1}
							max={20}
						/>
						) }
					</PanelBody>
					<PanelBody
						title={__('Overlapping', 'ainoblocks')}
						initialOpen={false}
					>
					<ToggleControl
							label={__('Overlap to left', 'ainoblocks')}
							checked={!!overlapLeft}
							onChange={() => setAttributes({ overlapLeft: !overlapLeft })}
							help={!!overlapLeft ? __('Toogle off to position grid item within grid container.', 'ainoblocks') : __('Toggle on to overlap grid item to left screen edge.', 'ainoblocks')}
						/>
						<ToggleControl
							label={__('Overlap to right', 'ainoblocks')}
							checked={!!overlapRight}
							onChange={() => setAttributes({ overlapRight: !overlapRight })}
							help={!!overlapRight ? __('Toogle off to position grid item within grid container.', 'ainoblocks') : __('Toggle on to overlap grid item to right screen edge.', 'ainoblocks')}
						/>
					</PanelBody>
					<PanelBody
						title={__('Gutter', 'ainoblocks')}
						initialOpen={false}
					>
						<ToggleControl
							label={__('Add end gutters', 'ainoblocks')}
							checked={!!gutter}
							onChange={() => setAttributes({ gutter: !gutter })}
							help={!!gutter ? __('Toogle off to remove the spacing left and right of the grid item.', 'ainoblocks') : __('Toggle on for space left and right of the grid item.', 'ainoblocks')}
						/>
					</PanelBody>
				</InspectorControls>

				<div { ...innerBlocksProps } />
			</Fragment>
		);
}

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
		} = attributes;

		const classNames = classnames(className, {
			[`col_start_d__${gridColumnStartDesktop}`]: gridColumnStartDesktop,
			[`col_end_d__${gridColumnEndDesktop}`]: gridColumnEndDesktop,
			[`col_start_t__${gridColumnStartTablet}`]: gridColumnStartTablet,
			[`col_end_t__${gridColumnEndTablet}`]: gridColumnEndTablet,
			[`col_start_m__${gridColumnStartMobile}`]: gridColumnStartMobile,
			[`col_end_m__${gridColumnEndMobile}`]: gridColumnEndMobile,
			[`align-self__${alignItem}`]: alignItem,
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

		return <BlockListBlock {...props} className={classNames} />;
	};

}, 'addCustomClassName');

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'ainoblocks/grid-item',
    addCustomClassName
);