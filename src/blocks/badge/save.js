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
		backgroundColor,
		textColor,
		alignment,
		borderRadius,
	} = attributes;

	const badgeClasses = classnames('wp-block-ainoblocks-badge__content', {
		'has-text-color': textColor,
		'has-background': backgroundColor,
		'no-border-radius': borderRadius === 0,
	});

	return (
		<div
			className={classnames()}
			style={{ textAlign: alignment }}
		>
			{!RichText.isEmpty(content) && (
				<RichText.Content
					tagName="span"
					className={badgeClasses}
					style={{
						color: textColor,
						background: backgroundColor,
						borderRadius: borderRadius ? borderRadius + 'px' : undefined,
					}}
					value={content}
				/>
			)}
		</div>
	);
}
