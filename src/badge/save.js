/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { __, _x } from '@wordpress/i18n';

export default function save({ attributes }) {

	const {
		content,
		size,
	} = attributes;

	const badgeClasses = classnames(classnames, size, {
	});

	const blockProps = useBlockProps.save( {
		className: badgeClasses,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName='span'
				value={content}
			/>
		</div>
	);
}
