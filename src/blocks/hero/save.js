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
		backgroundColor,
		customBackgroundColor,
		mediaAlt,
		mediaPosition,
		mediaType,
		mediaUrl,
		mediaOverflow,
		mediaId,
		verticalContentAlignment,
		imageFill,
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

	const styleBackground = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
	};
	return (
		<div className={className} style={styleBackground}>

			<div className="wp-block-ainoblocks-hero__container">
				<div className="wp-block-ainoblocks-hero__content">
					<InnerBlocks.Content />
				</div>

				{'hide' !== mediaPosition && (
					<figure className="wp-block-ainoblocks-hero__media">
						{(mediaTypeRenders[mediaType] || noop)()}
					</figure>
				)}
			</div>
		</div>
	);
}
