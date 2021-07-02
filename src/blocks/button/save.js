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
		linkBackgroundColor,
		linkTextColor,
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
		'has-link-bg': linkBackgroundColor,
		'is-uppercase': uppercase,
		'no-border-radius': borderRadius === 0,
		'no-border': borderWidth === 0,
	});

	const styleButton = {
		backgroundColor: backgroundColor,
		color: textColor,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	const styleBg = {
		backgroundColor:linkBackgroundColor,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
	};

	const wrapperClasses = classnames(classnames, {});

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
		style: styleBg,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ url }
				style={ styleButton}
				value={ label }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
