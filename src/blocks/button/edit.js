/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, useCallback, useState, Fragment, } = wp.element;
const { compose, withInstanceId } = wp.compose;
const {
	withFallbackStyles,
	PanelBody,
	TextControl,
	ToggleControl,
	BaseControl,
	SelectControl,
	KeyboardShortcuts,
	ToolbarButton,
	ToolbarGroup,
	Popover,
	Icon,
	RangeControl,
} = wp.components;

const {
	RichText,
	BlockControls,
	InspectorControls,
	withColors,
	PanelColorSettings,
} = wp.blockEditor;

const {
	rawShortcut, 
	displayShortcut,
} = wp.keycodes;

const {
	createBlock,
} = wp.blocks;

/**
 * Internal dependencies
 */

/**
 * Constants
 */

const NEW_TAB_REL = 'noreferrer noopener';

function URLPicker( {
	isSelected,
	url,
	setAttributes,
	opensInNewTab,
	onToggleOpenInNewTab,
} ) {
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
			<LinkControl
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
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					{ ! urlIsSet && (
						<ToolbarButton
							name="link"
							title={ __( 'Link' ) }
							shortcut={ displayShortcut.primary( 'k' ) }
							onClick={ openLinkControl }
						/>
					) }
					{ urlIsSetandSelected && (
						<ToolbarButton
							name="link"
							title={ __( 'Unlink' ) }
							shortcut={ displayShortcut.primaryShift( 'k' ) }
							onClick={ unlinkButton }
							isActive={ true }
						/>
					) }
				</ToolbarGroup>
			</BlockControls>
			{ isSelected && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( 'k' ) ]: openLinkControl,
						[ rawShortcut.primaryShift( 'k' ) ]: unlinkButton,
					} }
				/>
			) }
			{ linkControl }
		</Fragment>
	);
}
/**
 * Block edit function
 */

function ButtonEdit( props ) {
	const {
		attributes,
		backgroundColor,
		textColor,
		setAttributes,
		className,
		instanceId,
		isSelected,
		onReplace,
		mergeBlocks,
	} = props;

	const {
		text,
		url,
		title,
		linkTarget,
		rel,
		size,
		borderRadius,
		borderWidth,
		uppercase,
	} = attributes;

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

	const borderWidthOptions = [
		{ value: 'border-width-thin', label: __('thin', 'ainoblocks') },
		{ value: 'border-width-medium', label: __('medium', 'ainoblocks') },
		{ value: 'border-width-thick', label: __('thick', 'ainoblocks') }
	];

	const linkId = `wp-block-ainoblocks-button__inline-link-${instanceId}`;

	return (
		<Fragment>
		<div className={className} title={title}>
			<RichText
				placeholder={__('Add text…', 'ainoblocks')}
				value={text}
				onChange={(value) => setAttributes({ text: value })}
				className={ classnames(
					className,
					'wp-block-ainoblocks-button__link',
				) }
				onSplit={ ( value ) =>
					createBlock( 'core/button', {
						...attributes,
						text: value,
					} )
				}
				onReplace={ onReplace }
				onMerge={ mergeBlocks }
				identifier="text"
			/>
		</div >
		<URLPicker
				url={ url }
				setAttributes={ setAttributes }
				isSelected={ isSelected }
				opensInNewTab={ linkTarget === '_blank' }
				onToggleOpenInNewTab={ onToggleOpenInNewTab }
			/>
		<InspectorControls>
			<PanelBody title={__('Button Settings', 'ainoblocks')}>
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
			<PanelBody
				title={__('Link Settings', 'ainoblocks')}
				initialOpen={false}
			>
				<ToggleControl
					label={__('Open in New Tab', 'ainoblocks')}
					onChange={onToggleOpenInNewTab}
					checked={linkTarget === '_blank'}
				/>
				<TextControl
					label={__('Link Rel', 'ainoblocks')}
					value={rel || ''}
					onChange={onSetLinkRel}
				/>
			</PanelBody>
		</InspectorControls>
		</Fragment>
	);
}

export default ButtonEdit;