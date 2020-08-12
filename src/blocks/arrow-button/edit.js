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
	PanelBody,
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
class arrowButtonEdit extends Component {

	constructor() {
		super( ...arguments )
		this.onClickLinkSettings = this.onClickLinkSettings.bind(this)
		this.onChangeOpensInNewTab = this.onChangeOpensInNewTab.bind(this)
		this.state = {
			isURLPickerOpen:false,
		}
	}

	onClickLinkSettings () {
		
		const { attributes, setAttributes } = this.props
		const { target } = attributes 
		if ( "_self" === target ) {
			setAttributes( { opensInNewTab: false } )
		} else if ( "_blank" === target ) {
			setAttributes( { opensInNewTab: true } )
		}

		this.setState( {
			isURLPickerOpen: true
		})
	}

	onChangeOpensInNewTab ( value ) {
		if ( true === value ) {
			this.props.setAttributes( { target: '_blank' } )
		} else {
			this.props.setAttributes( { target: '_self' } )
		}
	}

	render() {

		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		const {
			url,
			label,
			link,
			target,
			size,
			uppercase,
			iconPositionAfter,
			iconRotation,
			opensInNewTab,
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

		const urlIsSet = !! url;
		const urlIsSetandSelected = urlIsSet && isSelected;

		const linkControl = this.state.isURLPickerOpen && (

			<Popover
				position="bottom center"
				onClose={ () => this.setState( {
					isURLPickerOpen: false
				}) }
			>
				<__experimentalLinkControl
					className="wp-block-navigation-link__inline-link-input"
					value={ { url:link, opensInNewTab:opensInNewTab } }
					onChange={( {
					url: newURL = '',
					opensInNewTab: newOpensInNewTab,
					} ) => {
						setAttributes( { link: newURL } );
						setAttributes( { opensInNewTab: newOpensInNewTab } );
						this.onChangeOpensInNewTab( newOpensInNewTab );
					} }
				/>
			</Popover>
		);

		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							name="link"
							icon={<BlockIcon icon={icons.link} />}
							title={ __( 'Link', 'ainoblocks' ) }
							onClick={ this.onClickLinkSettings }
						/>
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
				<div className={classnames(
						'wp-block-ainoblocks-arrow-button', size,
					)}
				>
					{ ! iconPositionAfter && (
						<span className={iconClasses} style={iconStyles}>
							<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
								<Path d="M4 0h28v28h-4l-0.004-21.172-25.168 25.172-2.828-2.828 25.168-25.172h-21.168z"></Path>
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
							value={label}
							placeholder={ __( "Add text…", 'ainoblocks' ) }
							tagName='span'
							multiline= 'false'
							onChange={ value => {
								setAttributes( { label: value })
							} }
							keepPlaceholderOnFocus
						/>
					</div>
					{ iconPositionAfter && (
						<span className={iconClasses} style={iconStyles}>
							<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
								<Path d="M4 0h28v28h-4l-0.004-21.172-25.168 25.172-2.828-2.828 25.168-25.172h-21.168z"></Path>
							</SVG>
						</span>
					) }
				</div>
			</Fragment>
		);
	}
}

export default compose([
])(arrowButtonEdit);
