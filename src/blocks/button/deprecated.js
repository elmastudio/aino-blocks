/**
 * External dependencies
 */
import classnames from 'classnames';
import { omit } from 'lodash';
/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * WordPress dependencies
 */
const {
	RichText,
	useBlockProps,
} = wp.blockEditor;

const deprecated = [
	{
		attributes: {
			...metadata.attributes,
			linkBackgroundColor: {
				type: 'string'
			},
			linkTextColor: {
				type: 'string'
			},
			backgroundColor: {
				type: 'string'
			},
			textColor: {
				type: 'string'
			},
		},

		save( { attributes } ) {
			const {
				linkBackgroundColor,
				linkTextColor,
				backgroundColor,
				textColor,
				url,
				label,
				linkTarget,
				rel,
				size,
				borderRadius,
				borderWidth,
				uppercase,
			} = attributes;

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

			const wrapperClasses = classnames(classnames, {
			});

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
		},
	},
];

export default deprecated;