/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	RichText,
} = wp.editor;

export default function save({ attributes }) {

	const {
		content,
		size,
		backgroundColor,
		textColor,
		borderColor,
		alignment,
		borderRadius,
		icon,
	} = attributes;

	const contentClasses = classnames('wp-block-ainoblocks-badge__content', {
		'has-text-color': textColor,
	});

	return (
		<div
			className={classnames( 'wp-block-ainoblocks-badge', size,
			{
				'has-border-color': borderColor,
				'has-background': backgroundColor,
				'no-border-radius': borderRadius === 0,
				'has-icon': icon,
			})}
			style={{
				textAlign: alignment,
				background: backgroundColor,
				borderColor: borderColor,
				borderRadius: borderRadius ? borderRadius + 'px' : undefined,
				}}
		>
			{!RichText.isEmpty(content) && (
				<RichText.Content
					tagName="span"
					className={contentClasses}
					style={{
						color: textColor,
					}}
					value={content}
				/>
			)}
		</div>
	);
}
