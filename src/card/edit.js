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
	RangeControl,
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
export default function cardEdit( { attributes, setAttributes, className } ) {

	const {
		align,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const shadowNameOptions = [
		{ value: "shadow-none", label: __('none', 'ainoblocks') },
		{ value: "shadow-a", label   : __('a', 'ainoblocks') },
		{ value: "shadow-b", label   : __('b', 'ainoblocks') },
		{ value: "shadow-c", label   : __('c', 'ainoblocks') },
		{ value: "shadow-d", label   : __('d', 'ainoblocks') },
		{ value: "shadow-e", label   : __('e', 'ainoblocks') },
		{ value: "shadow-f", label   : __('f', 'ainoblocks') }
	];

	const cardClasses = classnames(className, shadowName, align, {
		[`pt__${paddingTop}`]: paddingTop,
		[`pb__${paddingBottom}`]: paddingBottom,
		[`pl__${paddingLeft}`]: paddingLeft,
		[`pr__${paddingRight}`]: paddingRight,
	});

	const blockProps = useBlockProps( {
		className: cardClasses,
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