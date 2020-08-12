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
		label,
		backgroundColor,
		textColor,
		customBackgroundColor,
		customTextColor,
		target,
		rel,
		size,
		link,
		borderRadius,
		borderWidth,
		uppercase,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName('background-color', backgroundColor);

	const buttonClasses = classnames('wp-block-ainoblocks-button__link', size, {
		'has-text-color': textColor || customTextColor,
		[textClass]: textClass,
		'has-background': backgroundColor || customBackgroundColor,
		[backgroundClass]: backgroundClass,
		'is-uppercase': uppercase,
		'no-border-radius': borderRadius === 0,
		'no-border-width': borderWidth === 0,
	});

	const buttonStyle = {
		backgroundColor: backgroundClass ? customBackgroundColor : undefined,
		boxShadow: customBackgroundColor ? 'inset 0 0 0 1px ' + customBackgroundColor : undefined,
		color: textClass ? customTextColor : undefined,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ link }
				style={ buttonStyle }
				value={ label }
				target={ target }
				rel ="noopener noreferrer"
			/>
		</div>
	);
}
