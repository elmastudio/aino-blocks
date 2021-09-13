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
		backgroundColor,
		borderRadius,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		borderTopWidth,
		borderRightWidth,
		borderBottomWidth,
		borderLeftWidth,
		borderWidth,
	} = attributes;

	const cardClasses = classnames(classnames, shadowName, {
		[`pt__${paddingTop}`]   : paddingTop,
		[`pb__${paddingBottom}`]: paddingBottom,
		[`pl__${paddingLeft}`]  : paddingLeft,
		[`pr__${paddingRight}`] : paddingRight,
	});

	const blockProps = useBlockProps.save( {
		className: cardClasses,
		style: {
			borderRadius: borderRadius ? borderRadius + 'px' : undefined,
			borderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,
			borderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,
			borderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,
			borderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined,
		},
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div >
	);
}
