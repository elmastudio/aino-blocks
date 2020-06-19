/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	RichText,
	getColorClassName,
} = wp.blockEditor;

export default function save({
	attributes
}) {
	const {
		url,
		text,
		title,
		backgroundColor,
		textColor,
		customBackgroundColor,
		customTextColor,
		linkTarget,
		rel,
		size,
		fontSize,
		borderRadius,
		uppercase,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName('background-color', backgroundColor);

	const buttonClasses = classnames('wp-block-ainoblocks-button__link', size, fontSize, borderRadius, {
		'has-text-color': textColor || customTextColor,
		[textClass]: textClass,
		'has-background': backgroundColor || customBackgroundColor,
		[backgroundClass]: backgroundClass,
		'is-uppercase': uppercase,
	});

	const buttonStyle = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		boxShadow: 'inset 0 0 0 1px ' + customBackgroundColor,
		color: textClass ? undefined : customTextColor,
	};

	return (
		<div>
			<a
				className={buttonClasses}
				href={url}
				title={title}
				style={buttonStyle}
				target={linkTarget}
				rel={rel}
			>
			<RichText.Content value={text} />
			</a>
		</div>
	);
}
