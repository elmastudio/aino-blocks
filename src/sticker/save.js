/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		url,
		label,
		backgroundColor,
		textColor,
		borderColor,
		linkTarget,
		rel,
		stickerSize,
		borderRadius,
		borderWidth,
		uppercase,
		fontSize,
		rotate,
		rotateStart,
	} = attributes;

	const stickerClasses = classnames('wp-block-ainoblocks-sticker__content', fontSize, rotate, {
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
		borderRadius: borderRadius ? borderRadius + '%' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
		transform: `rotateZ(${rotateStart}deg)`
	};

	const wrapperClasses = classnames(classnames, {});

	return (
		<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
			<RichText.Content
				tagName="a"
				className={ stickerClasses }
				style={ styles }
				href={ url }
				value={ label }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
