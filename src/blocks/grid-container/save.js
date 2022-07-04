/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const {
	useBlockProps,
	useInnerBlocksProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		columnGap,
	} = attributes;

	const gridClasses = classnames(
		classnames,
		'ab-grid-block',
		columnGap,
	);

	const blockProps = useBlockProps.save( { className: gridClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}
