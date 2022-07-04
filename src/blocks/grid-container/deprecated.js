/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

const deprecated = [
	{
		save( { attributes } ) {
			const {
				align,
				items,
				columnGap,
			} = attributes;
		
			const innerClasses = classnames(
				'wp-block-ainoblocks-grid-container__inner', {}
			);
		
			const gridClasses = classnames(
				classnames,
				columnGap,
			);
		
			const blockProps = useBlockProps.save( {
				className: gridClasses,
			} );
		
			return (
				<div { ...blockProps }>
					<div className={innerClasses}>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
];

export default deprecated;