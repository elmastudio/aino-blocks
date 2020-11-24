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
		label,
		backgroundColor,
		textColor,
		borderColor,
		target,
		link,
		stickerSize,
		borderRadius,
		borderWidth,
		uppercase,
		fontSize,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const borderClass = getColorClassName('border-color', borderColor);
	const backgroundClass = getColorClassName('background-color', backgroundColor);

	const stickerClasses = classnames('wp-block-ainoblocks-sticker__content', fontSize, {
		[`size__${stickerSize}`] : stickerSize ? stickerSize : undefined,
		'has-custom-background': backgroundColor,
		'has-custom-text-color': textColor,
		'has-custom-border-color': borderColor,
		'is-uppercase': uppercase,
	});

	const styles = {
		backgroundColor: backgroundColor,
		color: textColor,
		borderColor: borderColor,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className={ stickerClasses }
				style={ styles }
				href={ link }
				value={ label }
				target={ target }
				rel ="noopener noreferrer"
			/>
		</div>
	);
}
