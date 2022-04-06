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

	const iconClasses = classnames(classnames, iconType, iconSize, alignment, {});

	const blockProps = useBlockProps.save( {
		className: iconClasses,
	} );

	const icon = (iconType === 'quote') ? (icons.quote)
	: (iconType === 'attachment') ? (icons.attachment)
	: (iconType === 'baggage') ? (icons.baggage)
	: (iconType === 'bookmark') ? (icons.bookmark)
	: (iconType === 'calendar') ? (icons.calendar)
	: (iconType === 'clock') ? (icons.clock)
	: (iconType === 'flash') ? (icons.flash)
	: (iconType === 'heart') ? (icons.heart)
	: (iconType === 'pin') ? (icons.pin)
	: (iconType === 'trophy') ? (icons.trophy)
	: (iconType === 'view') ? (icons.view)
	: (icons.attachment);

	return (
		<div { ...blockProps }>
			{icon}
		</div>
	);
}