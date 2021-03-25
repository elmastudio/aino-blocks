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
	RichText,
} = wp.blockEditor;

export default function save({
	attributes
}) {

	const {
		align,
		backgroundColor,
		borderColor,
		borderRadius,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		borderTopWidth,
		borderRightWidth,
		borderBottomWidth,
		borderLeftWidth,
		borderWidth,
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
				borderRadius: borderRadius ? borderRadius + 'px' : undefined,
				borderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,
				borderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,
				borderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,
				borderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined,
			}}>
			<InnerBlocks.Content />
		</div >
	);
}
