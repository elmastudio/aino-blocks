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
			flexOrder: {
				type: 'number'
			},
			flexBasis: {
				type: 'number'
			},
			flexGrow: {
				type: 'number'
			},
			flexShrink: {
				type: 'boolean',
				default: false
			},
			alignSelfDesktop: {
				type: 'string',
				default: 'auto'
			},
			alignSelfTablet: {
				"type": "string",
				default: 'auto'
			},
			alignSelfMobile: {
				type: 'string',
				default: 'auto'
			}
		},

		save( attributes ) {

			const {
				flexOrder,
				flexGrow,
				flexShrink,
				flexBasis,
				alignSelfDesktop,
				alignSelfTablet,
				alignSelfMobile
			} = attributes;

			const flexItemClasses = classnames(
				classnames,
				alignSelfDesktop,
				alignSelfTablet,
				alignSelfMobile,
				{
			});
		
			const flexItemStyles = {
				order: flexOrder ? flexOrder : undefined,
				flexGrow: flexGrow ? flexGrow : undefined,
				flexBasis: flexBasis ? flexBasis + 'px' : undefined,
				flexShrink: flexShrink ? "0" : undefined,
			};
		
			const blockProps = useBlockProps.save( {
				className: flexItemClasses,
				style: flexItemStyles,
			} );

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div >
			);
		}
	}
];

export default deprecated;
