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
const { __, _x } = wp.i18n;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;
const { hasBlockSupport } = wp.blocks;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
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
				type: 'string',
				default: 'spacing-top-none',
			},
			spacingBottom: {
				type: 'string',
				default: 'spacing-bottom-none',
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

			const spacingTopValues = [
				{ value: 'spacing-top-none', label: __('none', 'ainoblocks') },
				{ value: 'spacing-top-s', label: __('small', 'ainoblocks') },
				{ value: 'spacing-top-m', label: __('medium', 'ainoblocks') },
				{ value: 'spacing-top-l', label: __('large', 'ainoblocks') }
			];

			const spacingBottomValues = [
				{ value: 'spacing-bottom-none', label: __('none', 'ainoblocks') },
				{ value: 'spacing-bottom-s', label: __('small', 'ainoblocks') },
				{ value: 'spacing-bottom-m', label: __('medium', 'ainoblocks') },
				{ value: 'spacing-bottom-l', label: __('large', 'ainoblocks') }
			];

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
							<SelectControl
								label={__('Spacing top', 'ainoblocks')}
								value={spacingTop}
								options={spacingTopValues}
								onChange={spacingTop => setAttributes({ spacingTop })}
							/>
							<SelectControl
								label={__('Spacing bottom', 'ainoblocks')}
								value={spacingBottom}
								options={spacingBottomValues}
								onChange={spacingBottom => setAttributes({ spacingBottom })}
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

const withCustomClassName = createHigherOrderComponent((BlockListBlock) => {

	return (props) => {

		const {
			attributes,
			setAttributes,
			className,
		} = props;

		const {
			spacingTop,
			spacingBottom,
		} = attributes;

		const classNames = classnames(className, {
			'spacing-top-none'   : 'spacing-top-none'    === spacingTop,
			'spacing-top-s'      : 'spacing-top-s'       === spacingTop,
			'spacing-top-m'      : 'spacing-top-m'       === spacingTop,
			'spacing-top-l'      : 'spacing-top-l'       === spacingTop,
			'spacing-bottom-none': 'spacing-bottom-none' === spacingBottom,
			'spacing-bottom-s'   : 'spacing-bottom-s'    === spacingBottom,
			'spacing-bottom-m'   : 'spacing-bottom-m'    === spacingBottom,
			'spacing-bottom-l'   : 'spacing-bottom-l'    === spacingBottom,
		});

		return <BlockListBlock {...props} className={classNames} />;
	};
}, 'withCustomClassName');

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
			el.props.className = classnames(el.props.className, spacingTop);
		}

		if (spacingBottom) {
			el.props.className = classnames(el.props.className, spacingBottom);
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
	withCustomClassName
);
