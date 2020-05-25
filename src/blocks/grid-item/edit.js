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
	createHigherOrderComponent
} = wp.compose;
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

		const classNames = classnames(className, {
		});

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
							initialPosition={1}
							min={1}
							max={10}
						/>
						<ToggleControl
							label={__('Add end gutters', 'ainoblocks')}
							checked={!!gutter}
							onChange={() => setAttributes({ gutter: !gutter })}
							help={!!gutter ? __('Toogle off to remove the spacing left and right of the grid item.', 'ainoblocks') : __('Toggle on for space left and right of the grid item.', 'ainoblocks')}
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

		return <BlockListBlock {...props} className={classNames} />;
	};
}, 'addCustomClassName');

addFilter('editor.BlockListBlock',
	'ainoblocks/modify-spacing-save-settings',
	addCustomClassName
);

