/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 */
import './editor.scss';

/**
 * Block edit function
 */
export default function BadgeEdit( { attributes, setAttributes, className } ) {

		const {
			content,
			size,
			alignment,
		} = attributes;

		const sizeOptions = [
			{ value: 'size__xxxs', label: __('3XS', 'ainoblocks') },
			{ value: 'size__xxs', label: __('XXS', 'ainoblocks') },
			{ value: 'size__xs', label: __('XS', 'ainoblocks') },
			{ value: 'size__s', label: __('S', 'ainoblocks') },
			{ value: 'size__m', label: __('M', 'ainoblocks') },
			{ value: 'size__l', label: __('L', 'ainoblocks') },
			{ value: 'size__xl', label: __('XL', 'ainoblocks') },
			{ value: 'size__xxl', label: __('XXL', 'ainoblocks') },
			{ value: 'size__xxxl', label: __('3XL', 'ainoblocks') },
			{ value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }
		];

		const badgeClasses = classnames(className, size, {
		});

		const blockProps = useBlockProps( {
			className: badgeClasses,
		} );

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={alignment => setAttributes({ alignment })}
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={__('Badge settings', 'ainoblocks')}>
						<SelectControl
							label={__('Size', 'ainoblocks')}
							value={size}
							options={sizeOptions}
							onChange={size => setAttributes({ size })}
						/>

					</PanelBody>
				</InspectorControls>

				<div { ...blockProps }>
					<RichText
						tagName='span'
						value={content}
						onChange={(value) => setAttributes({ content: value })}
					/>
				</div>
			</Fragment>
		);
}

