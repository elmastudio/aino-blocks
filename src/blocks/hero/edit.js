/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
const {__, _x } = wp.i18n;
const { Fragment, useState } = wp.element;
const {
	BlockControls,
	BlockVerticalAlignmentToolbar,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} = wp.blockEditor;
const {
	PanelBody,
	TextareaControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

/**
 * Internal dependencies
 */
import MediaContainer from './media-container';

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'ainoblocks/button', 'ainoblocks/multiple-buttons'];

const TEMPLATE = [
	['ainoblocks/badge', {
		placeholder: _x('Write Badge text…', 'content placeholder'),
		content: _x('Write Badge text…', 'content placeholder')
	}],
	['core/heading', {
		placeholder: _x('Write heading…', 'content placeholder'),
		content: _x('Write heading…', 'content placeholder'),
	}],
	['core/paragraph', {
		placeholder: _x('Start writing here…', 'content placeholder'),
		content: _x('Start writing here…', 'content placeholder'),
		className: 'hero-text',
	}],
	['ainoblocks/multiple-buttons'],
];

/**
 * Block edit function
 */
export default function heroEdit( { attributes, setAttributes, className, isSelected } ) {

	const {
		align,
		mediaAlt,
		mediaPosition,
		mediaHeight,
		mediaType,
		verticalContentAlignment,
		imageFill,
		contentGridColumnStart,
		contentGridColumnEnd,
		mediaGridColumnStart,
		mediaGridColumnEnd,
		backgroundColor,
	} = attributes;

	const [mediaWidth, setmediaWidth] = useState(0);

	const onSelectMedia = (media) => {

		let mediaType;
		let src;
		// for media selections originated from a file upload.
		if (media.media_type) {
			if (media.media_type === 'image') {
				mediaType = 'image';
			} else {
				// only images and videos are accepted so if the media_type is not an image we can assume it is a video.
				// video contain the media type of 'file' in the object returned from the rest api.
				mediaType = 'video';
			}
		} else { // for media selections originated from existing files in the media library.
			mediaType = media.type;
		}

		if (mediaType === 'image') {
			// Try the "large" size URL, falling back to the "full" size URL below.
			src = get(media, ['sizes', 'large', 'url']) || get(media, ['media_details', 'sizes', 'large', 'source_url']);
		}

		setAttributes({
			mediaAlt: media.alt,
			mediaId: media.id,
			mediaType,
			mediaUrl: src || media.url,
			imageFill: undefined,
		});
	}

	const onWidthChange = (width) => {
		setmediaWidth({
			mediaWidth: applyWidthConstraints(width),
		});

	}

	const commitWidthChange = (width) => {
		setAttributes({
			mediaWidth: applyWidthConstraints(width),
		});

		setmediaWidth({
			mediaWidth: 0,
		});
	}

	const renderMediaArea = (width) => {

		const {
			mediaAlt,
			mediaId,
			mediaPosition,
			mediaHeight,
			mediaType,
			mediaUrl,
			imageFill,
		} = attributes;

		if ('media-hide' !== mediaPosition) {
			return (
				<
				MediaContainer className = "wp-block-ainoblocks-hero__media"
				onSelectMedia = {
					onSelectMedia
				}
				onWidthChange = {
					onWidthChange
				}
				commitWidthChange = {
					commitWidthChange
				} {
					...{
						mediaAlt,
						mediaId,
						mediaType,
						mediaUrl,
						mediaPosition,
						imageFill
					}
				}
				/>
			);
		}
	}

	const mediaPositionOptions = [{
			value: 'media-right',
			label: __('Media right', 'ainoblocks')
		},
		{
			value: 'media-left',
			label: __('Media left', 'ainoblocks')
		},
		{
			value: 'media-below',
			label: __('Media below', 'ainoblocks')
		},
		{
			value: 'media-hide',
			label: __('Hide media', 'ainoblocks')
		}
	];

	const temporaryMediaWidth = mediaWidth;

	const styleContent = {
		gridColumnStart: contentGridColumnStart,
		gridColumnEnd: contentGridColumnEnd,
	};

	const styleMedia = {
		gridColumnStart: mediaGridColumnStart,
		gridColumnEnd: mediaGridColumnEnd,
	};

	const widthString = `${temporaryMediaWidth || mediaWidth}%`;

	const onMediaAltChange = (newMediaAlt) => {
		setAttributes({
			mediaAlt: newMediaAlt
		});
	};

	const onVerticalContentAlignmentChange = (alignment) => {
		setAttributes({
			verticalContentAlignment: alignment
		});
	};

	const heroSettings = (
		<PanelBody
			title={__('Hero Settings', 'ainoblocks')}
			initialOpen={true}
		>
			<SelectControl
				label={__('Media Position', 'ainoblocks')}
				value={mediaPosition}
				options={mediaPositionOptions}
				onChange={mediaPosition => setAttributes({ mediaPosition })}
			/>
			<ToggleControl
				label={__('Media height 100%', 'ainoblocks')}
				checked={!!mediaHeight}
				onChange={() => setAttributes({ mediaHeight: !mediaHeight })}
				help={!!mediaHeight ? __('Media is full-height.', 'ainoblocks') : __('Toggle for full-height media.', 'ainoblocks')}
			/>
			{mediaType === 'image' && (<TextareaControl
				label={__('Alt text (alternative text)', 'ainoblocks')}
				value={mediaAlt}
				onChange={onMediaAltChange}
				help={__('Describe the purpose of the image. Leave empty if the image is purely decorative.', 'ainoblocks')}
			/>)}
		</PanelBody>
	);

	const contentGridSettings = (
		<PanelBody
			title={__('Content Grid Settings', 'ainoblocks')}
			initialOpen={false}
		>
			<RangeControl
				label={__('Grid Column Start', 'ainoblocks')}
				value={contentGridColumnStart}
				onChange={(contentGridColumnStart) => setAttributes({ contentGridColumnStart })}
				min={1}
				max={13}
				allowReset={true}
			/>
			<RangeControl
				label={__('Grid Column End', 'ainoblocks')}
				value={contentGridColumnEnd}
				onChange={(contentGridColumnEnd) => setAttributes({ contentGridColumnEnd })}
				min={1}
				max={13}
				allowReset={true}
			/>
		</PanelBody>
	);

	const mediaGridSettings = (
		<PanelBody
			title={__('Media Grid Settings', 'ainoblocks')}
			initialOpen={false}
		>
			<RangeControl
				label={__('Grid Column Start', 'ainoblocks')}
				value={mediaGridColumnStart}
				onChange={(mediaGridColumnStart) => setAttributes({ mediaGridColumnStart })}
				min={1}
				max={13}
				allowReset={true}
			/>
			<RangeControl
				label={__('Grid Column End', 'ainoblocks')}
				value={mediaGridColumnEnd}
				onChange={(mediaGridColumnEnd) => setAttributes({ mediaGridColumnEnd })}
				min={1}
				max={13}
				allowReset={true}
			/>
		</PanelBody>
	);

	const heroClasses = classnames(className, {
		[`align${align}`]: align,
		'media-right'     : 'media-right'      === mediaPosition,
		'media-left'      : 'media-left'       === mediaPosition,
		'media-below'     : 'media-below'      === mediaPosition,
		'media-hide'      : 'media-hide'       === mediaPosition,
		'media-fullheight': mediaHeight,
		'is-selected': isSelected,
		[`content-vertically-aligned-${verticalContentAlignment}`]: verticalContentAlignment,
		'is-image-fill': imageFill,
	});

	const blockProps = useBlockProps( {
		className: heroClasses,
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	return (
		<Fragment>
			<InspectorControls>
				{heroSettings}
				<PanelColorSettings
					title={__('Color Settings', 'ainoblocks')}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: backgroundColor => {
								setAttributes({ backgroundColor });
							},
							label: __('Background Color', 'ainoblocks'),
						},
					]}
				/>
				{contentGridSettings}
				{mediaGridSettings}
			</InspectorControls>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={onVerticalContentAlignmentChange}
					value={verticalContentAlignment}
				/>
			</BlockControls>

			<div { ...blockProps }>
				<div className="wp-block-ainoblocks-hero__inner-container">

					<div className="wp-block-ainoblocks-hero__content" style={styleContent}>
						<InnerBlocks
							template={TEMPLATE}
							templateInsertUpdatesSelection={false}
						/>
					</div>
					<div className="wp-block-ainoblocks-hero__media" style={styleMedia}>
						{renderMediaArea()}
					</div>
				</div>
			</div>
		</Fragment >
	);
}
