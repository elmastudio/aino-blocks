/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, withInstanceId } = wp.compose;
const {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
class cardEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			setAttributes,
			className,
		} = this.props;

		const {
			align,
			backgroundColor,
			borderColor,
			borderRadius,
			shadowName,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			borderTopWidth,
			borderRightWidth,
			borderBottomWidth,
			borderLeftWidth,
			borderWidth,
		} = attributes;

		const shadowNameOptions = [
			{ value: "shadow-none", label: __('none', 'ainoblocks') },
			{ value: "shadow-a", label   : __('small', 'ainoblocks') },
			{ value: "shadow-b", label   : __('large', 'ainoblocks') }
		];

		const MIN_BORDER_RADIUS_VALUE = 0;
		const MAX_BORDER_RADIUS_VALUE = 50;
		const INITIAL_BORDER_RADIUS_POSITION = 0;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Card Settings', 'ainoblocks')}>
						<SelectControl
							label={__("Shadow", "ainoblocks")}
							value={shadowName}
							options={shadowNameOptions}
							onChange={shadowName => setAttributes({ shadowName })}
						/>
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
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __('Border Color', 'ainoblocks'),
							},
						]}
					>
					</PanelColorSettings>
					<PanelBody
						title={__('Border', 'ainoblocks')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Border Width Top', 'ainoblocks')}
							value={borderTopWidth}
							initialPosition={0}
							min={0}
							max={100}
							allowReset={true}
							onChange={borderTopWidth => setAttributes({ borderTopWidth })}
						/>
						<RangeControl
							label={__('Border Width Right', 'ainoblocks')}
							value={borderRightWidth}
							initialPosition={0}
							min={0}
							max={100}
							allowReset={true}
							onChange={borderRightWidth => setAttributes({ borderRightWidth })}
						/>
						<RangeControl
							label={__('Border Width Bottom', 'ainoblocks')}
							value={borderBottomWidth}
							initialPosition={0}
							min={0}
							max={100}
							allowReset={true}
							onChange={borderBottomWidth => setAttributes({ borderBottomWidth })}
						/>
						<RangeControl
							label={__('Border Width Left', 'ainoblocks')}
							value={borderLeftWidth}
							initialPosition={0}
							min={0}
							max={100}
							allowReset={true}
							onChange={borderLeftWidth => setAttributes({ borderLeftWidth })}
						/>
						<RangeControl
							label={__('Border Radius', 'ainoblocks')}
							value={borderRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={borderRadius => setAttributes({ borderRadius })}
						/>
					</PanelBody>
					<PanelBody
						title={__('Spacing', 'ainoblocks')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Padding Top', 'ainoblocks')}
							value={paddingTop}
							onChange={(paddingTop) => setAttributes({ paddingTop })}
							initialPosition={7}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Bottom', 'ainoblocks')}
							value={paddingBottom}
							onChange={(paddingBottom) => setAttributes({ paddingBottom })}
							initialPosition={7}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Left', 'ainoblocks')}
							value={paddingLeft}
							onChange={(paddingLeft) => setAttributes({ paddingLeft })}
							initialPosition={7}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Right', 'ainoblocks')}
							value={paddingRight}
							onChange={(paddingRight) => setAttributes({ paddingRight })}
							initialPosition={7}
							min={0}
							max={19}
							allowReset={true}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={classnames(className, shadowName, align, {
						'has-background': backgroundColor,
						'has-border': borderColor,
						[`pt__${paddingTop}`]: paddingTop,
						[`pb__${paddingBottom}`]: paddingBottom,
						[`pl__${paddingLeft}`]: paddingLeft,
						[`pr__${paddingRight}`]: paddingRight,
					})}
					style={{
						backgroundColor: backgroundColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? borderRadius + 'px' : undefined,
						borderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,
						borderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,
						borderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,
						borderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined,
					}}>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}

export default compose([
])(cardEdit);
