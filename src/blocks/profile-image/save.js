/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	useBlockProps,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		imgURL,
		imgAlt,
		imgSize,
		imgRadius,
		borderWidth,
	} = attributes;

	const profileImageClasses = classnames(classnames, imgSize, {});

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

	const blockProps = useBlockProps.save( {
		className: profileImageClasses,
		style: profileImageStyles,
	} );

	return (
		<img { ...blockProps }
			src={imgURL}
			alt={imgAlt}
		/>
	);
}