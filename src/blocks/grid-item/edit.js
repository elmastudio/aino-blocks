/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';


/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { addFilter } = wp.hooks;
const {
	Component,
	Fragment,
} = wp.element;
const {
	compose,
	createHigherOrderComponent,
} = wp.compose;
const {
	InspectorControls,
	InnerBlocks,
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

		const classNames = classnames(className, {
		});

		const onSelect = ( tabName ) => {
			console.log( 'Selecting tab', tabName );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Grid Item Positioning', 'ainoblocks')}>

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
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndDesktop}
														onChange={(gridColumnEndDesktop) => setAttributes({ gridColumnEndDesktop })}
														min={1}
														max={13}
														allowReset={true}
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
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndTablet}
														onChange={(gridColumnEndTablet) => setAttributes({ gridColumnEndTablet })}
														min={1}
														max={13}
														allowReset={true}
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
													/>
													<RangeControl
														label={__('Grid Column End', 'ainoblocks')}
														value={gridColumnEndMobile}
														onChange={(gridColumnEndMobile) => setAttributes({ gridColumnEndMobile })}
														min={1}
														max={13}
														allowReset={true}
													/>
												</Fragment>
											];
									}
								}
							}
						</TabPanel>

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
						<RangeControl
							label={__('Stack Order', 'ainoblocks')}
							help={__('An item with greater stack order is always in front of an item with a lower stack order.', 'ainoblocks')}
							value={stackOrder}
							onChange={(stackOrder) => setAttributes({ stackOrder })}
							initialPosition={1}
							min={1}
							max={10}
						/>
					</PanelBody>
				</InspectorControls>

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

		return <BlockListBlock {...props} className={classNames} />;
	};
}, 'addCustomClassName');

addFilter('editor.BlockListBlock',
	'ainoblocks/modify-spacing-save-settings',
	addCustomClassName
);
