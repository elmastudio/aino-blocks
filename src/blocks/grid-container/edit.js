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
const {
	Component,
	Fragment
} = wp.element;
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

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
		} = attributes;

		const gridContainerClasses = classnames(className, `align${align}`,
		);
	
		const blockProps = useBlockProps( {
			className: gridContainerClasses,
		} );

		return (
			<Fragment>
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
