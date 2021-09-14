/**
 * External dependencies
 */
import { omit } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} = wp.blockEditor;
const {
	Path,
	SVG,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

const attributes = {
	"content": {
		"type": "string"
	},
	"size": {
		"type": "string",
		"default": "size__m"
	},
	"placeholder": {
		"type": "string"
	},
	"backgroundColor": {
		"type": "string"
	},
	"textColor": {
		"type": "string"
	},
	"borderColor": {
		"type": "string"
	},
	"alignment": {
		"type": "string"
	},
	"borderRadius": {
		"type": "number"
	},
	"gradient": {
		"type": "string"
	},
	"icon": {
		"type": "boolean",
		"default": false
	}
};

deprecated: [
	{
		save( attributes ) {

			const {
				content,
				size,
				backgroundColor,
				textColor,
				borderColor,
				alignment,
				borderRadius,
				icon,
			} = attributes;

			const contentClasses = classnames('badge-content', {
				'has-text-color': textColor,
				'has-border-color': borderColor,
			});

			const contentStyles = {
				color: textColor,
				background: backgroundColor,
				borderColor: borderColor,
				borderTopLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
				borderBottomLeftRadius: borderRadius && ! icon ? borderRadius + 'px' : undefined,
				borderTopRightRadius: borderRadius ? borderRadius + 'px' : undefined,
				borderBottomRightRadius: borderRadius ? borderRadius + 'px' : undefined,
			};

			const iconClasses = classnames('badge-icon');

			const iconStyles = {
				fill: textColor,
				borderColor: borderColor,
				background: backgroundColor,
				borderTopLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
				borderBottomLeftRadius: borderRadius ? borderRadius + 'px' : undefined,
			};

			const badgeClasses = classnames(classnames, size, {
				'no-icon': icon,
			});

			const blockProps = useBlockProps.save( {
				className: badgeClasses,
				style: {
					color: textColor,
				},
			} );

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div >
			);
		}
	}
]