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

export default function save({
	attributes
}) {

	const {
		backgroundColor,
		customBackgroundColor,
		mediaAlt,
		mediaPosition,
		mediaHeight,
		mediaType,
		mediaUrl,
		mediaId,
		verticalContentAlignment,
		imageFill,
		contentGridLineStart,
		contentGridLineEnd,
		mediaGridLineStart,
		mediaGridLineEnd,
	} = attributes;

	const mediaTypeRenders = {
		image: () => < img src = {
			mediaUrl
		}
		alt = {
			mediaAlt
		}
		className = {
			(mediaId && mediaType === 'image') ? `wp-image-${mediaId}` : null
		}
		/>,
		video: () => < video controls src = {
			mediaUrl
		}
		/>,
	};
	const backgroundClass = getColorClassName('background-color', backgroundColor);
	const className = classnames({
		'media-right'     : 'media-right'      === mediaPosition,
		'media-left'      : 'media-left'       === mediaPosition,
		'media-below'     : 'media-below'      === mediaPosition,
		'media-hide'      : 'media-hide'       === mediaPosition,
		'media-fullheight': mediaHeight,
		[backgroundClass]: backgroundClass,
		[`content-vertically-aligned-${verticalContentAlignment}`]: verticalContentAlignment,
		'is-image-fill': imageFill,
	});

	const styleBackground = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
	};

	const styleContent = {
		gridColumnStart: contentGridLineStart,
		gridColumnEnd: contentGridLineEnd,
	};

	const styleMedia = {
		gridColumnStart: mediaGridLineStart,
		gridColumnEnd: mediaGridLineEnd,
	};

	return (
		<div className={className} style={styleBackground}>

			<div className="wp-block-ainoblocks-hero__container">
				<div className="wp-block-ainoblocks-hero__content" style={styleContent}>
					<InnerBlocks.Content />
				</div>

				{'hide' !== mediaPosition && (
					<figure className="wp-block-ainoblocks-hero__media" style={styleMedia}>
						{(mediaTypeRenders[mediaType] || noop)()}
					</figure>
				)}
			</div>
		</div>
	);
}
