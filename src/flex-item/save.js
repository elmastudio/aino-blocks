/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		flexOrder,
		flexGrow,
		flexShrink,
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

	const flexBasisWithUnit = Number.isFinite( flexBasis ) ? flexBasis + '%' : flexBasis;

	const flexItemStyles = {
		order: flexOrder ? flexOrder : undefined,
		flexGrow: flexGrow ? flexGrow : undefined,
		flexBasis: flexBasisWithUnit ? flexBasisWithUnit : undefined,
		flexShrink: flexShrink ? "0" : undefined,
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
