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
	} = attributes;

	const cardClasses = classnames(classnames, shadowName, {
		[`pt__${paddingTop}`]   : paddingTop,
		[`pb__${paddingBottom}`]: paddingBottom,
		[`pl__${paddingLeft}`]  : paddingLeft,
		[`pr__${paddingRight}`] : paddingRight,
	});

	const blockProps = useBlockProps.save( {
		className: cardClasses,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div >
	);
}
