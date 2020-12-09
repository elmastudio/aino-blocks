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
	SelectControl,
	ToggleControl,
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
			size,
			backgroundColor,
			textColor,
			borderColor,
			alignment,
			borderRadius,
			icon,
		} = attributes;

		const sizeOptions = [
			{ value: 'size__ssx', label: __('SSX', 'ainoblocks') },
			{ value: 'size__sx', label: __('SX', 'ainoblocks') },
			{ value: 'size__s', label: __('S', 'ainoblocks') },
			{ value: 'size__m', label: __('M', 'ainoblocks') },
			{ value: 'size__l', label: __('L', 'ainoblocks') },
			{ value: 'size__xl', label: __('XL', 'ainoblocks') },
			{ value: 'size__xxl', label: __('XXL', 'ainoblocks') },
			{ value: 'size__xxxl', label: __('3XL', 'ainoblocks') },
			{ value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }
		];

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
					<PanelBody title={__('Badge settings', 'ainoblocks')}>
						<SelectControl
							label={__('Size', 'ainoblocks')}
							value={size}
							options={sizeOptions}
							onChange={size => setAttributes({ size })}
						/>
						<RangeControl
							label={__('Border Radius', 'ainoblocks')}
							value={borderRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={(borderRadius) => setAttributes({ borderRadius })}
						/>
						<ToggleControl
							label={__('Icon', 'ainoblocks')}
							checked={!!icon}
							onChange={() => setAttributes({ icon: !icon })}
							help={!!icon ? __('Icon is visible.', 'ainoblocks') : __('Toggle to show icon.', 'ainoblocks')}
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
								value: textColor,
								onChange: textColor => {
									setAttributes({ textColor });
								},
								label: __('Text Color', 'ainoblocks'),
							},
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __('Border Color', 'ainoblocks'),
							}
						]}
					>
					</PanelColorSettings>
				</InspectorControls>

				<div
					className={classnames( 'wp-block-ainoblocks-badge', size,)}
				>
					<RichText
						multiline="false"
						tagName="span"
						className={classnames(`${className}__content`, {
							'has-text-color': textColor,
							'has-border-color': borderColor,
							'has-background': backgroundColor,
							'no-border-radius': borderRadius === 0,
							'has-icon': icon,
						})}
						style={{
							color: textColor,
							background: backgroundColor,
							borderColor: borderColor,
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
