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
const {InspectorControls} = wp.blockEditor;
const {
	createHigherOrderComponent,
	compose,
	withState,
} = wp.compose;
const {
	PanelBody,
	SelectControl,
} = wp.components;

// Enable animation control on the following blocks
const enableAnimationControlOnBlocks = [
	'core/heading',
	'core/paragraph',
	'core/image',
	'core/gallery',
	'core/separator',
	'ainoblocks/multiple-buttons',
	'ainoblocks/arrow-button',
	'ainoblocks/divider',
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
function animationAttributes(settings) {

	//check if object exists for old Gutenberg version compatibility
	//add enableAnimationControlOnBlocks restriction
	if (typeof settings.attributes !== 'undefined' && enableAnimationControlOnBlocks.includes(settings.name)) {

		settings.attributes = Object.assign(settings.attributes, {
			animationStyle: {
				type: 'string',
			},
			animationDelay: {
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
function animationInspectorControls(BlockEdit) {
	const withInspectorControls = createHigherOrderComponent(BlockEdit => {
		return props => {

			// Do nothing if it's another block than our defined ones.
			if (!enableAnimationControlOnBlocks.includes(props.name)) {
				return (
					<BlockEdit {...props} />
				);
			}

			const {
				attributes,
				setAttributes,
			} = props;

			const {
				animationStyle,
				animationDelay,
			} = attributes;

			const animationStyleOptions = [{
				value: 'none',
				label: __('none', 'ainoblocks')
			},
			{
				value: 'bounce',
				label: __('bounce', 'ainoblocks')
			},
			{
				value: 'flash',
				label: __('flash', 'ainoblocks')
			},
			{
				value: 'pulse',
				label: __('pulse', 'ainoblocks')
			},
			{
				value: 'rubberBand',
				label: __('rubberBand', 'ainoblocks')
			},
			{
				value: 'shakeX',
				label: __('shakeX', 'ainoblocks')
			},
			{
				value: 'shakeY',
				label: __('shakeY', 'ainoblocks')
			},
			{
				value: 'headShake',
				label: __('headShake', 'ainoblocks')
			},
			{
				value: 'swing',
				label: __('swing', 'ainoblocks')
			},
			{
				value: 'tada',
				label: __('tada', 'ainoblocks')
			}
			];

			const animationDelayOptions = [{
				value: '0',
				label: __('0', 'ainoblocks')
			},
			{
				value: '100',
				label: __('100', 'ainoblocks')
			},
			{
				value: '200',
				label: __('200', 'ainoblocks')
			},
			{
				value: '300',
				label: __('300', 'ainoblocks')
			},
			{
				value: '400',
				label: __('400', 'ainoblocks')
			},
			{
				value: '500',
				label: __('500', 'ainoblocks')
			},
			{
				value: '600',
				label: __('600', 'ainoblocks')
			},
			{
				value: '700',
				label: __('700', 'ainoblocks')
			},
			{
				value: '800',
				label: __('800', 'ainoblocks')
			},
			{
				value: '1000',
				label: __('1000', 'ainoblocks')
			}
			];

			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody
							title={__('Scroll Animations', 'ainoblocks')}
							initialOpen={false}
						>
							<SelectControl
								label={__('Style', 'ainoblocks')}
								help={__('This is a helper text....', 'ainoblocks')}
								value={animationStyle}
								options={animationStyleOptions}
								onChange={animationStyle => setAttributes({ animationStyle })}
							/>
							<SelectControl
								label={__('Delay in ms', 'ainoblocks')}
								help={__('This is a helper text....', 'ainoblocks')}
								value={animationDelay}
								options={animationDelayOptions}
								onChange={animationDelay => setAttributes({ animationDelay })}
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment>
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

const withAnimationClassName = createHigherOrderComponent((BlockListBlock) => {

	return (props) => {

		const {
			attributes,
			className,
			setState,
		} = props;

		const {
			animationStyle,
			animationDelay,
		} = attributes;

		const classes = classnames(className, 'animate__animated', {
			[`animate__${animationStyle}`] : animationStyle ? animationStyle : undefined,
			[`animate-delay__${animationDelay}`] : animationDelay ? animationDelay : undefined,
		});

		return <BlockListBlock {...props} className={classes} />;
	};
}, 'withAnimationClassName');

/**
 * Add custom element class in save element.
 *
 * @param {Object} el         Block element.
 * @param {Object} block      Blocks object.
 * @param {Object} attributes attributes.
 *
 * @return {Object} el Modified block element.
 */
function modifyAnimationSaveSettings(el, block, attributes) {

	if (enableAnimationControlOnBlocks.includes(block.name)) {

		const {
			animationStyle,
			animationDelay,
		} = attributes;

		if (animationStyle) {
			el.props.className = classnames(el.props.className, `animate__animated`, `animate__${animationStyle}`);
		}

		if (animationDelay) {
			el.props.className = classnames(el.props.className, `animate-delay__${animationDelay}`);
		}
	}

	return el;
}

// Add Filters.
addFilter(
	'blocks.registerBlockType',
	'ainoblocks/animation-attributes',
	animationAttributes
);

addFilter(
	'editor.BlockEdit',
	'ainoblocks/animation-inspector-controls',
	animationInspectorControls
);

addFilter(
	'blocks.getSaveElement',
	'ainoblocks/modify-animation-save-settings',
	modifyAnimationSaveSettings
);

addFilter('editor.BlockListBlock',
	'ainoblocks/modify-animation-save-settings',
	withAnimationClassName
);
