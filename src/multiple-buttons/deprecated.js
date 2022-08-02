/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

const deprecated = [
	{
		attributes: {
			align: {
				type: 'string'
			},
			items: {
				type: 'number',
				default: 1
			},
			flexDirection: {
				type: 'string'
			},
			fullWidth: {
				type: 'boolean',
				default: false
			}
		},

		save( attributes ) {

			const {
				align,
				items,
				flexDirection,
				fullWidth,
			} = attributes;

			const innerClasses = classnames(
				'wp-block-ainoblocks-multiple-buttons__inner', {
				'has-margins': items > 1,
				'stretch': fullWidth ? fullWidth : undefined,
				}
			);

			const buttonsClasses = classnames(classnames, flexDirection,`align${align}`, {
				'stretch': fullWidth ? fullWidth : undefined,
			});

			const blockProps = useBlockProps.save( {
				className: buttonsClasses,
			} );

			return (
				<div { ...blockProps }>
					<div className={innerClasses}>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}
	}
];

export default deprecated;
