/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	__experimentalUseCustomUnits,
	__experimentalUnitControl,
} from '@wordpress/components';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useSetting,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 */
import './editor.scss';

/**
 * Block edit function
 */
export default function flexboxEdit( { attributes, setAttributes, className, onSelect } ) {

	const {
		flexOrder,
		flexGrow,
		flexShrink,
		flexBasis,
		alignSelfDesktop,
		alignSelfTablet,
		alignSelfMobile
	} = attributes;

	const units = __experimentalUseCustomUnits( {
		availableUnits: useSetting( 'spacing.units' ) || [
			'%',
			'px',
			'em',
			'rem',
			'vw',
		],
	} );

	const flexBasisWithUnit = Number.isFinite( flexBasis ) ? flexBasis + '%' : flexBasis;

	const alignSelfDesktopOptions = [
		{ value: "align__auto__d", label     : __('auto', 'ainoblocks') },
		{ value: "align__flexstart__d", label: __('flex-start', 'ainoblocks') },
		{ value: "align__ flexend__d", label : __(' flex-end', 'ainoblocks') },
		{ value: "align__center__d", label   : __('center', 'ainoblocks') },
		{ value: "align__baseline__d", label : __('baseline', 'ainoblocks') },
		{ value: "align__stretch__d", label  : __('stretch', 'ainoblocks') }
	];

	const alignSelfTabletOptions = [
		{ value: "align__auto__t", label     : __('auto', 'ainoblocks') },
		{ value: "align__flexstart__t", label: __('flex-start', 'ainoblocks') },
		{ value: "align__ flexend__t", label : __(' flex-end', 'ainoblocks') },
		{ value: "align__center__t", label   : __('center', 'ainoblocks') },
		{ value: "align__baseline__t", label : __('baseline', 'ainoblocks') },
		{ value: "align__stretch__t", label  : __('stretch', 'ainoblocks') }
	];

	const alignSelfMobileOptions = [
		{ value: "align__auto__m", label     : __('auto', 'ainoblocks') },
		{ value: "align__flexstart__m", label: __('flex-start', 'ainoblocks') },
		{ value: "align__ flexend__m", label : __(' flex-end', 'ainoblocks') },
		{ value: "align__center__m", label   : __('center', 'ainoblocks') },
		{ value: "align__baseline__m", label : __('baseline', 'ainoblocks') },
		{ value: "align__stretch__m", label  : __('stretch', 'ainoblocks') }
	];

	const flexItemClasses = classnames(
		className,
		alignSelfDesktop,
		alignSelfTablet,
		alignSelfMobile,
		{
	});

	const flexItemStyles = {
		order: flexOrder ? flexOrder : undefined,
		flexGrow: flexGrow ? flexGrow : undefined,
		flexBasis: flexBasisWithUnit ? flexBasisWithUnit : undefined,
		flexShrink: flexShrink ? "0" : undefined,
	};

	const blockProps = useBlockProps( {
		className: flexItemClasses,
		style: flexItemStyles,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Flex Item settings', 'ainoblocks')}>
					<RangeControl
						label={__('Flex order', 'ainoblocks')}
						value={flexOrder}
						onChange={(flexOrder) => setAttributes({ flexOrder })}
						min={0}
						max={100}
						allowReset={true}
						initialPosition={0}
					/>
					<RangeControl
						label={__('Flex grow', 'ainoblocks')}
						value={flexGrow}
						onChange={(flexGrow) => setAttributes({ flexGrow })}
						min={0}
						max={100}
						allowReset={true}
						initialPosition={0}
					/>
					<__experimentalUnitControl
						label={ __( 'Flex basis' ) }
						labelPosition="edge"
						__unstableInputWidth="80px"
						value={ flexBasis || '' }
						onChange={(flexBasis) => setAttributes({ flexBasis })}
						units={ units }
					/>
					<ToggleControl
						label={__('Flex Shrink', 'ainoblocks')}
						checked={!!flexShrink}
						onChange={() => setAttributes({ flexShrink: !flexShrink })}
						help={!!flexShrink ? __('Icon is set to zero.', 'ainoblocks') : __('Toggle to set flex shrink to zero.', 'ainoblocks')}
					/>
				</PanelBody>
				<PanelBody title={__('Item Alignment', 'ainoblocks')}>
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
												label={__("Align Self", "ainoblocks")}
												value={alignSelfDesktop}
												options={alignSelfDesktopOptions}
												onChange={alignSelfDesktop => setAttributes({ alignSelfDesktop })}
											/>
										</Fragment>
									);
								case 'tablet':
									return [
										<Fragment>
											<SelectControl
												label={__("Align Self", "ainoblocks")}
												value={alignSelfTablet}
												options={alignSelfTabletOptions}
												onChange={alignSelfTablet => setAttributes({ alignSelfTablet })}
											/>
										</Fragment>
									];
								case 'mobile':
									return [
										<Fragment>
											<SelectControl
												label={__("Align Self", "ainoblocks")}
												value={alignSelfMobile}
												options={alignSelfMobileOptions}
												onChange={alignSelfMobile => setAttributes({ alignSelfMobile })}
											/>
										</Fragment>
									];
								}
							}
					}
					</TabPanel>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}