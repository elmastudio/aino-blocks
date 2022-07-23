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
		align,
		items,
		flexDirection,
		fullWidth,
	} = attributes;

	const buttonsClasses = classnames(classnames, flexDirection, {});

	const blockProps = useBlockProps.save( {
		className: buttonsClasses,
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}
