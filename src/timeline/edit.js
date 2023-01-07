/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	ToolbarButton,
} from '@wordpress/components';
import { justifyCenter, justifyLeft, justifyRight } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes, className }) {

	const {
		eventPosition,
		eventOverlap,
		markerPosition,
	} = attributes;

	const CONTENT_TEMPLATE = [
		[ 'ainoblocks/timeline-event' ],
	];

	const markerPositionOptions = [
		{ value: 'marker-top', label: __('top', 'ainoblocks') },
		{ value: 'marker-center', label: __('center', 'ainoblocks') },
		{ value: 'marker-bottom', label: __('bottom', 'ainoblocks') }
	];

	const blockClasses = classnames(
		className, eventPosition, markerPosition, {
			'overlap': eventOverlap,
		}
	);

	const blockProps = useBlockProps( {
		className: blockClasses,
	} );

	return (
		<Fragment>
			<BlockControls group="block">
				<ToolbarButton
					icon={ justifyLeft }
					title={ __( 'Show event on right' ) }
					isActive={ eventPosition === 'right' }
					onClick={ () => setAttributes( { eventPosition: 'right' } ) }
				/>
				<ToolbarButton
					icon={ justifyRight }
					title={ __( 'Show event on left' ) }
					isActive={ eventPosition === 'left' }
					onClick={ () =>
						setAttributes( { eventPosition: 'left' } )
					}
				/>
				<ToolbarButton
					icon={ justifyCenter }
					title={ __( 'Show event center' ) }
					isActive={ eventPosition === 'center' }
					onClick={ () =>
						setAttributes( { eventPosition: 'center' } )
					}
				/>
			</BlockControls>
			<InspectorControls>
			<PanelBody title={__('Timeline settings', 'ainoblocks')}>
				<ToggleControl
					label={__('Event overlap', 'ainoblocks')}
					checked={!!eventOverlap}
					onChange={() => setAttributes({ eventOverlap: !eventOverlap })}
					help={!!eventOverlap ? __('Event overlaps timeline.', 'ainoblocks') : __('Toggle for event to overlap timeline.', 'ainoblocks')}
				/>
				<SelectControl
					label={__('Marker Position', 'ainoblocks')}
					value={markerPosition}
					options={markerPositionOptions}
					onChange={markerPosition => setAttributes({ markerPosition })}
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
