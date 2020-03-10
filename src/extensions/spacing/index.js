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
const { Component, Fragment } = wp.element;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	ToggleControl,
} = wp.components;
const {
	createHigherOrderComponent
} = wp.compose;


// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/cover',
	'core/group',
	'ainoblocks/featured-content',
];

/**
 * Add custom attributes to blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings customizes settings.
 */
function spacingAttributes(settings) {

	//check if object exists for old Gutenberg version compatibility
	//add enableSpacingControlOnBlocks restriction
	if (typeof settings.attributes !== 'undefined' && enableSpacingControlOnBlocks.includes(settings.name)) {

		settings.attributes = Object.assign(settings.attributes, {
			spacingTop: {
				type: 'boolean',
				default: false,
			},
			spacingBottom: {
				type: 'boolean',
				default: false,
			}
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
function spacingInspectorControls(BlockEdit) {
	const withInspectorControls = createHigherOrderComponent(BlockEdit => {
		return props => {

			// Do nothing if it's another block than our defined ones.
			if (!enableSpacingControlOnBlocks.includes(props.name)) {
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
				spacingTop,
				spacingBottom,
			} = attributes;

			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody
							title={__('Spacing Settings', 'ainoblocks')}
							initialOpen={false}
						>
							<ToggleControl
								label={__('Spacing top', 'ainoblocks')}
								help={!!spacingTop ? __('Spacing to top is added.', 'ainoblocks') : __('Toggle to add spacing to top.', 'ainoblocks')}
								checked={!!spacingTop}
								onChange={spacingTop => props.setAttributes({ spacingTop })}
							/>
							<ToggleControl
								label={__('Spacing bottom', 'ainoblocks')}
								help={!!spacingBottom ? __('Spacing to bottom is added.', 'ainoblocks') : __('Toggle to add spacing to bottom.', 'ainoblocks')}
								checked={!!spacingBottom}
								onChange={spacingBottom => props.setAttributes({ spacingBottom })}
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
function modifySpacingSaveSettings(el, block, attributes) {

	if (enableSpacingControlOnBlocks.includes(block.name)) {

		const {
			spacingTop,
			spacingBottom,
		} = attributes;

		if (spacingTop) {
			el.props.className = classnames(el.props.className, 'spacing-top-true');
		}
		if (spacingBottom) {
			el.props.className = classnames(el.props.className, 'spacing-bottom-true');
		}
	}

	return el;
}

// Add Filters.
addFilter(
	'blocks.registerBlockType',
	'ainoblocks/spacing-attributes',
	spacingAttributes
);

addFilter(
	'editor.BlockEdit',
	'ainoblocks/spacing-inspector-controls',
	spacingInspectorControls
);

addFilter(
	'blocks.getSaveElement',
	'ainoblocks/modify-spacing-save-settings',
	modifySpacingSaveSettings
);
