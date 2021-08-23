/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes, className }) {

	const {
		align,
		items,
		flexDirection,
	} = attributes;

	const innerClasses = classnames(
			'wp-block-ainoblocks-multiple-buttons__inner', {
			'has-margins': items > 1,
		}
	);

	const buttonsClasses = classnames(classnames, flexDirection, {});

	const blockProps = useBlockProps.save( {
		className: buttonsClasses,
	} );

	return (
		<div { ...blockProps }>
			<div className={innerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
