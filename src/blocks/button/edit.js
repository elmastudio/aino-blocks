/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, useCallback, useState } = wp.element;
const {
	PanelBody,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	Popover,
	ToggleControl,
	SelectControl,
	RangeControl,
} = wp.components;
const {
	BlockControls,
	BlockIcon,
	RichText,
	InspectorControls,
	useBlockProps,
	InspectorAdvancedControls,
	__experimentalLinkControl,
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
export default function buttonEdit( { attributes, setAttributes, className, isSelected, opensInNewTab } ) {

	const {
		label,
		url,
		linkTarget,
		rel,
		size,
		borderRadius,
		borderWidth,
		uppercase,
	} = attributes;

	const sizeOptions = [
		{ value: 'size__xxxs', label: __('3XS', 'ainoblocks') },
		{ value: 'size__xxs', label: __('XXS', 'ainoblocks') },
		{ value: 'size__xs', label: __('XS', 'ainoblocks') },
		{ value: 'size__s', label: __('S', 'ainoblocks') },
		{ value: 'size__m', label: __('M', 'ainoblocks') },
		{ value: 'size__l', label: __('L', 'ainoblocks') },
		{ value: 'size__xl', label: __('XL', 'ainoblocks') },
		{ value: 'size__xxl', label: __('XXL', 'ainoblocks') },
		{ value: 'size__xxxl', label: __('3XL', 'ainoblocks') },
		{ value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }
	];

	const styleButton = {
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
	};

	const styleBg = {
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
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

	const buttonClasses = classnames(className, {
	});

	const blockProps = useBlockProps( {
		className: buttonClasses,
		style: styleBg,
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
				<PanelBody title={__('Button Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Size', 'ainoblocks')}
						value={size}
						options={sizeOptions}
						onChange={size => setAttributes({ size })}
					/>
					<RangeControl
						label={__('Border Radius', 'ainoblocks')}
						value={borderRadius}
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						min={0}
						max={200}
						initialPosition={0}
						allowReset={true}
					/>
					<RangeControl
						label={__('Border Width', 'ainoblocks')}
						value={borderWidth}
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={0}
						max={20}
						initialPosition={0}
						allowReset={true}
					/>
					<ToggleControl
						label={__('Uppercase Text', 'ainoblocks')}
						checked={!!uppercase}
						onChange={() => setAttributes({ uppercase: !uppercase })}
						help={!!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')}
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
						'wp-block-ainoblocks-button__link', size, borderRadius, {
						'is-uppercase': uppercase,
						'no-border-radius': borderRadius === 0,
						'no-border': borderWidth === 0,
						}
					) }
					style={styleButton}
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