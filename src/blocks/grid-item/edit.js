/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;
const { compose } = wp.compose;
const {
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;

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
			gridColumnStart,
			gridColumnEnd,
			stackOrder,
			gutter,
		} = attributes;

		const gridStyles = {
			gridColumnStart: gridColumnStart,
			gridColumnEnd: gridColumnEnd,
			zIndex: stackOrder,
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__("Grid Item Settings", "ainoblocks")}>
						<RangeControl
						label={__('Grid Column Start', 'ainoblocks')}
						value={gridColumnStart}
						onChange={(gridColumnStart) => setAttributes({ gridColumnStart })}
						min={1}
						max={13}
						allowReset={true}
						/>
						<RangeControl
							label={__('Grid Column End', 'ainoblocks')}
							value={gridColumnEnd}
							onChange={(gridColumnEnd) => setAttributes({ gridColumnEnd })}
							min={1}
							max={13}
							allowReset={true}
						/>
						<RangeControl
							label={__('Stack Order', 'ainoblocks')}
							help={__('An item with greater stack order is always in front of an item with a lower stack order.', 'ainoblocks')}
							value={stackOrder}
							onChange={(stackOrder) => setAttributes({ stackOrder })}
							min={1}
							max={100}
						/>
						<ToggleControl
							label={__('Add end gutters', 'ainoblocks')}
							checked={!!gutter}
							onChange={() => setAttributes({ gutter: !gutter })}
							help={!!gutter ? __('Toogle off to remove the spacing left and right of the grid item.', 'ainoblocks') : __('Toggle on for space left and right of the grid item.', 'ainoblocks')}
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={classnames(className, {
						'no-gutter': ! gutter,
					})}

					style={gridStyles}
				>
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