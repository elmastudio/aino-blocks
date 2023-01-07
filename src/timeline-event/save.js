/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		marginTop,
	} = attributes;

	const blockClasses = classnames(
		classnames, {
		}
	);

	const blockStyles = {
		marginTop: marginTop ? marginTop + 'px' : undefined,
	};

	const blockProps = useBlockProps.save( {
		className: blockClasses,
		style: blockStyles,
	} );

	return (

		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div >
	);
}