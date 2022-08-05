/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		flexDirection,
		flexDirectionTablet,
		flexDirectionMobile,
		fullWidth,
		fullWidthTablet,
		fullWidthMobile,
		gapDesktop,
		gapTablet,
		gapMobile,
	} = attributes;

	const buttonsClasses = classnames(classnames, flexDirectionMobile, flexDirectionTablet, flexDirection, {
		'm__stretch': fullWidthMobile ? fullWidthMobile : undefined,
		't__stretch': fullWidthTablet ? fullWidthTablet : undefined,
		'd__stretch': fullWidth ? fullWidth : undefined,
		'm__gap': gapMobile ? gapMobile : undefined,
		't__gap': gapTablet ? gapTablet : undefined,
		'd__gap': gapDesktop ? gapDesktop : undefined,
	});

	const blockProps = useBlockProps.save( {
		className: buttonsClasses,
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div {...innerBlocksProps} />
	);
}
