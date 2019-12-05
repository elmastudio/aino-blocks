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
			align,
			backgroundColor,
			borderColor,
			backgroundRadius,
			shadowName,
			padding,
		} = attributes;
		const shadowNameOptions = [
			{ value: "shadow-a", label: __("small", "ainoblocks") },
			{ value: "shadow-b", label: __("large", "ainoblocks") },
			{ value: "shadow-none", label: __("none", "ainoblocks") }
		];
		const MIN_BORDER_RADIUS_VALUE = 0;
		const MAX_BORDER_RADIUS_VALUE = 50;
		const INITIAL_BORDER_RADIUS_POSITION = 0;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__("Card Settings", "ainoblocks")}>
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
						initialOpen={true}
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
						]}
					>
					</PanelColorSettings>
					<PanelBody title={__("Border settings", "ainoblocks")}>
						<RangeControl
							label={__("Border Radius", "ainoblocks")}
							value={backgroundRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={backgroundRadius => setAttributes({ backgroundRadius })}
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={classnames(className, shadowName, align, {
						'has-background': backgroundColor,
						'has-border': borderColor,
						'has-padding': padding,
					})}
					style={{
						backgroundColor: backgroundColor,
						borderColor: borderColor,
						borderRadius: backgroundRadius,
					}}>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}
export default CardEdit;
