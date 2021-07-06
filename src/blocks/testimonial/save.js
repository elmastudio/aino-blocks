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
} = wp.editor;

export default function save( {} ) {

	const testimonialClasses = classnames(classnames, {});

	const blockProps = useBlockProps.save( {
		className: testimonialClasses,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
