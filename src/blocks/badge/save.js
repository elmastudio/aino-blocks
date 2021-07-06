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
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		content,
		size,
		backgroundColor,
		textColor,
		borderColor,
		alignment,
		borderRadius,
		icon,
	} = attributes;

	const contentClasses = classnames('badge-content', {
		'has-text-color': textColor,
		'has-border-color': borderColor,
	});

	const contentStyles = {
		color: textColor,
		background: backgroundColor,
		borderColor: borderColor,
		borderTopLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
		borderBottomLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
		borderTopRightRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderBottomRightRadius: borderRadius ? borderRadius + 'px' : undefined,
	};

	const iconClasses = classnames('badge-icon');

	const iconStyles = {
		fill: textColor,
		borderColor: borderColor,
		background: backgroundColor,
		borderTopLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderBottomLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
	};

	const badgeClasses = classnames(classnames, size, {
		'no-icon': icon,
	});

	const blockProps = useBlockProps.save( {
		className: badgeClasses,
		style: {
			color: textColor,
		},
	} );

	return (
		<div { ...blockProps }>
			{ icon && (
				<span className={iconClasses} style={iconStyles}>
					<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
					<Path d="M26 4v15.17l10.728-10.726 2.828 2.828-10.727 10.727 15.171 0.001v4l-15.172-0.001 10.728 10.729-2.828 2.828-10.728-10.727v15.171h-4v-15.172l-10.728 10.728-2.828-2.828 10.727-10.729-15.171 0.001v-4l15.17-0.001-10.726-10.727 2.828-2.828 10.728 10.727v-15.171z"></Path>
					</SVG>
				</span>
			) }
			<RichText.Content
				tagName='span'
				className={contentClasses}
				style={contentStyles}
				value={content}
			/>
		</div>
	);
}
