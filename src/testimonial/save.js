/**
 * External dependencies
 */
import classnames from 'classnames';

import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		style,
	} = attributes;

	const testimonialClasses = classnames(classnames, style, {});

	const blockProps = useBlockProps.save( {
		className: testimonialClasses,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
