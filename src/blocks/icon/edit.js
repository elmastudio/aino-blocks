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
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
} = wp.components;

/**
 * Block edit function
 */
export default function iconEdit( { attributes, setAttributes, className } ) {

	const {
		iconType,
		iconSize,
		alignment,
	} = attributes;

	const iconSizeOptions = [
		{ value: 'size-s', label: __('small', 'ainoblocks') },
		{ value: 'size-m', label: __('medium', 'ainoblocks') },
		{ value: 'size-l', label: __('large', 'ainoblocks') }
	];

	const iconClasses = classnames(className, iconSize, alignment, {});

	const blockProps = useBlockProps( {
		className: iconClasses,
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
				<PanelBody title={__('Icon Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Icon Size', 'ainoblocks')}
						value={iconSize}
						options={iconSizeOptions}
						onChange={iconSize => setAttributes({ iconSize })}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{icons.quote}
			</div>
		</Fragment>
	);
}
