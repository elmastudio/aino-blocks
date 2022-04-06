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
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
export default function cardEdit( { attributes, setAttributes, className } ) {

	const {
		align,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		borderTopWidth,
		borderRightWidth,
		borderBottomWidth,
		borderLeftWidth,
	} = attributes;

	const shadowNameOptions = [
		{ value: "shadow-none", label: __('none', 'ainoblocks') },
		{ value: "shadow-a", label   : __('small', 'ainoblocks') },
		{ value: "shadow-b", label   : __('large', 'ainoblocks') }
	];

	const cardClasses = classnames(className, shadowName, align, {
		[`pt__${paddingTop}`]: paddingTop,
		[`pb__${paddingBottom}`]: paddingBottom,
		[`pl__${paddingLeft}`]: paddingLeft,
		[`pr__${paddingRight}`]: paddingRight,
	});

	const blockProps = useBlockProps( {
		className: cardClasses,
		style: {
			borderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,
			borderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,
			borderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,
			borderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined,
		},
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Shadow', 'ainoblocks')}
				initialOpen={false}
				>
					<SelectControl
						label={__("Shadow", "ainoblocks")}
						value={shadowName}
						options={shadowNameOptions}
						onChange={shadowName => setAttributes({ shadowName })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Border Width', 'ainoblocks')}
					initialOpen={false}
				>
					<RangeControl
						label={__('Border Width Top', 'ainoblocks')}
						value={borderTopWidth}
						initialPosition={0}
						min={0}
						max={100}
						allowReset={true}
						onChange={borderTopWidth => setAttributes({ borderTopWidth })}
					/>
					<RangeControl
						label={__('Border Width Right', 'ainoblocks')}
						value={borderRightWidth}
						initialPosition={0}
						min={0}
						max={100}
						allowReset={true}
						onChange={borderRightWidth => setAttributes({ borderRightWidth })}
					/>
					<RangeControl
						label={__('Border Width Bottom', 'ainoblocks')}
						value={borderBottomWidth}
						initialPosition={0}
						min={0}
						max={100}
						allowReset={true}
						onChange={borderBottomWidth => setAttributes({ borderBottomWidth })}
					/>
					<RangeControl
						label={__('Border Width Left', 'ainoblocks')}
						value={borderLeftWidth}
						initialPosition={0}
						min={0}
						max={100}
						allowReset={true}
						onChange={borderLeftWidth => setAttributes({ borderLeftWidth })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Responsive Spacing', 'ainoblocks')}
					initialOpen={false}
				>
					<RangeControl
						label={__('Padding Top', 'ainoblocks')}
						value={paddingTop}
						onChange={(paddingTop) => setAttributes({ paddingTop })}
						initialPosition={0}
						min={0}
						max={19}
						allowReset={true}
					/>
					<RangeControl
						label={__('Padding Bottom', 'ainoblocks')}
						value={paddingBottom}
						onChange={(paddingBottom) => setAttributes({ paddingBottom })}
						initialPosition={7}
						min={0}
						max={19}
						allowReset={true}
					/>
					<RangeControl
						label={__('Padding Left', 'ainoblocks')}
						value={paddingLeft}
						onChange={(paddingLeft) => setAttributes({ paddingLeft })}
						initialPosition={7}
						min={0}
						max={19}
						allowReset={true}
					/>
					<RangeControl
						label={__('Padding Right', 'ainoblocks')}
						value={paddingRight}
						onChange={(paddingRight) => setAttributes({ paddingRight })}
						initialPosition={7}
						min={0}
						max={19}
						allowReset={true}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}