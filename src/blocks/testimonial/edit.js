/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
} = wp.components;

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
