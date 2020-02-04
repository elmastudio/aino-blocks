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
const ALLOWED_BLOCKS = ['core/cover', 'core/image', 'core/spacer', 'core/heading', 'core/paragraph', 'ainoblocks/button', 'ainoblocks/multiple-buttons'];

const TEMPLATE = [
	['ainoblocks/badge', { placeholder: _x('Write Badge text…', 'content placeholder'), content: _x('Write Badge text…', 'content placeholder') }],
	['core/heading', { placeholder: _x('Write heading…', 'content placeholder'), content: _x('Write heading…', 'content placeholder'), className: 'hero-display', }],
	['core/paragraph', { placeholder: _x('Start writing here…', 'content placeholder'), content: _x('Start writing here…', 'content placeholder'), className: 'hero-text', }],
	['ainoblocks/multiple-buttons'],
];

/**
 * Block edit function
 */
class heroEdit extends Component {

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
			mediaOverflow: undefined,
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
		const { mediaAlt, mediaId, mediaPosition, mediaType, mediaUrl, mediaWidth, mediaOverflow, imageFill, focalPoint } = attributes;

		if ('right' === mediaPosition || 'left' === mediaPosition || 'below' === mediaPosition) {
			return (
				<MediaContainer
					className="wp-block-ainoblocks-hero__media"
					onSelectMedia={this.onSelectMedia}
					onWidthChange={this.onWidthChange}
					commitWidthChange={this.commitWidthChange}
					{...{ mediaAlt, mediaId, mediaType, mediaUrl, mediaPosition, mediaWidth, mediaOverflow, imageFill, focalPoint }}
				/>
			);
		}
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
			verticalContentAlignment,
			mediaUrl,
			mediaOverflow,
			imageFill,
			focalPoint,
		} = attributes;

		const temporaryMediaWidth = this.state.mediaWidth;
		const classNames = classnames(className, {
			[`align${align}`]: align,
			'has-media-right': 'right' === mediaPosition,
			'has-media-left': 'left' === mediaPosition,
			'has-media-below': 'below' === mediaPosition,
			'hide-media': 'hide' === mediaPosition,
			'is-selected': isSelected,
			[backgroundColor.class]: backgroundColor.class,
			[`content-vertically-aligned-${verticalContentAlignment}`]: verticalContentAlignment,
			'is-image-fill': imageFill,
			'is-media-overflow': mediaOverflow,
		});
		const widthString = `${temporaryMediaWidth || mediaWidth}%`;
		const styleGridColumns = {
			gridTemplateColumns: 'right' === mediaPosition ? `auto ${widthString}` : `${widthString} auto`,
		};
		const styleBackground = {
			backgroundColor: backgroundColor.color,
		};
		const colorSettings = [{
			value: backgroundColor.color,
			onChange: setBackgroundColor,
			label: __('Background Color', 'ainoblocks'),
		}];
		const toolbarControls = [{
			icon: 'align-pull-right',
			title: __('Show media on right', 'ainoblocks'),
			isActive: mediaPosition === 'right',
			onClick: () => setAttributes({ mediaPosition: 'right' }),
		},
		{
			icon: 'align-pull-left',
			title: __('Show media on left', 'ainoblocks'),
			isActive: mediaPosition === 'left',
			onClick: () => setAttributes({ mediaPosition: 'left' }),
		},
		{
			icon: icons.alignPullBelow,
			title: __('Show media below', 'ainoblocks'),
			isActive: mediaPosition === 'below',
			onClick: () => setAttributes({ mediaPosition: 'below' }),
		},
		{
			icon: icons.mediaHide,
			title: __('Hide media, content only', 'ainoblocks'),
			isActive: mediaPosition === 'hide',
			onClick: () => setAttributes({ mediaPosition: 'hide' }),
		}];
		const onMediaAltChange = (newMediaAlt) => {
			setAttributes({ mediaAlt: newMediaAlt });
		};
		const onVerticalContentAlignmentChange = (alignment) => {
			setAttributes({ verticalContentAlignment: alignment });
		};
		const heroGeneralSettings = (
			<PanelBody title={__('Hero Settings', 'ainoblocks')}>

				{mediaType === 'image' && (<ToggleControl
					label={__('Overflow media to screen edge', 'ainoblocks')}
					checked={mediaOverflow}
					onChange={() => setAttributes({
						mediaOverflow: !mediaOverflow,
					})}
				/>)}
				{mediaType === 'image' && (<TextareaControl
					label={__('Alt Text (Alternative Text)', 'ainoblocks')}
					value={mediaAlt}
					onChange={onMediaAltChange}
					help={__('Describe the purpose of the media. Leave empty if the media is purely decorative.', 'ainoblocks')}
				/>)}
			</PanelBody>
		);

		return (
			<Fragment>
				<InspectorControls>
					{heroGeneralSettings}
					<PanelColorSettings
						title={__('Color Settings', 'ainoblocks')}
						colorSettings={colorSettings}
					/>
				</InspectorControls>
				<BlockControls>
					<Toolbar
						controls={toolbarControls}
					/>
					<BlockVerticalAlignmentToolbar
						onChange={onVerticalContentAlignmentChange}
						value={verticalContentAlignment}
					/>
				</BlockControls>

				<div className={classNames} style={styleBackground}>
					<div className="wp-block-ainoblocks-hero__container" style={styleGridColumns}>
						<InnerBlocks
							template={TEMPLATE}
							templateInsertUpdatesSelection={false}
						/>
						{this.renderMediaArea()}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withColors('backgroundColor')(heroEdit);
