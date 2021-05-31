/**
 * External dependencies
 */
import classnames from 'classnames';
import noop from 'lodash/noop';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import imageFillStyles from './media-container';

export default function save( { attributes } ) {

	const {
		backgroundColor,
		mediaAlt,
		mediaPosition,
		mediaHeight,
		mediaType,
		mediaUrl,
		mediaId,
		verticalContentAlignment,
		imageFill,
		contentGridColumnStart,
		contentGridColumnEnd,
		mediaGridColumnStart,
		mediaGridColumnEnd,
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

	const heroClasses = classnames({
		'media-right'     : 'media-right'      === mediaPosition,
		'media-left'      : 'media-left'       === mediaPosition,
		'media-below'     : 'media-below'      === mediaPosition,
		'media-hide'      : 'media-hide'       === mediaPosition,
		'media-fullheight': mediaHeight,
		[`content-vertically-aligned-${verticalContentAlignment}`]: verticalContentAlignment,
		'is-image-fill': imageFill,
	});

	const styleContent = {
		gridColumnStart: contentGridColumnStart,
		gridColumnEnd: contentGridColumnEnd,
	};

	const styleMedia = {
		gridColumnStart: mediaGridColumnStart,
		gridColumnEnd: mediaGridColumnEnd,
	};

	const blockProps = useBlockProps.save( {
		className: heroClasses,
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="wp-block-ainoblocks-hero__inner-container">
				<div className="wp-block-ainoblocks-hero__content" style={styleContent}>
					<InnerBlocks.Content />
				</div>

				{'media-hide' !== mediaPosition && (
					<figure className="wp-block-ainoblocks-hero__media" style={styleMedia}>
						{(mediaTypeRenders[mediaType] || noop)()}
					</figure>
				)}
			</div>
		</div>
	);
}
