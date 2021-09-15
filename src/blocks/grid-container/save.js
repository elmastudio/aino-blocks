/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes, className }) {

	const {
		align,
		items,
		columnGap,
	} = attributes;

	const innerClasses = classnames(
		'wp-block-ainoblocks-grid-container__inner', {}
	);

	const gridClasses = classnames(
		classnames,
		columnGap,
	);

	const blockProps = useBlockProps.save( {
		className: gridClasses,
	} );

	return (
		<div { ...blockProps }>
			<div className={innerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
