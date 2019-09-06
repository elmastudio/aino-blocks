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

export default function save({ attributes }) {
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
		borderRadius,
		marginLeft,
		marginRight,
		uppercase,
		fullwidth,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName('background-color', backgroundColor);

	const buttonClasses = classnames('wp-block-ainoblocks-advanced-button__link', size, borderRadius, {
		'has-text-color': textColor || customTextColor,
		[textClass]: textClass,
		'has-background': backgroundColor || customBackgroundColor,
		[backgroundClass]: backgroundClass,
		'is-uppercase': uppercase,
		'is-fullwidth': fullwidth,
	});

	const buttonStyle = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
		marginLeft: marginLeft ? marginLeft + 'px' : undefined,
		marginLeft: marginRight ? marginRight + 'px' : undefined,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className={buttonClasses}
				href={url}
				title={title}
				style={buttonStyle}
				value={text}
				target={linkTarget}
				rel={rel}
			/>
		</div>
	);
}
