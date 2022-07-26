/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		align,
		flexDirectionDesktop,
		flexDirectionTablet,
		flexDirectionMobile,
		flexWrapDesktop,
		flexWrapTablet,
		flexWrapMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		shadowName,
		position,
	} = attributes;

	const flexboxClasses = classnames(
		classnames,
		flexDirectionDesktop,
		flexDirectionTablet,
		flexDirectionMobile,
		flexWrapDesktop,
		flexWrapTablet,
		flexWrapMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		shadowName,
		align,
		position, {
	});

	const blockProps = useBlockProps.save( { className: flexboxClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}