/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		align,
		backgroundColor,
		borderColor,
		backgroundRadius,
		shadowName,
		padding,
	} = attributes;

	const cardClasses = classnames(classnames, shadowName, {
		'has-background': backgroundColor,
		'has-border': borderColor,
		'has-padding': padding,
	});

	return (
		<div
			className={cardClasses}
			style={{
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderRadius: backgroundRadius,
			}}>
			<InnerBlocks.Content />
		</div >
	);
}
