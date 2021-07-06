/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, withInstanceId } = wp.compose;
const {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
export default function dividerEdit( { attributes, setAttributes, className } ) {

	const {
		backgroundColor,
		borderColor,
		iconColor,
		borderWidth,
	} = attributes;

		const styles = {
			backgroundColor: backgroundColor,
			borderColor: borderColor,
			borderWidth: borderWidth ? borderWidth + 'px' : undefined,
		};

		const iconStyles = {
			fill: iconColor,
		};

		const borderWidthTooltipContent = borderWidth => `${borderWidth}px`

		const blockProps = useBlockProps( {
			className: className,
		} );

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Divider Settings', 'ainoblocks')}
					>
						<RangeControl
							label={__('Border Width', 'ainoblocks')}
							help={__('Do not forget to choose a border color in the Color settings.', 'ainoblocks')}
							value={borderWidth}
							onChange={(borderWidth) => setAttributes({ borderWidth })}
							min={0}
							max={50}
							initialPosition={0}
							allowReset={true}
							renderTooltipContent={ borderWidthTooltipContent }
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
							{
								value: iconColor,
								onChange: iconColor => {
									setAttributes({ iconColor });
								},
								label: __('Icon Color', 'ainoblocks'),
							},
						]}
					>
					</PanelColorSettings>
				</InspectorControls>
				<div { ...blockProps }>
					<span class="wp-block-ainoblocks-divider__inner" style={ styles }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="__icon" style={iconStyles}>
							<path d="M25.586 6.586l17.414 17.414-17.414 17.414-2.828-2.828 12.585-12.586-30.342 0v-4l30.342-0-12.585-12.586z"></path>
						</svg>
					</span>
				</div>
			</Fragment>
	);
}
