/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes, className }) {

	const {
		marginTop,
	} = attributes;

	const blockClasses = classnames(
		className, {
		}
	);

	const blockStyles = {
		marginTop: marginTop ? marginTop + 'px' : undefined,
	};

	const CONTENT_TEMPLATE = [
		[ 'core/heading', { placeholder: 'Heading' } ],
		[ 'core/paragraph', { placeholder: 'Write text' } ],
	];

	const blockProps = useBlockProps( {
		className: blockClasses,
		style: blockStyles,
	} );

	return (
		<Fragment>
			<InspectorControls>
			<PanelBody title={__('Timeline Event settings', 'ainoblocks')}>
			<RangeControl
				label={__('Margin Top', 'ainoblocks')}
				value={marginTop}
				min={-100}
				max={100}
				initialPosition={0}
				allowReset
				onChange={marginTop => setAttributes({ marginTop })}
			/>
			</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					template={ CONTENT_TEMPLATE }
				/>
			</div>
		</Fragment>
	);
}
