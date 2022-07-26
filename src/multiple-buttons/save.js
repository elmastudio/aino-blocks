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
		flexDirection,
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
