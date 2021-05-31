/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment, useCallback, useState } = wp.element;
const { compose, withInstanceId } = wp.compose;
const {
	PanelBody,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	ToggleControl,
	SelectControl,
	RangeControl,
	__experimentalNumberControl,
	Popover,
	TabPanel,
} = wp.components;

const {
	BlockControls,
	BlockIcon,
	RichText,
	InspectorControls,
	withColors,
	PanelColorSettings,
	ColorPalette,
	__experimentalLinkControl,
	useBlockProps,
	InspectorAdvancedControls,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * Constants
 */
const NEW_TAB_REL = 'noreferrer noopener';

/**
 * Block edit function
 */
export default function stickerEdit( { attributes, setAttributes, className, isSelected, opensInNewTab } ) {

		const {
			label,
			url,
			linkTarget,
			rel,
			stickerSize,
			fontSize,
			borderRadius,
			borderWidth,
			uppercase,
			backgroundColor,
			textColor,
			borderColor,
			rotate,
			rotateStart,
		} = attributes;

		const fontSizeOptions = [
			{ value: 'font__ssx', label: __('SSX', 'ainoblocks') },
			{ value: 'font__sx', label: __('SX', 'ainoblocks') },
			{ value: 'font__s', label: __('S', 'ainoblocks') },
			{ value: 'font__m', label: __('M', 'ainoblocks') },
			{ value: 'font__l', label: __('L', 'ainoblocks') },
			{ value: 'font__xl', label: __('XL', 'ainoblocks') },
			{ value: 'font__xxl', label: __('XXL', 'ainoblocks') },
			{ value: 'font__xxxl', label: __('3XL', 'ainoblocks') },
			{ value: 'font__xxxxl', label: __('4XL', 'ainoblocks') }
		];

		const rotateOptions = [
			{ value: 'rotate__none', label: __('none', 'ainoblocks') },
			{ value: 'rotate__infinite', label: __('infinite', 'ainoblocks') },
			{ value: 'rotate__hover', label: __('on hover', 'ainoblocks') }
		];

		const styles = {
			backgroundColor: backgroundColor,
			color: textColor,
			borderColor: borderColor,
			borderRadius: borderRadius ? borderRadius + '%' : undefined,
			borderWidth: borderWidth ? borderWidth + 'px' : undefined,
			transform: `rotateZ(${rotateStart}deg)`,
		};

		const onToggleOpenInNewTab = useCallback(
			( value ) => {
				const newLinkTarget = value ? '_blank' : undefined;
	
				let updatedRel = rel;
				if ( newLinkTarget && ! rel ) {
					updatedRel = NEW_TAB_REL;
				} else if ( ! newLinkTarget && rel === NEW_TAB_REL ) {
					updatedRel = undefined;
				}
	
				setAttributes( {
					linkTarget: newLinkTarget,
					rel: updatedRel,
				} );
			},
			[ rel, setAttributes ]
		);
	

		const onSetLinkRel = useCallback(
			( value ) => {
				setAttributes( { rel: value } );
			},
			[ setAttributes ]
		);

		const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );
		const urlIsSet = !! url;
		const urlIsSetandSelected = urlIsSet && isSelected;

		const openLinkControl = () => {
			setIsURLPickerOpen( true );
			return false; // prevents default behaviour for event
		};
	
		const unlinkButton = () => {
			setAttributes( {
				url: undefined,
				linkTarget: undefined,
				rel: undefined,
			} );
			setIsURLPickerOpen( false );
		};

		const linkControl = ( isURLPickerOpen || urlIsSetandSelected ) && (

			<Popover
			position="bottom center"
			onClose={ () => setIsURLPickerOpen( false ) }
		>
			<__experimentalLinkControl
				className="wp-block-navigation-link__inline-link-input"
				value={ { url, opensInNewTab } }
				onChange={ ( {
					url: newURL = '',
					opensInNewTab: newOpensInNewTab,
				} ) => {
					setAttributes( { url: newURL } );

					if ( opensInNewTab !== newOpensInNewTab ) {
						onToggleOpenInNewTab( newOpensInNewTab );
					}
				} }
			/>
		</Popover>
	);
		
		const stickerSizeTooltipContent = stickerSize => `size ${stickerSize}`
		const borderRadiusTooltipContent = borderRadius => `${borderRadius}px`
		const borderWidthTooltipContent = borderWidth => `${borderWidth}px`
		const rotateStartTooltipContent = rotateStart => `${rotateStart}degrees`

		const stickerClasses = classnames(className, {});
		const blockProps = useBlockProps( {
			className: stickerClasses,
		} );

		return (
			<Fragment>
				<BlockControls>
				<ToolbarGroup>
				{ ! urlIsSet && (
					<ToolbarButton
						name="link"
						icon={<BlockIcon icon={icons.link} />}
						title={ __( 'Link', 'ainoblocks' ) }
						onClick={ openLinkControl }
					/>
					) }
				{ urlIsSetandSelected && (
					<ToolbarButton
						name="link"
						icon={<BlockIcon icon={icons.linkOff} />}
						title={ __( 'Unlink','ainoblocks' ) }
						onClick={ unlinkButton }
						isActive={ true }
					/>
				) }
				</ToolbarGroup>
				</BlockControls>
				{ linkControl }
				<InspectorControls>
				<PanelBody
						title={__('Sticker Settings', 'ainoblocks')}
					>
						<RangeControl
								label={__('Sticker Size', 'ainoblocks')}
								value={stickerSize}
								onChange={(stickerSize) => setAttributes({ stickerSize })}
								min={1}
								max={9}
								allowReset={true}
								resetFallbackValue={7}
								renderTooltipContent={ stickerSizeTooltipContent }
							/>
						<RangeControl
							label={__('Border Radius', 'ainoblocks')}
							value={borderRadius}
							onChange={(borderRadius) => setAttributes({ borderRadius })}
							min={0}
							max={100}
							initialPosition={0}
							allowReset={true}
							renderTooltipContent={ borderRadiusTooltipContent }
						/>
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
					<PanelBody
						title={__('Typography', 'ainoblocks')}
						initialOpen={false}
					>
						<SelectControl
							label={__('Font Size', 'ainoblocks')}
							value={fontSize}
							options={fontSizeOptions}
							onChange={fontSize => setAttributes({ fontSize })}
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
							},
						]}
					>
					</PanelColorSettings>
					<PanelBody
						title={__('Animation', 'ainoblocks')}
						initialOpen={false}
						>
						<SelectControl
							label={__('Rotate', 'ainoblocks')}
							value={rotate}
							options={rotateOptions}
							onChange={rotate => setAttributes({ rotate })}
						/>
						<RangeControl
							label={__('Starting Position', 'ainoblocks')}
							value={rotateStart}
							onChange={(rotateStart) => setAttributes({ rotateStart })}
							min={-360}
							max={360}
							initialPosition={0}
							allowReset={true}
							renderTooltipContent={ rotateStartTooltipContent }
						/>
					</PanelBody>
				</InspectorControls>
				<InspectorAdvancedControls>
				<TextControl
					label={ __( 'Link rel' ) }
					value={ rel || '' }
					onChange={ onSetLinkRel }
				/>
			</InspectorAdvancedControls>

			<div { ...blockProps }>
				<RichText
					placeholder={ __( "Add text…", 'ainoblocks' ) }
					value={ label }
					tagName='div'
					className={ classnames(
						'wp-block-ainoblocks-sticker__content', fontSize, rotate, {
						'has-custom-background': backgroundColor,
						'has-custom-text-color': textColor,
						'has-custom-border-color': borderColor,
						'is-uppercase': uppercase,
						[`size__${stickerSize}`] : stickerSize ? stickerSize : undefined,
						}
					) }
					style={styles}
					onChange={ value => {
						setAttributes( { label: value })
					} }
					formattingControls={ [ 'bold', 'italic' ] }
					rel ="noopener noreferrer"
					opensInNewTab={ linkTarget === '_blank' }
					onToggleOpenInNewTab={ onToggleOpenInNewTab }
				/>
			</div>
		</Fragment>
	);
}
