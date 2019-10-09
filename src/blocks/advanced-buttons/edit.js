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
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['ainoblocks/advanced-button'];

/**
 * Returns the layouts configuration for a given number of items.
 *
 * @param {number} count Number of feature items.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getCount = memoize((count) => {
	return times(count, () => ['ainoblocks/advanced-button']);
});

/**
 * Block edit function
 */
class AdvancedButtonsEdit extends Component {

	render() {
		const {
			attributes,
			className,
			isSelected,
			setAttributes,
		} = this.props;

		const {
			align,
			items,
		} = attributes;

		const classNames = classnames(className, `align${align}`, {
		});

		const classes = classnames(
			'wp-block-ainoblocks-advanced-buttons__inner', {

		}
		);

		return (
			<Fragment>
				{isSelected && (
					<Inspector
						{...this.props}
					/>
				)}

				<div className={classNames}>
					<div className={classes}>
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							template={getCount(items)}
							templateLock="all"
							templateInsertUpdatesSelection={false}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AdvancedButtonsEdit;
