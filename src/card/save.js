/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		borderTopWidth,
		borderRightWidth,
		borderBottomWidth,
		borderLeftWidth,
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
