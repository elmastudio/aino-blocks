/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	getColorClassName,
	useBlockProps,
} = wp.blockEditor;

export default function save( { attributes } ) {

	const {
		backgroundColor,
		borderColor,
		iconColor,
		borderWidth,
	} = attributes;

	const dividerClasses = classnames(classnames, {
		'has-custom-background': backgroundColor,
		'has-custom-border-color': borderColor,
	});

	const styles = {
		backgroundColor: backgroundColor,
		borderColor: borderColor,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	const iconStyles = {
		fill: iconColor,
	};

	const blockProps = useBlockProps.save( {
		className: dividerClasses,
	} );

	return (
		<div { ...blockProps }>
			<span class="wp-block-ainoblocks-divider__inner" style={ styles }>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="__icon" style={ iconStyles }>
					<path d="M25.586 6.586l17.414 17.414-17.414 17.414-2.828-2.828 12.585-12.586-30.342 0v-4l30.342-0-12.585-12.586z"></path>
				</svg>
			</span>
		</div>
	);
}
