/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

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
			url: {
				type: 'string',
				source: 'attribute',
				selector: 'a',
				attribute: 'href'
			},
			title: {
				type: 'string',
				source: 'attribute',
				selector: 'a',
				attribute: 'title'
			},
			text: {
				type: 'string',
				source: 'html',
				selector: 'a'
			},
			linkTarget: {
				type: 'string',
				source: 'attribute',
				selector: 'a',
				attribute: 'target'
			},
			rel: {
				type: 'string',
				source: 'attribute',
				selector: 'a',
				attribute: 'rel'
			},
			placeholder: {
				type: 'string'
			},
			size: {
				type: 'string',
				default: 'size__m'
			},
			borderRadius: {
				type: 'number',
				default: 0
			},
			borderWidth: {
				type: 'number'
			},
			uppercase: {
				type: 'boolean',
				default: false
			},
			gradient: {
				type: 'string'
			},
			label: {
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