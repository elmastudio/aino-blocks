/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, withInstanceId } = wp.compose;
const {
	withFallbackStyles,
	PanelBody,
	TextControl,
	ToggleControl,
	BaseControl,
	SelectControl,
	RangeControl,
} = wp.components;

const {
	URLInput,
	RichText,
	ContrastChecker,
	InspectorControls,
	withColors,
	PanelColorSettings,
} = wp.blockEditor;

/**
 * Constants
 */
const { getComputedStyle } = window;

const applyFallbackStyles = withFallbackStyles((node, ownProps) => {
	if (node) {
		node.classList.add('wp-block-ainoblocks-advanced-button-wrapper');
	}

	const { textColor, backgroundColor } = ownProps;
	const backgroundColorValue = backgroundColor && backgroundColor.color;
	const textColorValue = textColor && textColor.color;
	const textNode = !textColorValue && node ? node.querySelector('[contenteditable="true"]') : null;
	return {
		fallbackBackgroundColor: backgroundColorValue || !node ? undefined : getComputedStyle(node).backgroundColor,
		fallbackTextColor: textColorValue || !textNode ? undefined : getComputedStyle(textNode).color,
	};
});

const NEW_TAB_REL = 'noreferrer noopener';

/**
 * Block edit function
 */
class AdvancedButtonEdit extends Component {

	constructor() {
		super(...arguments);
		this.nodeRef = null;
		this.bindRef = this.bindRef.bind(this);
		this.onSetLinkRel = this.onSetLinkRel.bind(this);
		this.onToggleOpenInNewTab = this.onToggleOpenInNewTab.bind(this);
	}

	bindRef(node) {
		if (!node) {
			return;
		}
		this.nodeRef = node;
	}

	onSetLinkRel(value) {
		this.props.setAttributes({ rel: value });
	}

	onToggleOpenInNewTab(value) {
		const { rel } = this.props.attributes;
		const linkTarget = value ? '_blank' : undefined;

		let updatedRel = rel;
		if (linkTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!linkTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		this.props.setAttributes({
			linkTarget,
			rel: updatedRel,
		});
	}

	render() {
		const {
			attributes,
			backgroundColor,
			backgroundHoverColor,
			textColor,
			setBackgroundColor,
			setTextColor,
			setAttributes,
			className,
			instanceId,
			isSelected,
		} = this.props;

		const {
			text,
			url,
			title,
			linkTarget,
			rel,
			placeholder,
			size,
			borderRadius,
			marginLeft,
			marginRight,
			uppercase,
			fullwidth,
		} = attributes;

		const sizeOptions = [
			{ value: 'size-s', label: __('small', 'ainoblocks') },
			{ value: 'size-m', label: __('medium', 'ainoblocks') },
			{ value: 'size-l', label: __('large', 'ainoblocks') }
		];

		const borderRadiusOptions = [
			{ value: 'radius-square', label: __('square', 'ainoblocks') },
			{ value: 'radius-round', label: __('round', 'ainoblocks') },
			{ value: 'radius-circular', label: __('circular', 'ainoblocks') }
		];

		const linkId = `wp-block-ainoblocks-advanced-button__inline-link-${instanceId}`;

		return (
			<div className={className} title={title}>
				<RichText
					placeholder={__('Enter text…', 'ainoblocks')}
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					className={classnames(
						'wp-block-ainoblocks-advanced-button__link', size, borderRadius, {
							'has-custom-background': backgroundColor,
							'has-custom-text-color': textColor,
							'is-uppercase': uppercase,
							'is-fullwidth': fullwidth,
						}
					)}
					style={{
						backgroundColor: backgroundColor.color,
						borderColor: backgroundColor.color,
						color: textColor.color,
						marginLeft: marginLeft,
					}}
				/>
				<BaseControl
					label={__('Link', 'ainoblocks')}
					className="wp-block-ainoblocks-advanced-button__inline-link"
					id={linkId}>
					<URLInput
						className="wp-block-ainoblocks-advanced-button__inline-link-input"
						value={url}
						autoFocus={false}
						onChange={(value) => setAttributes({ url: value })}
						disableSuggestions={!isSelected}
						id={linkId}
						isFullWidth
						hasBorder
					/>
				</BaseControl>
				<InspectorControls>
					<PanelBody title={__('Advanced Button Settings', 'ainoblocks')}>
						<SelectControl
							label={__('Size', 'ainoblocks')}
							value={size}
							options={sizeOptions}
							onChange={size => setAttributes({ size })}
						/>
						<SelectControl
							label={__('Border Radius', 'ainoblocks')}
							value={borderRadius}
							options={borderRadiusOptions}
							onChange={borderRadius => setAttributes({ borderRadius })}
						/>
						<RangeControl
							label={__("Margin Left", "ainoblocks")}
							value={marginLeft}
							onChange={marginLeft => setAttributes({ marginLeft })}
							min={0}
							max={48}
						/>
						<RangeControl
							label={__("Margin Right", "ainoblocks")}
							value={marginRight}
							onChange={marginRight => setAttributes({ marginRight })}
							min={0}
							max={48}
						/>
						<ToggleControl
							label={__('Uppercase Text', 'ainoblocks')}
							checked={!!uppercase}
							onChange={() => setAttributes({ uppercase: !uppercase })}
							help={!!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')}
						/>
						<ToggleControl
							label={__('Full Width', 'ainoblocks')}
							checked={!!fullwidth}
							onChange={() => setAttributes({ fullwidth: !fullwidth })}
							help={!!fullwidth ? __('Button stretches to full width.', 'ainoblocks') : __('Toggle for full width button.', 'ainoblocks')}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color Settings', 'ainoblocks')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color', 'ainoblocks'),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __('Text Color', 'ainoblocks'),
							},
						]}
					>
					</PanelColorSettings>

					<PanelBody
						title={__('Link Settings', 'ainoblocks')}
						initialOpen={false}
					>
						<ToggleControl
							label={__('Open in New Tab', 'ainoblocks')}
							onChange={this.onToggleOpenInNewTab}
							checked={linkTarget === '_blank'}
						/>
						<TextControl
							label={__('Link Rel', 'ainoblocks')}
							value={rel || ''}
							onChange={this.onSetLinkRel}
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}
}

export default compose([
	withInstanceId,
	withColors('backgroundColor', { textColor: 'color' }),
	applyFallbackStyles,
])(AdvancedButtonEdit);
