/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	BlockControls,
	BlockVerticalAlignmentToolbar,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.blockEditor;
const {
	PanelBody,
	TextareaControl,
	ToggleControl,
	Toolbar,
	FocalPointPicker,
} = wp.components;

/**
 * Internal dependencies
 */
import MediaContainer from './media-container';

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['core/image', 'core/spacer', 'core/heading', 'core/paragraph', 'core/button', 'ainoblocks/button', 'ainoblocks/multiple-buttons'];

const TEMPLATE = [
	['core/paragraph', { placeholder: _x('Subtitle…', 'content placeholder'), content: _x('Add a Subtitle', 'content placeholder') }],
	['core/heading', { placeholder: _x('Heading…', 'content placeholder'), content: _x('Add a Heading', 'content placeholder'), level: 2, className: 'featured-heading', }],
	['core/paragraph', { placeholder: _x('Content…', 'content placeholder'), content: _x('Replace the sample text with your content.', 'content placeholder') }],
	['ainoblocks/multiple-buttons'],
];

/**
 * Block edit function
 */
class featuredContentEdit extends Component {

	constructor() {
		super(...arguments);

		this.onSelectMedia = this.onSelectMedia.bind(this);
		this.onWidthChange = this.onWidthChange.bind(this);
		this.commitWidthChange = this.commitWidthChange.bind(this);
		this.state = {
			mediaWidth: null,
		};
	}

	onSelectMedia(media) {
		const { setAttributes } = this.props;

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
			focalPoint: undefined,
		});
	}

	onWidthChange(width) {
		this.setState({
			mediaWidth: applyWidthConstraints(width),
		});
	}

	commitWidthChange(width) {
		const { setAttributes } = this.props;

		setAttributes({
			mediaWidth: applyWidthConstraints(width),
		});
		this.setState({
			mediaWidth: null,
		});
	}

	renderMediaArea() {
		const { attributes } = this.props;
		const { mediaAlt, mediaId, mediaPosition, mediaType, mediaUrl, mediaWidth, imageFill, focalPoint } = attributes;

		return (
			<MediaContainer
				className="block-library-ainoblocks-featured-content__media-container"
				onSelectMedia={this.onSelectMedia}
				onWidthChange={this.onWidthChange}
				commitWidthChange={this.commitWidthChange}
				{...{ mediaAlt, mediaId, mediaType, mediaUrl, mediaPosition, mediaWidth, imageFill, focalPoint }}
			/>
		);
	}

	render() {
		const {
			attributes,
			className,
			backgroundColor,
			isSelected,
			setAttributes,
			setBackgroundColor,
		} = this.props;
		const {
			align,
			mediaAlt,
			mediaPosition,
			mediaType,
			mediaWidth,
			verticalAlignment,
			mediaUrl,
			imageFill,
			focalPoint,
		} = attributes;

		const temporaryMediaWidth = this.state.mediaWidth;
		const classNames = classnames(className, {
			'has-media-right': 'right' === mediaPosition,
			'is-selected': isSelected,
			[backgroundColor.class]: backgroundColor.class,
			[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
			'is-image-fill': imageFill,
		});
		const widthString = `${temporaryMediaWidth || mediaWidth}%`;
		const style = {
			gridTemplateColumns: 'right' === mediaPosition ? `auto ${widthString}` : `${widthString} auto`,
			backgroundColor: backgroundColor.color,
		};
		const colorSettings = [{
			value: backgroundColor.color,
			onChange: setBackgroundColor,
			label: __('Background Color'),
		}];
		const toolbarControls = [{
			icon: 'align-pull-left',
			title: __('Show media on left'),
			isActive: mediaPosition === 'left',
			onClick: () => setAttributes({ mediaPosition: 'left' }),
		}, {
			icon: 'align-pull-right',
			title: __('Show media on right'),
			isActive: mediaPosition === 'right',
			onClick: () => setAttributes({ mediaPosition: 'right' }),
		}];
		const onMediaAltChange = (newMediaAlt) => {
			setAttributes({ mediaAlt: newMediaAlt });
		};
		const onVerticalAlignmentChange = (alignment) => {
			setAttributes({ verticalAlignment: alignment });
		};
		const mediaTextGeneralSettings = (
			<PanelBody title={__('Featured Content Settings')}>

				{mediaType === 'image' && (<ToggleControl
					label={__('Crop image to fill entire column')}
					checked={imageFill}
					onChange={() => setAttributes({
						imageFill: !imageFill,
					})}
				/>)}
				{imageFill && (<FocalPointPicker
					label={__('Focal Point Picker')}
					url={mediaUrl}
					value={focalPoint}
					onChange={(value) => setAttributes({ focalPoint: value })}
				/>)}
				{mediaType === 'image' && (<TextareaControl
					label={__('Alt Text (Alternative Text)')}
					value={mediaAlt}
					onChange={onMediaAltChange}
				/>)}
			</PanelBody>
		);


		return (
			<Fragment>
				<InspectorControls>
					{mediaTextGeneralSettings}
					<PanelColorSettings
						title={__('Color Settings')}
						initialOpen={false}
						colorSettings={colorSettings}
					/>
				</InspectorControls>
				<BlockControls>
					<Toolbar
						controls={toolbarControls}
					/>
					<BlockVerticalAlignmentToolbar
						onChange={onVerticalAlignmentChange}
						value={verticalAlignment}
					/>
				</BlockControls>
				<div className={classNames} style={style} >
					{this.renderMediaArea()}
					<InnerBlocks
						template={TEMPLATE}
						templateInsertUpdatesSelection={false}
					/>
				</div>
			</Fragment>
		);
	}
}

export default withColors('backgroundColor')(featuredContentEdit);
