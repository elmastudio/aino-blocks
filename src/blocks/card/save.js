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
		backgroundColor,
		borderColor,
		backgroundRadius,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const classes = classnames(classnames, shadowName, {
		'has-background'        : backgroundColor,
		'has-border'            : borderColor,
		[`pt__${paddingTop}`]   : paddingTop,
		[`pb__${paddingBottom}`]: paddingBottom,
		[`pl__${paddingLeft}`]  : paddingLeft,
		[`pr__${paddingRight}`] : paddingRight,
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
