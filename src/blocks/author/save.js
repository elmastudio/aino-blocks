/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	RichText,
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		name,
		info,
		infoTextColor,
		nameTextColor,
		alignment,
		layout,
	} = attributes;

	const authorClasses = classnames(classnames, layout, alignment, {});

	const blockProps = useBlockProps.save( {
		className: authorClasses,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
			<div className={'wp-block-ainoblocks-author__text-wrapper'}>
				<div className={'wp-block-ainoblocks-author__author'}>
					{!RichText.isEmpty(name) && (
						<RichText.Content
							tagName="span"
							style={{
								color: nameTextColor,
							}}
							className={'wp-block-ainoblocks-author__name'}
							value={name}
						/>
					)}
					{!RichText.isEmpty(info) && (
						<RichText.Content
							tagName="span"
							style={{
								color: infoTextColor,
							}}
							className={'wp-block-ainoblocks-author__info'}
							value={info}
						/>
					)}
				</div>
			</div>
		</div >
	);
}