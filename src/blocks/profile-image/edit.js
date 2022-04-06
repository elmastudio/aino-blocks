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
const { __ } = wp.i18n;
const { Fragment} = wp.element;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} = wp.blockEditor;
const {
	Button,
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
export default function ProfileImageEdit( { attributes, setAttributes, className, isSelected } ) {

	const {
		imgID,
		imgURL,
		imgAlt,
		imgSize,
		imgRadius,
		borderWidth,
	} = attributes;

	const onSelectImage = img => {
		setAttributes({
			imgID: img.id,
			imgURL: img.url,
			imgAlt: img.alt,
		});
	};
	const onRemoveImage = () => {
		setAttributes({
			imgID: null,
			imgURL: null,
			imgAlt: null,
		});
	}

	const imgSizeOptions = [
		{ value: 'img-s', label: __('small', 'ainoblocks') },
		{ value: 'img-l', label: __('large', 'ainoblocks') }
	];

	const profileImageClasses = classnames(className, imgSize, {});

	const profileImageSmallStyles = {
		width: 'calc(40px + ' + borderWidth + 'px * 2)',
		padding: borderWidth ? borderWidth + 'px' : undefined,
		borderRadius: imgRadius + '%',
	};

	const profileImageLargeStyles = {
		width: 'calc(144px + ' + borderWidth + 'px * 2)',
		padding: borderWidth ? borderWidth + 'px' : undefined,
		borderRadius: imgRadius + '%',
	};

	const isImgSizeLarge = 'img-l' === imgSize;

	const profileImageStyles = isImgSizeLarge ? profileImageLargeStyles : profileImageSmallStyles;

	const blockProps = useBlockProps( {
		className: profileImageClasses,
		style: profileImageStyles,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Profile Image Settings', 'ainoblocks')}>
					<RangeControl
						label={__('Image Radius', 'ainoblocks')}
						value={imgRadius}
						onChange={(imgRadius) => setAttributes({ imgRadius })}
						min={0}
						max={100}
					/>
					<SelectControl
						label={__('Image Size', 'ainoblocks')}
						value={imgSize}
						options={imgSizeOptions}
						onChange={imgSize => setAttributes({ imgSize })}
					/>
					<RangeControl
						label={__('Border Width', 'ainoblocks')}
						value={borderWidth}
						initialPosition={0}
						min={0}
						max={100}
						allowReset={false}
						onChange={borderWidth => setAttributes({ borderWidth })}
					/>
				</PanelBody>
			</InspectorControls>
				{!imgID ? (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							type="image"
							value={imgID}
							render={({ open }) => (
								<Button
									className={"button button-large"}
									onClick={open}
								>
									{icons.upload}
									{__(' Upload Image', 'ainoblocks')}
								</Button>
							)}
						>
						</MediaUpload>
					</MediaUploadCheck>
				) : (
						<div>
							<img { ...blockProps }
								src={imgURL}
								alt={imgAlt}
							/>
							{isSelected ? (
								<Button
									className="remove-image"
									onClick={onRemoveImage}
								>
									{icons.remove}
								</Button>

							) : null}
						</div>
					)}
		</Fragment>
	);
}
