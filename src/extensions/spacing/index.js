/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * Internal Dependencies
 */
import './styles/style.scss';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;
const { hasBlockSupport } = wp.blocks;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components;
const {
	createHigherOrderComponent,
	compose,
} = wp.compose;

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/cover',
	'core/group',
	'core/columns',
	'ainoblocks/featured-content',
	'ainoblocks/grid-container',
	'ainoblocks/grid-item',
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
			paddingTop: {
				type: 'number',
				default: '0',
			},
			paddingBottom: {
				type: 'number',
				default: '0',
			},
			paddingLeft: {
				type: 'number',
				default: '0',
			},
			paddingRight: {
				type: 'number',
				default: '0',
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
			} = props;

			const {
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
			} = attributes;

			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody
							title={__('Spacing', 'ainoblocks')}
							initialOpen={false}
						>
							<RangeControl
								label={__('Padding Top', 'ainoblocks')}
								value={paddingTop}
								onChange={(paddingTop) => setAttributes({ paddingTop })}
								initialPosition={0}
								min={0}
								max={11}
								allowReset={true}
							/>
							<RangeControl
								label={__('Padding Bottom', 'ainoblocks')}
								value={paddingBottom}
								onChange={(paddingBottom) => setAttributes({ paddingBottom })}
								initialPosition={0}
								min={0}
								max={11}
								allowReset={true}
							/>
							<RangeControl
								label={__('Padding Left', 'ainoblocks')}
								value={paddingLeft}
								onChange={(paddingLeft) => setAttributes({ paddingLeft })}
								initialPosition={0}
								min={0}
								max={11}
								allowReset={true}
							/>
							<RangeControl
								label={__('Padding Right', 'ainoblocks')}
								value={paddingRight}
								onChange={(paddingRight) => setAttributes({ paddingRight })}
								initialPosition={0}
								min={0}
								max={11}
								allowReset={true}
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
 * Override the default block element to add wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const withSpacingClassName = createHigherOrderComponent((BlockListBlock) => {

	return (props) => {

		const {
			attributes,
			className,
		} = props;

		const {
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
		} = attributes;

		const classNames = classnames(className, {
			[`pt-${paddingTop}`]   : paddingTop,
			[`pb-${paddingBottom}`]: paddingBottom,
			[`pl-${paddingLeft}`]  : paddingLeft,
			[`pr-${paddingRight}`] : paddingRight,
		});

		return <BlockListBlock {...props} className={classNames} />;
	};
}, 'withSpacingClassName');

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
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
		} = attributes;

		if (paddingTop) {
			el.props.className = classnames(el.props.className, paddingTop);
		}

		if (paddingBottom) {
			el.props.className = classnames(el.props.className, paddingBottom);
		}

		if (paddingLeft) {
			el.props.className = classnames(el.props.className, paddingLeft);
		}

		if (paddingRight) {
			el.props.className = classnames(el.props.className, paddingRight);
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

addFilter('editor.BlockListBlock',
	'ainoblocks/modify-spacing-save-settings',
	withSpacingClassName
);
