/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		align,
		flexDirection,
		fullWidth,
	} = attributes;

	const buttonsClasses = classnames(classnames, flexDirection,`align${align}`, {
		'stretch': fullWidth ? fullWidth : undefined,
	});

	const blockProps = useBlockProps.save( {
		className: buttonsClasses,
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}
