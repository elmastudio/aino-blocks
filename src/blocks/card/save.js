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
		containerWidth,
		backgroundColor,
		borderColor,
		backgroundRadius,
		shadowName,
		padding,
	} = attributes;

	const classes = classnames(shadowName, {
		[`align${containerWidth}`]: containerWidth,
		'has-background': backgroundColor,
		'has-border': borderColor,
		'has-padding': padding,
	});

	return (
		<div
			className={classes}
			style={{
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderRadius: backgroundRadius,
			}}>
			<InnerBlocks.Content />
		</div >
	);
}
