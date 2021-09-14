/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

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

	const blockProps = useBlockProps.save( {
		className: flexboxClasses,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div >
	);
}
