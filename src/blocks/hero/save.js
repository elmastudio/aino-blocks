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
		mediaOverflow,
		mediaId,
		verticalContentAlignment,
		imageFill,
		focalPoint,
	} = attributes;

	const mediaTypeRenders = {
		image: () => <img src={mediaUrl} alt={mediaAlt} className={(mediaId && mediaType === 'image') ? `wp-image-${mediaId}` : null} />,
		video: () => <video controls src={mediaUrl} />,
	};
	const backgroundClass = getColorClassName('background-color', backgroundColor);
	const className = classnames({
		'has-media-left': 'left' === mediaPosition,
		'has-media-right': 'right' === mediaPosition,
		'has-media-below': 'below' === mediaPosition,
		'hide-media': 'hide' === mediaPosition,
		[backgroundClass]: backgroundClass,
		[`content-vertically-aligned-${verticalContentAlignment}`]: verticalContentAlignment,
		'is-image-fill': imageFill,
		'is-media-overflow': mediaOverflow,
	});
	const backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};

	let gridTemplateColumns;
	if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
		gridTemplateColumns = 'right' === mediaPosition ? `auto ${mediaWidth}%` : `${mediaWidth}% auto`;
	}
	const styleGridColumns = {
		gridTemplateColumns,
	};
	const styleBackground = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
	};
	return (
		<div className={className} style={styleBackground}>

			<div className="wp-block-ainoblocks-hero__container" style={styleGridColumns}>
				<div className="wp-block-ainoblocks-hero__content">
					<InnerBlocks.Content />
				</div>
				<figure className="wp-block-ainoblocks-hero__media" style={backgroundStyles}>
					{(mediaTypeRenders[mediaType] || noop)()}
				</figure>
			</div>
		</div>
	);
}
