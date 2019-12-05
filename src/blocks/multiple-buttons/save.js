/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { InnerBlocks } = wp.blockEditor;

export default function save({ attributes, className }) {
	const {
		align,
		items,
	} = attributes;

	const innerClasses = classnames(
		'wp-block-ainoblocks-multiple-buttons__inner', {
		'has-margins': items > 1,
	}
	);

	return (
		<div className={className}>
			<div className={innerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
