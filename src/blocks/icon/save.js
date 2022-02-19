/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
const {
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		iconType,
		iconSize,
		alignment,
	} = attributes;

	const iconClasses = classnames(classnames, iconSize, alignment, {});

	const blockProps = useBlockProps.save( {
		className: iconClasses,
	} );

	return (
		<div { ...blockProps }>
			{icons.quote}
		</div>
	);
}