/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;
const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
class BadgeEdit extends Component {

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
			content,
			backgroundColor,
			textColor,
			alignment,
			borderRadius,
		} = attributes;

		const MIN_BORDER_RADIUS_VALUE = 0;
		const MAX_BORDER_RADIUS_VALUE = 50;
		const INITIAL_BORDER_RADIUS_POSITION = 0;

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={alignment => setAttributes({ alignment })}
					/>
				</BlockControls>
				<InspectorControls>
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
								value: textColor,
								onChange: textColor => {
									setAttributes({ textColor });
								},
								label: __("Text Color", "ainoblocks"),
							}
						]}
					>
					</PanelColorSettings>
					<PanelBody title={__("Border settings", "ainoblocks")}>
						<RangeControl
							label={__("Border Radius", "ainoblocks")}
							value={borderRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={(borderRadius) => setAttributes({ borderRadius })}
						/>
					</PanelBody>
				</InspectorControls>

				<div className={classnames(className)}
					style={{ textAlign: alignment }}
				>
					<RichText
						multiline="false"
						tagName="span"
						className={classnames(`${className}__content`, {
							'has-text-color': textColor,
							'has-background': backgroundColor,
							'no-border-radius': borderRadius === 0,
						})}
						style={{
							background: backgroundColor,
							color: textColor,
							borderRadius: borderRadius ? borderRadius + 'px' : undefined,
						}}
						value={content}
						onChange={(value) => setAttributes({ content: value })}
					/>
				</div>
			</Fragment>
		);
	}
}

export default BadgeEdit;
