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

	const iconTypeOptions = [
		{ value: 'attachment', label: __('Attachment', 'ainoblocks') },
		{ value: 'baggage', label: __('Baggage', 'ainoblocks') },
		{ value: 'bookmark', label: __('Bookmark', 'ainoblocks') },
		{ value: 'calendar', label: __('Calendar', 'ainoblocks') },
		{ value: 'clock', label: __('Clock', 'ainoblocks') },
		{ value: 'flash', label: __('Flash', 'ainoblocks') },
		{ value: 'heart', label: __('Heart', 'ainoblocks') },
		{ value: 'pin', label: __('Pin', 'ainoblocks') },
		{ value: 'quote', label: __('Quote', 'ainoblocks') },
		{ value: 'trophy', label: __('Trophy', 'ainoblocks') },
		{ value: 'view', label: __('View', 'ainoblocks') },
	];

	const icon = (iconType === 'quote') ? (icons.quote)
	: (iconType === 'attachment') ? (icons.attachment)
	: (iconType === 'baggage') ? (icons.baggage)
	: (iconType === 'bookmark') ? (icons.bookmark)
	: (iconType === 'calendar') ? (icons.calendar)
	: (iconType === 'clock') ? (icons.clock)
	: (iconType === 'flash') ? (icons.flash)
	: (iconType === 'heart') ? (icons.heart)
	: (iconType === 'pin') ? (icons.pin)
	: (iconType === 'trophy') ? (icons.trophy)
	: (iconType === 'view') ? (icons.view)
	: (icons.attachment);

	const iconSizeOptions = [
		{ value: 'size-xs', label: __('XS', 'ainoblocks') },
		{ value: 'size-s', label: __('S', 'ainoblocks') },
		{ value: 'size-m', label: __('M', 'ainoblocks') },
		{ value: 'size-l', label: __('L', 'ainoblocks') }
	];

	const iconClasses = classnames(className, iconType, iconSize, alignment, {});

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
						label={__('Icon Type', 'ainoblocks')}
						value={iconType}
						options={iconTypeOptions}
						onChange={iconType => setAttributes({ iconType })}
					/>
					<SelectControl
						label={__('Icon Size', 'ainoblocks')}
						value={iconSize}
						options={iconSizeOptions}
						onChange={iconSize => setAttributes({ iconSize })}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{icon}
			</div>
		</Fragment>
	);
}
