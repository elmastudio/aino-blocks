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
		target,
		link,
		borderRadius,
		borderWidth,
		uppercase,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName('background-color', backgroundColor);

	const stickerClasses = classnames('wp-block-ainoblocks-sticker__content', {
		'has-custom-background': backgroundColor,
		'has-custom-text-color': textColor,
		'is-uppercase': uppercase,
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
