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

	const buttonClasses = classnames('wp-block-ainoblocks-button__link', size, borderRadius, {
		'has-custom-background': backgroundColor,
		'has-custom-text-color': textColor,
		'is-uppercase': uppercase,
		'no-border-radius': borderRadius === 0,
		'no-border': borderWidth === 0,
	});

	const styles = {
		backgroundColor: backgroundColor,
		color: textColor,
		borderColor: textColor,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ link }
				style={ styles }
				value={ label }
				target={ target }
				rel ="noopener noreferrer"
			/>
		</div>
	);
}
