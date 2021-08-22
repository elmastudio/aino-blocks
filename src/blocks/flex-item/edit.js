/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Fragment } = wp.element;
const { compose, withInstanceId } = wp.compose;
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
export default function flexboxEdit( { attributes, setAttributes, className } ) {

	const {
		align,
		borderRadius,
		shadowName,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const flexitemClasses = classnames(className, {

	});

	const blockProps = useBlockProps( {
		className: flexitemClasses,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Flex Item Settings', 'ainoblocks')}>
	
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}