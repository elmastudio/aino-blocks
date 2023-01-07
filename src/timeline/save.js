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
		eventPosition,
		eventOverlap,
		markerPosition,
		markerStyle,
	} = attributes;

	const blockClasses = classnames(
		classnames, eventPosition, markerPosition, {
			'overlap': eventOverlap,
		}
	);

	const blockProps = useBlockProps.save( {
		className: blockClasses,
	} );

	return (

		<div { ...blockProps }>
				<InnerBlocks.Content />
		</div >
	);
}