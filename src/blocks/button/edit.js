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
class buttonEdit extends Component {

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
			label,
			url,
			link,
			target,
			size,
			borderRadius,
			borderWidth,
			uppercase,
			opensInNewTab,
			backgroundColor,
			textColor,
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

		const styles = {
			backgroundColor: backgroundColor,
			color: textColor,
			borderRadius: borderRadius ? borderRadius + 'px' : undefined,
			borderWidth: borderWidth ? borderWidth + 'px' : undefined,
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
							max={100}
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
						]}
					>
					</PanelColorSettings>
				</InspectorControls>
					<div className={classnames(className)}>
					<RichText
						placeholder={ __( "Add text…", 'ainoblocks' ) }
						value={ label }
						tagName='div'
						className={ classnames(
							'wp-block-ainoblocks-button__link', size, borderRadius, {
								'has-custom-background': backgroundColor,
								'has-custom-text-color': textColor,
								'is-uppercase': uppercase,
								'no-border-radius': borderRadius === 0,
								'no-border': borderWidth === 0,
								}
						) }
						style={styles}
						onChange={ value => {
							setAttributes( { label: value })
						} }
						formattingControls={ [ 'bold', 'italic' ] }
						rel ="noopener noreferrer"
						keepPlaceholderOnFocus
					/>
				</div>
			</Fragment>
		);
	}
}

export default buttonEdit;
