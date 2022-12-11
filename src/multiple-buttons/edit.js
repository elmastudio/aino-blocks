/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TabPanel,
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
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
 * Constants
 */
const ALLOWED_BLOCKS = ['ainoblocks/button'];

/**
 * Returns the layouts configuration for a given number of items.
 *
 * @param {number} count Number of feature items.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getCount = memoize((count) => {
	return times(count, () => ['ainoblocks/button']);
});

/**
 * Block edit function
 */
export default function MultipleButtonsEdit( { attributes, setAttributes, className, onSelect } ) {

	const {
		items,
		flexDirection,
		flexDirectionTablet,
		flexDirectionMobile,
		fullWidth,
		fullWidthTablet,
		fullWidthMobile,
		gapDesktop,
		gapTablet,
		gapMobile,
	} = attributes;

	const flexDirectionOptions = [
		{ value: "d__row", label   : __('row', 'ainoblocks') },
		{ value: "d__rowrev", label: __('row-reverse', 'ainoblocks') },
		{ value: "d__col", label   : __('column', 'ainoblocks') },
		{ value: "d__colrev", label: __('column-reverse', 'ainoblocks') }
	];

	const flexTabletOptions = [
		{ value: "t__row", label   : __('row', 'ainoblocks') },
		{ value: "t__rowrev", label: __('row-reverse', 'ainoblocks') },
		{ value: "t__col", label   : __('column', 'ainoblocks') },
		{ value: "t__colrev", label: __('column-reverse', 'ainoblocks') }
	];

	const flexMobileOptions = [
		{ value: "m__row", label   : __('row', 'ainoblocks') },
		{ value: "m__rowrev", label: __('row-reverse', 'ainoblocks') },
		{ value: "m__col", label   : __('column', 'ainoblocks') },
		{ value: "m__colrev", label: __('column-reverse', 'ainoblocks') }
	];

	const buttonsClasses = classnames(className, flexDirectionMobile, flexDirectionTablet, flexDirection, {
		'm__stretch': fullWidthMobile ? fullWidthMobile : undefined,
		't__stretch': fullWidthTablet ? fullWidthTablet : undefined,
		'd__stretch': fullWidth ? fullWidth : undefined,
		'm__gap': gapMobile ? gapMobile : undefined,
		't__gap': gapTablet ? gapTablet : undefined,
		'd__gap': gapDesktop ? gapDesktop : undefined,
	});

	const blockProps = useBlockProps( { className: buttonsClasses } );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: getCount(items),
		templateLock: false,
		templateInsertUpdatesSelection: true,
	} );

	return (
		<Fragment>
			<InspectorControls>
			<PanelBody title={__('Buttons settings', 'ainoblocks')}>
			<TabPanel className="aino-device-panel"
							activeClass="is-active"
							initialTabName="desktop"
							onSelect={ onSelect }
							tabs={ [
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
							] }>
							{
								( tab ) => {
									switch ( tab.name ) {
										case 'desktop':
											return (
												<Fragment>
													<SelectControl
														label={__("Flex Direction", "ainoblocks")}
														value={flexDirection}
														options={flexDirectionOptions}
														onChange={flexDirection => setAttributes({ flexDirection })}
													/>
													<ToggleControl
														label={__('Buttons stretch to container width', 'ainoblocks')}
														checked={!!fullWidth}
														onChange={() => setAttributes({ fullWidth: !fullWidth })}
														help={!!fullWidth ? __('Buttons stretch to width of container.', 'ainoblocks') : __('Toggle to stretch buttons to width of their outer container.', 'ainoblocks')}
													/>
													<ToggleControl
														label={__('Flexbox gap', 'ainoblocks')}
														checked={!!gapDesktop}
														onChange={() => setAttributes({ gapDesktop: !gapDesktop })}
														help={!!gapDesktop ? __('Gap added.', 'ainoblocks') : __('Toggle to add a gap between buttons.', 'ainoblocks')}
													/>
												</Fragment>
											);
										case 'tablet':
											return [
												<Fragment>
													<SelectControl
														label={__("Flex Direction", "ainoblocks")}
														value={flexDirectionTablet}
														options={flexTabletOptions}
														onChange={flexDirectionTablet => setAttributes({ flexDirectionTablet })}
													/>
													<ToggleControl
														label={__('Buttons stretch to container width', 'ainoblocks')}
														checked={!!fullWidthTablet}
														onChange={() => setAttributes({ fullWidthTablet: !fullWidthTablet })}
														help={!!fullWidthTablet ? __('Buttons stretch to width of container.', 'ainoblocks') : __('Toggle to stretch buttons to width of their outer container.', 'ainoblocks')}
													/>
													<ToggleControl
														label={__('Flexbox gap', 'ainoblocks')}
														checked={!!gapTablet}
														onChange={() => setAttributes({ gapTablet: !gapTablet })}
														help={!!gapTablet ? __('Gap added.', 'ainoblocks') : __('Toggle to add a gap between buttons.', 'ainoblocks')}
													/>
												</Fragment>
											];
										
										case 'mobile':
											return [
												<Fragment>
													<SelectControl
														label={__("Flex Direction", "ainoblocks")}
														value={flexDirectionMobile}
														options={flexMobileOptions}
														onChange={flexDirectionMobile => setAttributes({ flexDirectionMobile })}
													/>
													<ToggleControl
														label={__('Buttons stretch to container width', 'ainoblocks')}
														checked={!!fullWidthMobile}
														onChange={() => setAttributes({ fullWidthMobile: !fullWidthMobile })}
														help={!!fullWidthMobile ? __('Buttons stretch to width of container.', 'ainoblocks') : __('Toggle to stretch buttons to width of their outer container.', 'ainoblocks')}
													/>
													<ToggleControl
														label={__('Flexbox gap', 'ainoblocks')}
														checked={!!gapMobile}
														onChange={() => setAttributes({ gapMobile: !gapMobile })}
														help={!!gapMobile ? __('Gap added.', 'ainoblocks') : __('Toggle to add a gap between buttons.', 'ainoblocks')}
													/>
												</Fragment>
											];
									}
								}
							}
						</TabPanel>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</Fragment>
	);
}
