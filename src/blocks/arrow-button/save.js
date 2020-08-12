/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Path,
	SVG,
} = wp.components;
const {
	RichText,
} = wp.blockEditor;

/**
 * Block edit function
 */
export default function save({
	attributes
}) {
	const {
		url,
		label,
		link,
		target,
		size,
		uppercase,
		iconPositionAfter,
		opensInNewTab,
		lineHeight,
		iconRotation,
		textColor,
		iconColor,
	} = attributes;

	const buttonClasses = classnames('wp-block-ainoblocks-arrow-button__link', {
		'is-uppercase': uppercase,
		'icon-after': iconPositionAfter,
	});

	const iconClasses = classnames('wp-block-ainoblocks-arrow-button__icon');

	const iconStyles = {
		transform: iconRotation ? `rotate(${iconRotation}deg)` : undefined,
		fill: iconColor,
	};

	const linkStyles = {
		color: textColor,
		lineHeight: lineHeight ? lineHeight : undefined,
	};

	return (
		<div
		className={classnames(
			'wp-block-ainoblocks-arrow-button', size,
		)}
		>
		{ ! iconPositionAfter && (
			<span className={iconClasses} style={iconStyles}>
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
					<Path d="M4 0h28v28h-4l-0.004-21.172-25.168 25.172-2.828-2.828 25.168-25.172h-21.168z"></Path>
				</SVG>
			</span>
		) }
		<RichText.Content
			tagName='a'
			value={ label }
			className={ buttonClasses }
			style={ linkStyles }
			href={ link }
			target={ target }
			rel ='noopener noreferrer'
		/>
			{ iconPositionAfter && (
			<span className={iconClasses} style={iconStyles}>
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
					<Path d="M4 0h28v28h-4l-0.004-21.172-25.168 25.172-2.828-2.828 25.168-25.172h-21.168z"></Path>
				</SVG>
			</span>
		) }
		</div>
	);
}

