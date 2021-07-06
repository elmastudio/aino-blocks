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
	ToggleControl,
	SelectControl,
	RangeControl,
	Popover,
	ToolbarButton,
	ToolbarGroup,
	Path,
	SVG,
	__experimentalNumberControl,
} = wp.components;

const {
	BlockControls,
	BlockIcon,
	RichText,
	InspectorControls,
	PanelColorSettings,
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
export default function arrowButtonEdit( { attributes, setAttributes, className, isSelected, opensInNewTab } ) {

	const {
		url,
		label,
		link,
		text,
		linkTarget,
		rel,
		size,
		uppercase,
		iconPositionAfter,
		iconRotation,
		lineHeight,
		textColor,
		iconColor
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

		const MIN_ICON_ROTATION_VALUE = 0;
		const MAX_ICON_ROTATION_VALUE = 360;
		const INITIAL_ICON_ROTATION_POSITION = 0;

		const iconClasses = classnames('wp-block-ainoblocks-arrow-button__icon');

		const iconStyles = {
			transform: iconRotation ? `rotate(${iconRotation}deg)` : undefined,
			fill: iconColor,
		};

		const linkStyles = {
			color: textColor,
			lineHeight: lineHeight,
			lineHeight: lineHeight ? lineHeight : undefined,
		};

		const onSetLinkRel = useCallback(
			( value ) => {
				setAttributes( { rel: value } );
			},
			[ setAttributes ]
		);

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

		const arrowButtonClasses = classnames(className, size, {});
		const blockProps = useBlockProps( {
			className: arrowButtonClasses,
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
				<PanelBody title={__('Arrow Button Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Size', 'ainoblocks')}
						value={size}
						options={sizeOptions}
						onChange={size => setAttributes({ size })}
					/>
					<__experimentalNumberControl
						label={__('Line height', 'ainoblocks')}
						isShiftStepEnabled={ true }
						onChange={ lineHeight => setAttributes({ lineHeight }) }
						step={ 0.1 }
						value={ lineHeight }
					/>
					<RangeControl
						label={__('Icon Rotation in degrees', 'ainoblocks')}
						value={iconRotation}
						min={MIN_ICON_ROTATION_VALUE}
						max={MAX_ICON_ROTATION_VALUE}
						initialPosition={INITIAL_ICON_ROTATION_POSITION}
						allowReset
						onChange={iconRotation => setAttributes({ iconRotation })}
					/>
					<ToggleControl
						label={__('Icon Position', 'ainoblocks')}
						checked={!!iconPositionAfter}
						onChange={() => setAttributes({ iconPositionAfter: !iconPositionAfter })}
						help={!!iconPositionAfter ? __('Icon is placed after text.', 'ainoblocks') : __('Toggle to place icon after text.', 'ainoblocks')}
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
							value: textColor,
							onChange: textColor => {
								setAttributes({ textColor });
							},
							label: __('Text Color', 'ainoblocks'),
						},
						{
							value: iconColor,
							onChange: iconColor => {
								setAttributes({ iconColor });
							},
							label: __('Icon Color', 'ainoblocks'),
						}
					]}
				>
				</PanelColorSettings>
			</InspectorControls>
			<InspectorAdvancedControls>
				<TextControl
					label={ __( 'Link rel' ) }
					value={ rel || '' }
					onChange={ onSetLinkRel }
				/>
			</InspectorAdvancedControls>

			<div { ...blockProps }>
				{ ! iconPositionAfter && (
					<span className={iconClasses} style={iconStyles}>
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<Path d="M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z"></Path>
						</SVG>
					</span>
				) }
				<div
					className={ classnames(
						'wp-block-ainoblocks-arrow-button__link', {
							'is-uppercase': uppercase,
							'icon-after': iconPositionAfter,
							}
					) }
					style={linkStyles}
					>
					<RichText
						value={text}
						placeholder={ __( "Add text…", 'ainoblocks' ) }
						tagName='span'
						multiline= 'false'
						formattingControls={ [ 'bold', 'italic' ] }
						onChange={ value => {
							setAttributes( { text: value })
						} }
						rel ="noopener noreferrer"
						opensInNewTab={ linkTarget === '_blank' }
						onToggleOpenInNewTab={ onToggleOpenInNewTab }
					/>
				</div>
				{ iconPositionAfter && (
					<span className={iconClasses} style={iconStyles}>
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<Path d="M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z"></Path>
						</SVG>
					</span>
				) }
			</div>
		</Fragment>
	);
}
