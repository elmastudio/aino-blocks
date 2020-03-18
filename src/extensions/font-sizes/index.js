/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';

/**
 * WordPress Dependencies
 */
const { __, _x } = wp.i18n;

const { addFilter } = wp.hooks;

const { Fragment } = wp.element;

const { InspectorControls, FontSizePicker } = wp.blockEditor;

const { PanelBody, ToggleControl, SelectControl, } = wp.components;

const { createHigherOrderComponent, withState, } = wp.compose;

// Enable custom font size control on the following blocks
const enableFontsizeControlOnBlocks = [
	'core/heading',
];

/**
 * Add custom attributes to blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings customizes settings.
 */
function fontsizeAttributes(settings) {

	//check if object exists for old Gutenberg version compatibility
	//add enableFontsizeControlOnBlocks restriction
	if (typeof settings.attributes !== 'undefined' && enableFontsizeControlOnBlocks.includes(settings.name)) {

		settings.attributes = Object.assign(settings.attributes, {
			headingFontSize: {
				type: 'string',
			},
		});
	}

	return settings;
}

/**
 * Add settings with custom Control Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
function fontsizeInspectorControls(BlockEdit) {
	const withInspectorControls = createHigherOrderComponent(BlockEdit => {
		return props => {

			// Do nothing if it's another block than our defined ones.
			if (!enableFontsizeControlOnBlocks.includes(props.name)) {
				return (
					<BlockEdit {...props} />
				);
			}

			const {
				attributes,
				setAttributes,
				className,
			} = props;

			const {
				fontSize,
			} = attributes;

			const fontSizeVariations = [
				{
					value: 'xxs',
					label: __('XXS', 'ainoblocks')
				},
				{
					value: 'xs',
					label: __('XS', 'ainoblocks')
				},
				{
					value: 's',
					label: __('S', 'ainoblocks')
				},
				{
					value: 'm',
					label: __('M', 'ainoblocks')
				},
				{
					value: 'l',
					label: __('L', 'ainoblocks')
				},
				{
					value: 'xl',
					label: __('XL', 'ainoblocks')
				},
				{
					value: 'xxl',
					label: __('XXL', 'ainoblocks')
				},
			];

			// add font-size- class to block
			if (fontSize) {
				props.attributes.className = `font-size-${fontSize}`;
			}

			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody
							title={__('Font Settings', 'ainoblocks')}
							initialOpen={false}
						>
							<SelectControl
								label={__('Font Size Variation', 'ainoblocks')}
								value={fontSize}
								options={fontSizeVariations}
								onChange={fontSize => setAttributes({ fontSize })}
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment >
			);
		};
	});
	return withInspectorControls(BlockEdit);
}

/**
 * Add custom element class in save element.
 *
 * @param {Object} el         Block element.
 * @param {Object} block      Blocks object.
 * @param {Object} attributes attributes.
 *
 * @return {Object} el Modified block element.
 */
function fontsizeSaveSettings(el, block, attributes) {

	if (enableFontsizeControlOnBlocks.includes(block.name)) {

		const {
			fontSize,
		} = attributes;

		if (fontSize) {
			el.props.className = classnames(el.props.className,
				{
					[`font-size-${fontSize}`]: fontSize,
				}
			);
		}
	}

	return el;
}

// Add Filters.
addFilter(
	'blocks.registerBlockType',
	'ainoblocks/fontsize-attributes',
	fontsizeAttributes
);

addFilter(
	'editor.BlockEdit',
	'ainoblocks/fontsize-inspector-controls',
	fontsizeInspectorControls
);

addFilter(
	'blocks.getSaveElement',
	'ainoblocks/fontsize-save-settings',
	fontsizeSaveSettings
);
