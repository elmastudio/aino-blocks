/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {InnerBlocks, useBlockProps,} = wp.blockEditor;

export default function save( { attributes } ) {

	const {
		flexOrder,
		flexGrow,
		flexBasis,
		alignSelfDesktop,
		alignSelfTablet,
		alignSelfMobile
	} = attributes;

	const flexItemClasses = classnames(
		classnames,
		alignSelfDesktop,
		alignSelfTablet,
		alignSelfMobile,
		{
	});

	const flexItemStyles = {
		order: flexOrder ? flexOrder : undefined,
		flexGrow: flexGrow ? flexGrow : undefined,
		flexBasis: flexBasis ? flexBasis + 'px' : undefined,
	};

	const blockProps = useBlockProps.save( {
		className: flexItemClasses,
		style: flexItemStyles,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div >
	);
}
