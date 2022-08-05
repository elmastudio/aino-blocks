/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		iconPosition,
		border,
		question,
	} = attributes;

	const blockClasses = classnames(
		classnames, iconPosition, {
			'has-border': border,
		}
	);

	const blockProps = useBlockProps.save( {
		className: blockClasses,
	} );

	return (

		<div
			{ ...blockProps }
			{ ...{ 'x-data': '{ open: false }' } }
			{ ...{ '@click':'open = !open' } }
			{ ...{ ':class': `{'open': open, 'close': ! open }` } }
		>
			<div
				className="accordion"
			>
				<RichText.Content
					tagName='h3'
					className="has-xxs-font-size"
					value={question}
				/>
			</div>
			<div className="panel">
				<InnerBlocks.Content />
			</div>
		</div >
	);
}
