/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} = wp.components;

/**
 * Block edit function
 */
class CardEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;
		const {
			containerWidth,
			backgroundColor,
			borderColor,
			shadowColor,
			backgroundRadius,
			shadowName,
			padding,
		} = attributes;
		const shadowNameOptions = [
			{ value: "shadow-a", label: __("shadow a", "ainoblocks") },
			{ value: "shadow-b", label: __("shadow b", "ainoblocks") },
			{ value: "shadow-none", label: __("none", "ainoblocks") }
		];

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={containerWidth}
						onChange={containerWidth => setAttributes({ containerWidth })}
						controls={['wide', 'full']}
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={__("Card Settings", "ainoblocks")}>
						<RangeControl
							label={__("Border Radius", "ainoblocks")}
							value={backgroundRadius}
							onChange={backgroundRadius => setAttributes({ backgroundRadius })}
							min={0}
							max={50}
						/>
						<SelectControl
							label={__("Shadow", "ainoblocks")}
							value={shadowName}
							options={shadowNameOptions}
							onChange={shadowName => setAttributes({ shadowName })}
						/>
						<ToggleControl
							label={__("Padding", "ainoblocks")}
							checked={!!padding}
							onChange={() => setAttributes({ padding: !padding })}
							help={!!padding ? __("Showing card padding.", "ainoblocks") : __("Toggle to add card padding.", "ainoblocks")}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__("Color Settings", "ainoblocks")}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: backgroundColor => {
									setAttributes({ backgroundColor });
								},
								label: __("Background Color", "ainoblocks"),
							},
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __("Border Color", "ainoblocks"),
							},
							{
								value: shadowColor,
								onChange: shadowColor => {
									setAttributes({ shadowColor });
								},
								label: __("Shadow Color", "ainoblocks"),
							},
						]}
					>
					</PanelColorSettings>
				</InspectorControls>
				<div
					className={classnames(className, shadowName, {
						'has-background': backgroundColor,
						'has-border': borderColor,
						'has-padding': padding,
					})}
					style={{
						backgroundColor: backgroundColor,
						borderColor: borderColor,
						borderRadius: backgroundRadius,
						shadowColor: shadowColor,
					}}>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}
export default CardEdit;
