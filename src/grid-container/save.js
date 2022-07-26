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
