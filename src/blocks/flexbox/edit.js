/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	TabPanel,
} = wp.components;

/**
 * Block edit function
 */
export default function flexboxEdit( { attributes, setAttributes, className, onSelect } ) {

	const {
		align,
		flexDirectionDesktop,
		flexDirectionTablet,
		flexDirectionMobile,
		flexWrapDesktop,
		flexWrapTablet,
		flexWrapMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		shadowName,
		position,
	} = attributes;

	const flexDirectionDesktopOptions = [
		{ value: "direction__row__d", label   : __('row', 'ainoblocks') },
		{ value: "direction__rowrev__d", label: __('row-reverse', 'ainoblocks') },
		{ value: "direction__col__d", label   : __('column', 'ainoblocks') },
		{ value: "direction__colrev__d", label: __('column-reverse', 'ainoblocks') }
	];

	const flexDirectionTabletOptions = [
		{ value: "direction__row__t", label   : __('row', 'ainoblocks') },
		{ value: "direction__rowrev__t", label: __('row-reverse', 'ainoblocks') },
		{ value: "direction__col__t", label   : __('column', 'ainoblocks') },
		{ value: "direction__colrev__t", label: __('column-reverse', 'ainoblocks') }
	];

	const flexDirectionMobileOptions = [
		{ value: "direction__row__m", label   : __('row', 'ainoblocks') },
		{ value: "direction__rowrev__m", label: __('row-reverse', 'ainoblocks') },
		{ value: "direction__col__m", label   : __('column', 'ainoblocks') },
		{ value: "direction__colrev__m", label: __('column-reverse', 'ainoblocks') }
	];

	const flexWrapDesktopOptions = [
		{ value: "nowrap__d", label : __('nowrap', 'ainoblocks') },
		{ value: "wrap__d", label   : __('wrap', 'ainoblocks') },
		{ value: "wraprev__d", label: __('wrap-reverse', 'ainoblocks') }
	];

	const flexWrapTabletOptions = [
		{ value: "nowrap__t", label : __('nowrap', 'ainoblocks') },
		{ value: "wrap__t", label   : __('wrap', 'ainoblocks') },
		{ value: "wraprev__t", label: __('wrap-reverse', 'ainoblocks') }
	];

	const flexWrapMobileOptions = [
		{ value: "nowrap__m", label : __('nowrap', 'ainoblocks') },
		{ value: "wrap__m", label   : __('wrap', 'ainoblocks') },
		{ value: "wraprev__m", label: __('wrap-reverse', 'ainoblocks') }
	];

	const justifyContentDesktopOptions = [
		{ value: "justify__flexstart__d", label: __('flex-start', 'ainoblocks') },
		{ value: "justify__flexend__d", label  : __('flex-end', 'ainoblocks') },
		{ value: "justify__center__d", label   : __('center', 'ainoblocks') },
		{ value: "justify__between__d", label  : __('space-between', 'ainoblocks') },
		{ value: "justify__around__d", label   : __('space-around', 'ainoblocks') },
		{ value: "justify__evenly__d", label   : __('space-evenly', 'ainoblocks') }
	];

	const justifyContentTabletOptions = [
		{ value: "justify__flexstart__t", label: __('flex-start', 'ainoblocks') },
		{ value: "justify__flexend__t", label  : __('flex-end', 'ainoblocks') },
		{ value: "justify__center__t", label   : __('center', 'ainoblocks') },
		{ value: "justify__between__t", label  : __('space-between', 'ainoblocks') },
		{ value: "justify__around__t", label   : __('space-around', 'ainoblocks') },
		{ value: "justify__evenly__t", label   : __('space-evenly', 'ainoblocks') }
	];

	const justifyContentMobileOptions = [
		{ value: "justify__flexstart__m", label: __('flex-start', 'ainoblocks') },
		{ value: "justify__flexend__m", label  : __('flex-end', 'ainoblocks') },
		{ value: "justify__center__m", label   : __('center', 'ainoblocks') },
		{ value: "justify__between__m", label  : __('space-between', 'ainoblocks') },
		{ value: "justify__around__m", label   : __('space-around', 'ainoblocks') },
		{ value: "justify__evenly__m", label   : __('space-evenly', 'ainoblocks') }
	];

	const alignItemsDesktopOptions = [
		{ value: "align-items__stretch__d", label  : __('stretch', 'ainoblocks') },
		{ value: "align-items__flexstart__d", label: __('flex-start', 'ainoblocks') },
		{ value: "align-items__flexend__d", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-items__center__d", label   : __('center', 'ainoblocks') },
		{ value: "align-items__baseline__d", label : __('baseline', 'ainoblocks') }
	];

	const alignItemsTabletOptions = [
		{ value: "align-items__stretch__t", label  : __('stretch', 'ainoblocks') },
		{ value: "align-items__flexstart__t", label: __('flex-start', 'ainoblocks') },
		{ value: "align-items__flexend__t", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-items__center__t", label   : __('center', 'ainoblocks') },
		{ value: "align-items__baseline__t", label : __('baseline', 'ainoblocks') }
	];

	const alignItemsMobileOptions = [
		{ value: "align-items__stretch__m", label  : __('stretch', 'ainoblocks') },
		{ value: "align-items__flexstart__m", label: __('flex-start', 'ainoblocks') },
		{ value: "align-items__flexend__m", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-items__center__m", label   : __('center', 'ainoblocks') },
		{ value: "align-items__baseline__m", label : __('baseline', 'ainoblocks') }
	];

	const alignContentDesktopOptions = [
		{ value: "align-cont__stretch__d", label  : __('stretch', 'ainoblocks') },
		{ value: "align-cont__flexstart__d", label: __('flex-start', 'ainoblocks') },
		{ value: "align-cont__flexend__d", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-cont__center__d", label   : __('center', 'ainoblocks') },
		{ value: "align-cont__between__d", label  : __('space-between', 'ainoblocks') },
		{ value: "align-cont__around__d", label   : __('space-around', 'ainoblocks') },
		{ value: "align-cont__evenly__d", label   : __('space-evenly', 'ainoblocks') }
	];

	const alignContentTabletOptions = [
		{ value: "align-cont__stretch__t", label  : __('stretch', 'ainoblocks') },
		{ value: "align-cont__flexstart__t", label: __('flex-start', 'ainoblocks') },
		{ value: "align-cont__flexend__t", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-cont__center__t", label   : __('center', 'ainoblocks') },
		{ value: "align-cont__between__t", label  : __('space-between', 'ainoblocks') },
		{ value: "align-cont__around__t", label   : __('space-around', 'ainoblocks') },
		{ value: "align-cont__evenly__t", label   : __('space-evenly', 'ainoblocks') }
	];

	const alignContentMobileOptions = [
		{ value: "align-cont__stretch__m", label  : __('stretch', 'ainoblocks') },
		{ value: "align-cont__flexstart__m", label: __('flex-start', 'ainoblocks') },
		{ value: "align-cont__flexend__m", label  : __('flex-end', 'ainoblocks') },
		{ value: "align-cont__center__m", label   : __('center', 'ainoblocks') },
		{ value: "align-cont__between__m", label  : __('space-between', 'ainoblocks') },
		{ value: "align-cont__around__m", label   : __('space-around', 'ainoblocks') },
		{ value: "align-cont__evenly__m", label   : __('space-evenly', 'ainoblocks') }
	];

	const shadowNameOptions = [
		{ value: "shadow-none", label: __('none', 'ainoblocks') },
		{ value: "shadow-a", label   : __('small', 'ainoblocks') },
		{ value: "shadow-b", label   : __('large', 'ainoblocks') }
	];

	const positionOptions = [
		{ value: "pos-none", label: __('none', 'ainoblocks') },
		{ value: "pos-tl", label  : __('top left', 'ainoblocks') },
		{ value: "pos-tr", label  : __('top right', 'ainoblocks') },
		{ value: "pos-bl", label  : __('bottom left', 'ainoblocks') },
		{ value: "pos-br", label  : __('bottom right', 'ainoblocks') }
	];

	const flexboxClasses = classnames(
		className,
		flexDirectionDesktop,
		flexDirectionTablet,
		flexDirectionMobile,
		flexWrapDesktop,
		flexWrapTablet,
		flexWrapMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		shadowName,
		align,
		position, {
	});

	const blockProps = useBlockProps( {
		className: flexboxClasses,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody 
					title={__('Flexbox settings', 'ainoblocks')}
					initialOpen={true}
				>
				<p><em>{ __( 'Use Preview for Desktop, Tablet and Mobile view.', 'ainoblocks' ) }</em></p>
				<TabPanel className="aino-device-panel"
					activeClass="is-active"
					initialTabName="desktop"
					onSelect={ onSelect }
					tabs={
						[
							{
								name: 'desktop',
								title: 'Desktop',
								className: 'device-d',
							},
							{
								name: 'tablet',
								title: 'Tablet',
								className: 'device-t',
							},
							{
								name: 'mobile',
								title: 'Mobile',
								className: 'device-m',
							},
						]
					}>
					{
						( tab ) => {
							switch ( tab.name ) {
								case 'desktop':
									return (
										<Fragment>
											<SelectControl
												label={__("Flex Direction", "ainoblocks")}
												value={flexDirectionDesktop}
												options={flexDirectionDesktopOptions}
												onChange={flexDirectionDesktop => setAttributes({ flexDirectionDesktop })}
											/>
											<SelectControl
												label={__("Flex Wrap", "ainoblocks")}
												value={flexWrapDesktop}
												options={flexWrapDesktopOptions}
												onChange={flexWrapDesktop => setAttributes({ flexWrapDesktop })}
											/>
											<SelectControl
												label={__("Justify Content", "ainoblocks")}
												value={justifyContentDesktop}
												options={justifyContentDesktopOptions}
												onChange={justifyContentDesktop => setAttributes({ justifyContentDesktop })}
											/>
											<SelectControl
												label={__("Align Items", "ainoblocks")}
												value={alignItemsDesktop}
												options={alignItemsDesktopOptions}
												onChange={alignItemsDesktop => setAttributes({ alignItemsDesktop })}
											/>
											<SelectControl
												label={__("Align Content", "ainoblocks")}
												value={alignContentDesktop}
												options={alignContentDesktopOptions}
												onChange={alignContentDesktop => setAttributes({ alignContentDesktop })}
											/>
										</Fragment>
									);
								case 'tablet':
									return [
										<Fragment>
											<SelectControl
												label={__("Flex Direction", "ainoblocks")}
												value={flexDirectionTablet}
												options={flexDirectionTabletOptions}
												onChange={flexDirectionTablet => setAttributes({ flexDirectionTablet })}
											/>
											<SelectControl
												label={__("Flex Wrap", "ainoblocks")}
												value={flexWrapTablet}
												options={flexWrapTabletOptions}
												onChange={flexWrapTablet => setAttributes({ flexWrapTablet })}
											/>
											<SelectControl
												label={__("Justify Content", "ainoblocks")}
												value={justifyContentTablet}
												options={justifyContentTabletOptions}
												onChange={justifyContentTablet => setAttributes({ justifyContentTablet })}
											/>
											<SelectControl
												label={__("Align Items", "ainoblocks")}
												value={alignItemsTablet}
												options={alignItemsTabletOptions}
												onChange={alignItemsTablet => setAttributes({ alignItemsTablet })}
											/>
											<SelectControl
												label={__("Align Content", "ainoblocks")}
												value={alignContentTablet}
												options={alignContentTabletOptions}
												onChange={alignContentTablet => setAttributes({ alignContentTablet })}
											/>
										</Fragment>
									];
								
								case 'mobile':
									return [
										<Fragment>
											<SelectControl
												label={__("Flex Direction", "ainoblocks")}
												value={flexDirectionMobile}
												options={flexDirectionMobileOptions}
												onChange={flexDirectionMobile => setAttributes({ flexDirectionMobile })}
											/>
											<SelectControl
												label={__("Flex Wrap", "ainoblocks")}
												value={flexWrapMobile}
												options={flexWrapMobileOptions}
												onChange={flexWrapMobile => setAttributes({ flexWrapMobile })}
											/>
											<SelectControl
												label={__("Justify Content", "ainoblocks")}
												value={justifyContentMobile}
												options={justifyContentMobileOptions}
												onChange={justifyContentMobile => setAttributes({ justifyContentMobile })}
											/>
											<SelectControl
												label={__("Align Items", "ainoblocks")}
												value={alignItemsMobile}
												options={alignItemsMobileOptions}
												onChange={alignItemsMobile => setAttributes({ alignItemsMobile })}
											/>
											<SelectControl
												label={__("Align Content", "ainoblocks")}
												value={alignContentMobile}
												options={alignContentMobileOptions}
												onChange={alignContentMobile => setAttributes({ alignContentMobile })}
											/>
										</Fragment>
									];
							}
						}
					}
					</TabPanel>
					</PanelBody>
					<PanelBody
						title={__('Positioning', 'ainoblocks')}
						initialOpen={false}
					>
					<SelectControl
						label={__("Absolute Positioning", "ainoblocks")}
						value={position}
						options={positionOptions}
						onChange={position => setAttributes({ position })}
					/>
					</PanelBody>
					<PanelBody
						title={__('Shadow', 'ainoblocks')}
						initialOpen={false}
					>
					<SelectControl
						label={__("Shadow", "ainoblocks")}
						value={shadowName}
						options={shadowNameOptions}
						onChange={shadowName => setAttributes({ shadowName })}
					/>
					</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}