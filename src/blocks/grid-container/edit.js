/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Fragment
} = wp.element;
const {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
} = wp.components;

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['ainoblocks/grid-item'];

/**
 * Returns the layouts configuration for a given number of items.
 *
 * @param {number} count Number of feature items.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getCount = memoize((count) => {
	return times(count, () => ['ainoblocks/grid-item']);
});

/**
 * Block edit function
 */

export default function GridContainerEdit( { attributes, setAttributes, className } ) {

		const {
			align,
			items,
			columnGap,
		} = attributes;

		const columnGapOptions = [
			{ value: "col-gap-none", label: __('none', 'ainoblocks') },
			{ value: "col-gap-s", label  : __('S', 'ainoblocks') },
			{ value: "col-gap-m", label  : __('M', 'ainoblocks') },
			{ value: "col-gap-l", label  : __('L', 'ainoblocks') },
			{ value: "col-gap-xl", label  : __('XL', 'ainoblocks') }
		];

		const gridClasses = classnames(
			className,
			'ab-grid-block',
			`align${align}`,
			columnGap,
		);
	
		const blockProps = useBlockProps( { className: gridClasses } );
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			template: getCount(items),
			templateLock: false,
			templateInsertUpdatesSelection: true,
		} );

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Gap', 'ainoblocks')}
					>
					<SelectControl
						label={__("Column Gap", "ainoblocks")}
						value={columnGap}
						options={columnGapOptions}
						onChange={columnGap => setAttributes({ columnGap })}
					/>
					</PanelBody>
				</InspectorControls>
				<div { ...innerBlocksProps } />
			</Fragment>
	);
}
