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
	useBlockProps,
} = wp.blockEditor;

export default function save( { attributes } ) {

	const {
		url,
		label,
		backgroundColor,
		textColor,
		linkTarget,
		rel,
		size,
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

	const wrapperClasses = classnames(classnames, {});

	return (
		<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ url }
				style={ styles }
				value={ label }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
