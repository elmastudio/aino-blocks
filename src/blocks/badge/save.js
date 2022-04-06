/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Path,
	SVG,
} = wp.components;
const {
	RichText,
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		content,
		size,
	} = attributes;

	const badgeClasses = classnames(classnames, size, {
	});

	const blockProps = useBlockProps.save( {
		className: badgeClasses,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName='span'
				value={content}
			/>
		</div>
	);
}
