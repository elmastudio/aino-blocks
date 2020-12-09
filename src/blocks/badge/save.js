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
		'has-border-color': borderColor,
		'has-background': backgroundColor,
		'no-border-radius': borderRadius === 0,
		'has-icon': icon,
	});

	return (
		<div
			className={classnames( 'wp-block-ainoblocks-badge', size,)}
		>
			{!RichText.isEmpty(content) && (
				<RichText.Content
					tagName="span"
					className={contentClasses}
					style={{
						color: textColor,
						background: backgroundColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? borderRadius + 'px' : undefined,
					}}
					value={content}
				/>
			)}
		</div>
	);
}
