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
	InspectorControls,
	InnerBlocks,
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
export default function TestimonialEdit( { attributes, setAttributes, className } ) {

	const {
		style,
	} = attributes;

	const TEMPLATE = [

		['ainoblocks/card', {},
			[
				['ainoblocks/icon'],

				['core/group', {},
			[
				['core/paragraph', { placeholder: 'Write testimonial text...' }],
				['ainoblocks/author'],
			]
		]

			]
		]
	];

	const styleOptions = [
		{ value: 'indent-none', label: __('default', 'ainoblocks') },
		{ value: 'indent-l', label: __('indented left', 'ainoblocks') },
		{ value: 'indent-r', label: __('indented right', 'ainoblocks') }
	];

	const testimonialClasses = classnames(className, style, {});

	const blockProps = useBlockProps( {
		className: testimonialClasses,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Testimonial Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Style', 'ainoblocks')}
						value={style}
						options={styleOptions}
						onChange={style => setAttributes({ style })}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
			<InnerBlocks
				template={ TEMPLATE }
			/>
			</div>
		</Fragment>
	);
}
