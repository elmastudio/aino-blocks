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
		node.classList.add('wp-block-ainoblocks-button-wrapper');
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
class buttonEdit extends Component {

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
			size,
			fontSize,
			borderRadius,
			borderWidth,
			uppercase,
		} = attributes;

		const sizeOptions = [
			{ value: 'size-s', label: __('small', 'ainoblocks') },
			{ value: 'size-m', label: __('medium', 'ainoblocks') },
			{ value: 'size-l', label: __('large', 'ainoblocks') }
		];

		const fontSizeOptions = [
			{ value: 'fontsize-s', label: __('small', 'ainoblocks') },
			{ value: 'fontsize-m', label: __('medium', 'ainoblocks') },
			{ value: 'fontsize-l', label: __('large', 'ainoblocks') }
		];

		const borderRadiusOptions = [
			{ value: 'radius-square', label: __('square', 'ainoblocks') },
			{ value: 'radius-round', label: __('round', 'ainoblocks') },
			{ value: 'radius-circular', label: __('circular', 'ainoblocks') }
		];

		const borderWidthOptions = [
			{ value: 'border-width-thin', label: __('thin', 'ainoblocks') },
			{ value: 'border-width-medium', label: __('medium', 'ainoblocks') },
			{ value: 'border-width-thick', label: __('thick', 'ainoblocks') }
		];

		const styles = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			boxShadow: borderWidth === 'border-width-medium' ? 'inset 0 0 0 2px' + backgroundColor.color : 'inset 0 0 0 1px' + backgroundColor.color,
			boxShadow: borderWidth === 'border-width-thick' ? 'inset 0 0 0 3px' + backgroundColor.color : 'inset 0 0 0 1px' + backgroundColor.color,
		};

		const linkId = `wp-block-ainoblocks-button__inline-link-${instanceId}`;

		return (
			<div className={className} title={title}>
				<a
					className={classnames(
						'wp-block-ainoblocks-button__link', size, fontSize, borderRadius, borderWidth, {
						'has-custom-background': backgroundColor,
						'has-custom-text-color': textColor,
						'is-uppercase': uppercase,
					}
					)}
					style={styles}
				>
					<span>
						<RichText
							placeholder={__('Enter text…', 'ainoblocks')}
							value={text}
							onChange={(value) => setAttributes({ text: value })}

						/>
					</span>
				</a>
				<BaseControl
					label={__('Link', 'ainoblocks')}
					className="wp-block-ainoblocks-button__inline-link"
					id={linkId}>
					<URLInput
						className="wp-block-ainoblocks-button__inline-link-input"
						value={url}
						autoFocus={false}
						onChange={(value) => setAttributes({ url: value })}
						disableSuggestions={!isSelected}
						id={linkId}
						hasBorder
					/>
				</BaseControl>
				<InspectorControls>
					<PanelBody title={__('Button Settings', 'ainoblocks')}>
						<SelectControl
							label={__('Size', 'ainoblocks')}
							value={size}
							options={sizeOptions}
							onChange={size => setAttributes({ size })}
						/>
						<SelectControl
							label={__('Font Size', 'ainoblocks')}
							value={fontSize}
							options={fontSizeOptions}
							onChange={fontSize => setAttributes({ fontSize })}
						/>
						<SelectControl
							label={__('Border Radius', 'ainoblocks')}
							value={borderRadius}
							options={borderRadiusOptions}
							onChange={borderRadius => setAttributes({ borderRadius })}
						/>
						<SelectControl
							label={__('Border Width', 'ainoblocks')}
							value={borderWidth}
							options={borderWidthOptions}
							onChange={borderWidth => setAttributes({ borderWidth })}
						/>
						<ToggleControl
							label={__('Uppercase Text', 'ainoblocks')}
							checked={!!uppercase}
							onChange={() => setAttributes({ uppercase: !uppercase })}
							help={!!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')}
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
			</div >
		);
	}
}

export default compose([
	withInstanceId,
	withColors('backgroundColor', { textColor: 'color' }),
	applyFallbackStyles,
])(buttonEdit);
