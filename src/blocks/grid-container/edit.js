/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
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

export default function GridContainerEdit( { attributes, setAttributes, className, isSelected } ) {

		const {
			align,
			items,
			columnGap,
		} = attributes;

		const columnGapOptions = [
			{ value: "col-gap-none", label: __('none', 'ainoblocks') },
			{ value: "col-gap-s", label  : __('small', 'ainoblocks') },
			{ value: "col-gap-m", label  : __('medium', 'ainoblocks') },
			{ value: "col-gap-l", label  : __('large', 'ainoblocks') }
		];

		const gridClasses = classnames(
			className,
			`align${align}`,
			columnGap,
		);
	
		const blockProps = useBlockProps( {
			className: gridClasses,
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
				<div { ...blockProps }>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={getCount(items)}
						templateLock={ false }
						templateInsertUpdatesSelection={true}
					/>
				</div>
		</Fragment>
	);
}
