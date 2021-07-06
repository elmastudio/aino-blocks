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
		items,
	} = attributes;

	const innerClasses = classnames(
		'wp-block-ainoblocks-grid-container__inner', {}
	);

	const gridContainerClasses = classnames(classnames);

	const blockProps = useBlockProps.save( {
		className: gridContainerClasses,
	} );

	return (
		<div { ...blockProps }>
			<div className={innerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
