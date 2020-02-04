/**
 * External dependencies
 */
import classnames from 'classnames';
import noop from 'lodash/noop';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	getColorClassName,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import imageFillStyles from './media-container';

const DEFAULT_MEDIA_WIDTH = 50;

export default function save({ attributes }) {

	const {
		align,
		backgroundColor,
		customBackgroundColor,
		mediaAlt,
		mediaPosition,
		mediaType,
		mediaUrl,
		mediaWidth,
		mediaId,
		verticalAlignment,
		paddingTop,
		paddingBottom,
	} = attributes;

	const mediaTypeRenders = {
		image: () => <img src={mediaUrl} alt={mediaAlt} className={(mediaId && mediaType === 'image') ? `wp-image-${mediaId}` : null} />,
		video: () => <video controls src={mediaUrl} />,
	};
	const backgroundClass = getColorClassName('background-color', backgroundColor);
	const className = classnames({
		'has-media-right': 'right' === mediaPosition,
		'no-padding-top': false === paddingTop,
		'no-padding-bottom': false === paddingBottom,
		[backgroundClass]: backgroundClass,
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
	});

	let gridTemplateColumns;
	if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
		gridTemplateColumns = 'right' === mediaPosition ? `auto ${mediaWidth}%` : `${mediaWidth}% auto`;
	}
	const style = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		gridTemplateColumns,
	};
	return (
		<div className={className} style={style}>
			<figure className="wp-block-ainoblocks-featured-content__media">
				{(mediaTypeRenders[mediaType] || noop)()}
			</figure>
			<div className="wp-block-ainoblocks-featured-content__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
