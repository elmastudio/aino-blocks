/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	TabPanel,
} = wp.components;
const {
	withDispatch,
	withSelect,
} = wp.data;
/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			className,
			hasChildBlocks,
			onSelect,
		} = this.props;

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

	const gridColumnStartDesktopTooltipContent = gridColumnStartDesktop => `line ${gridColumnStartDesktop}`
	const gridColumnEndDesktopTooltipContent = gridColumnEndDesktop => `line ${gridColumnEndDesktop}`
	const gridColumnStartTabletTooltipContent = gridColumnStartTablet => `line ${gridColumnStartTablet}`
	const gridColumnEndTabletTooltipContent = gridColumnEndTablet => `line ${gridColumnEndTablet}`
	const gridColumnStartMobileTooltipContent = gridColumnStartMobile => `line ${gridColumnStartMobile}`
	const gridColumnEndMobileTooltipContent = gridColumnEndMobile => `line ${gridColumnEndMobile}`

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Positioning', 'ainoblocks')}>
					<p><em>{ __( 'Use Preview for Desktop, Tablet and Mobile view.', 'ainoblocks' ) }</em></p>
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
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomDesktop}
														onChange={(marginBottomDesktop) => setAttributes({ marginBottomDesktop })}
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
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomTablet}
														onChange={(marginBottomTablet) => setAttributes({ marginBottomTablet })}
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
														label={__('Margin Bottom', 'ainoblocks')}
														value={marginBottomMobile}
														onChange={(marginBottomMobile) => setAttributes({ marginBottomMobile })}
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
					<PanelColorSettings
						title={__('Color Settings', 'ainoblocks')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: backgroundColor => {
									setAttributes({ backgroundColor });
								},
								label: __('Background Color', 'ainoblocks'),
							},
						]}
					>
					</PanelColorSettings>
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
						title={__('Aligment', 'ainoblocks')}
						initialOpen={false}
					>
						<SelectControl
							label={__('Align item', 'ainoblocks')}
							help={__('Aligns an item inside its grid area along the vertical column axis.', 'ainoblocks')}
							value={alignItem}
							options={alignItemOptions}
							onChange={alignItem => setAttributes({ alignItem })}
						/>
						<SelectControl
							label={__('Justify item', 'ainoblocks')}
							help={__('Aligns an item inside its grid area on the horizontal row axis.', 'ainoblocks')}
							value={justifyItem}
							options={justifyItemOptions}
							onChange={justifyItem => setAttributes({ justifyItem })}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
