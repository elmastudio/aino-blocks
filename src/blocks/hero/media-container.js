/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const {
	BlockControls,
	BlockIcon,
	MediaPlaceholder,
	MediaUpload
} = wp.blockEditor;
const {
	IconButton,
	ResizableBox,
	Toolbar,
	withNotices
} = wp.components;

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * Constants
 */
const ALLOWED_MEDIA_TYPES = ['image', 'video'];

export function imageFillStyles(url, focalPoint) {
	return url ?
		{
			backgroundImage: `url(${url})`,
			backgroundPosition: focalPoint ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : `50% 50%`,
		} :
		{};
}

class MediaContainer extends Component {
	constructor() {
		super(...arguments);
		this.onUploadError = this.onUploadError.bind(this);
	}

	onUploadError(message) {
		const { noticeOperations } = this.props;
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	}

	renderToolbarEditButton() {
		const { mediaId, onSelectMedia } = this.props;
		return (
			<BlockControls>
				<Toolbar>
					<MediaUpload
						onSelect={onSelectMedia}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={mediaId}
						render={({ open }) => (
							<IconButton
								className="components-toolbar__control"
								label={__('Edit media')}
								icon="edit"
								onClick={open}
							/>
						)}
					/>
				</Toolbar>
			</BlockControls>
		);
	}

	renderImage() {
		const { mediaAlt, mediaUrl, className, imageFill, focalPoint } = this.props;
		const backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
		return (
			<Fragment>
				{this.renderToolbarEditButton()}
				<figure style={backgroundStyles}>
					<img src={mediaUrl} alt={mediaAlt} />
				</figure>
			</Fragment>
		);
	}

	renderVideo() {
		const { mediaUrl, className } = this.props;
		return (
			<Fragment>
				{this.renderToolbarEditButton()}
				<figure style={backgroundStyles}>
					<video controls src={mediaUrl} />
				</figure>
			</Fragment>
		);
	}

	renderPlaceholder() {
		const { onSelectMedia, className, noticeUI } = this.props;
		return (
			<div className="wp-block-ainoblocks-hero__placeholder">
				<MediaPlaceholder
					icon={<BlockIcon icon={icons.mediaContainer} />}
					labels={{
						title: __('Media area'),
					}}
					className={className}
					onSelect={onSelectMedia}
					accept="image/*,video/*"
					allowedTypes={ALLOWED_MEDIA_TYPES}
					notices={noticeUI}
					onError={this.onUploadError}
				/>
			</div>
		);
	}

	render() {
		const { mediaPosition, mediaUrl, mediaType, mediaWidth, commitWidthChange, onWidthChange } = this.props;
		if (mediaType && mediaUrl) {
			const onResize = (event, direction, elt) => {
				onWidthChange(parseInt(elt.style.width));
			};
			const onResizeStop = (event, direction, elt) => {
				commitWidthChange(parseInt(elt.style.width));
			};
			const enablePositions = {
				right: mediaPosition === 'left',
				left: mediaPosition === 'right',
				below: mediaPosition === 'below',
			};

			let mediaElement = null;
			switch (mediaType) {
				case 'image':
					mediaElement = this.renderImage();
					break;
				case 'video':
					mediaElement = this.renderVideo();
					break;
			}
			return (
				<ResizableBox
					className="editor-media-container__resizer"
					size={{ width: mediaWidth + '%' }}
					minWidth="10%"
					maxWidth="100%"
					enable={enablePositions}
					onResize={onResize}
					onResizeStop={onResizeStop}
					axis="x"
				>
					{mediaElement}
				</ResizableBox>
			);
		}
		return this.renderPlaceholder();
	}
}

export default withNotices(MediaContainer);
