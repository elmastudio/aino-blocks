/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
} = wp.components;

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
export default function MultipleButtonsEdit( { attributes, setAttributes, className, isSelected } ) {

	const {
		align,
		items,
		flexDirection,
		fullWidth,
	} = attributes;

	const flexDirectionOptions = [
		{ value: "direction__row", label   : __('row', 'ainoblocks') },
		{ value: "direction__rowrev", label: __('row-reverse', 'ainoblocks') },
		{ value: "direction__col", label   : __('column', 'ainoblocks') },
		{ value: "direction__colrev", label: __('column-reverse', 'ainoblocks') }
	];

	const buttonsClasses = classnames(className, flexDirection, `align${align}`, {});

	const innerClasses = classnames(
		'wp-block-ainoblocks-multiple-buttons__inner', {
			'stretch': fullWidth ? fullWidth : undefined,
		}
	);

	const blockProps = useBlockProps( {
		className: buttonsClasses,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Buttons settings', 'ainoblocks')}>
					<SelectControl
						label={__("Flex Direction", "ainoblocks")}
						value={flexDirection}
						options={flexDirectionOptions}
						onChange={flexDirection => setAttributes({ flexDirection })}
					/>
					<ToggleControl
						label={__('Inner buttons 100% width', 'ainoblocks')}
						checked={!!fullWidth}
						onChange={() => setAttributes({ fullWidth: !fullWidth })}
						help={!!fullWidth ? __('Inner buttons are 100% width.', 'ainoblocks') : __('Toggle for inner buttons with 100% width.', 'ainoblocks')}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={innerClasses}>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={getCount(items)}
						templateLock={ false }
						templateInsertUpdatesSelection={false}
					/>
				</div>
			</div>
		</Fragment>
	);
}
