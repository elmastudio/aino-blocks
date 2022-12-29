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
			rowGap,
		} = attributes;

		const columnGapOptions = [
			{ value: "col-gap-none", label: __('none', 'ainoblocks') },
			{ value: "col-gap-s", label   : __('S (16px)', 'ainoblocks') },
			{ value: "col-gap-m", label   : __('M (24px)', 'ainoblocks') },
			{ value: "col-gap-l", label   : __('L (32px)', 'ainoblocks') },
			{ value: "col-gap-xl", label  : __('XL (48px)', 'ainoblocks') },
			{ value: "col-gap-xxl", label : __('XXL (64px)', 'ainoblocks') }
		];

		const rowGapOptions = [
			{ value: "row-gap-none", label: __('none', 'ainoblocks') },
			{ value: "row-gap-s", label   : __('S (16px)', 'ainoblocks') },
			{ value: "row-gap-m", label   : __('M (24px)', 'ainoblocks') },
			{ value: "row-gap-l", label   : __('L (32px)', 'ainoblocks') },
			{ value: "row-gap-xl", label  : __('XL (48px)', 'ainoblocks') },
			{ value: "row-gap-xxl", label : __('XXL (64px)', 'ainoblocks') }
		];

		const gridClasses = classnames(
			className,
			'ab-grid-block',
			`align${align}`,
			columnGap,
			rowGap,
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
						title={__('Grid Gap', 'ainoblocks')}
					>
					<SelectControl
						label={__("Column Gap", "ainoblocks")}
						value={columnGap}
						options={columnGapOptions}
						onChange={columnGap => setAttributes({ columnGap })}
					/>
					<SelectControl
						label={__("Row Gap", "ainoblocks")}
						value={rowGap}
						options={rowGapOptions}
						onChange={rowGap => setAttributes({ rowGap })}
					/>
					</PanelBody>
				</InspectorControls>
				<div { ...innerBlocksProps } />
			</Fragment>
	);
}
