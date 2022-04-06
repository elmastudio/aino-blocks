/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

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
