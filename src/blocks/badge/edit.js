/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component,Fragment } = wp.element;
const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} = wp.blockEditor;
const {
	Path,
	SVG,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

/**
 * Block edit function
 */

export default function BadgeEdit( { attributes, setAttributes, className } ) {

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

		const contentClasses = classnames('badge-content', {
			'has-text-color': textColor,
			'has-border-color': borderColor,
		});

		const contentStyles = {
			color: textColor,
			background: backgroundColor,
			borderColor: borderColor,
			borderTopLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
			borderBottomLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
			borderTopRightRadius: borderRadius ? borderRadius + 'px' : undefined,
			borderBottomRightRadius: borderRadius ? borderRadius + 'px' : undefined,
		};

		const iconClasses = classnames('badge-icon');

		const iconStyles = {
			fill: textColor,
			borderColor: borderColor,
			background: backgroundColor,
			borderTopLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
			borderBottomLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
		};

		const badgeClasses = classnames(className, size, {
			'no-icon': icon,
		});

		const blockProps = useBlockProps( {
			className: badgeClasses,
			style: {
				color: textColor,
			},
		} );

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
						title={__('Color', 'ainoblocks')}
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

				<div { ...blockProps }>
					{ icon && (
						<span className={iconClasses} style={iconStyles}>
							<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<Path d="M26 4v15.17l10.728-10.726 2.828 2.828-10.727 10.727 15.171 0.001v4l-15.172-0.001 10.728 10.729-2.828 2.828-10.728-10.727v15.171h-4v-15.172l-10.728 10.728-2.828-2.828 10.727-10.729-15.171 0.001v-4l15.17-0.001-10.726-10.727 2.828-2.828 10.728 10.727v-15.171z"></Path>
							</SVG>
						</span>
					) }
					<RichText
						tagName='span'
						className={contentClasses}
						style={contentStyles}
						value={content}
						onChange={(value) => setAttributes({ content: value })}
					/>
				</div>
			</Fragment>
		);
}

