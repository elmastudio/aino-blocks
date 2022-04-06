/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import './styles/style.scss';
import './styles/editor.scss';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
} = wp.components;
const {
	createHigherOrderComponent
} = wp.compose;

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/cover',
	'core/group',
	'core/columns',
	'core/heading',
	'core/paragraph',
	'core/image',
	'core/gallery',
	'core/quote',
	'core/list',
	'core/spacer',
	'ainoblocks/multiple-buttons',
	'ainoblocks/divider',
	'ainoblocks/grid-container',
	'ainoblocks/grid-item',
	'ainoblocks/flexbox',
	'ainoblocks/flex-item',
	'ainoblocks/testimonial',
	'ainoblocks/timeline-block',
	'ainoblocks/timeline-event-block',
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
			},
			paddingBottom: {
				type: 'number',
			},
			paddingLeft: {
				type: 'number',
			},
			paddingRight: {
				type: 'number',
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
							initialOpen={true}
						>
							<RangeControl
								label={__('Padding Top', 'ainoblocks')}
								value={paddingTop}
								onChange={(paddingTop) => setAttributes({ paddingTop })}
								min={0}
								max={19}
								allowReset={true}
								resetFallbackValue={0}
							/>
							<RangeControl
								label={__('Padding Bottom', 'ainoblocks')}
								value={paddingBottom}
								onChange={(paddingBottom) => setAttributes({ paddingBottom })}
								min={0}
								max={19}
								allowReset={true}
								resetFallbackValue={0}
							/>
							<RangeControl
								label={__('Padding Left', 'ainoblocks')}
								value={paddingLeft}
								onChange={(paddingLeft) => setAttributes({ paddingLeft })}
								min={0}
								max={19}
								allowReset={true}
								resetFallbackValue={0}
							/>
							<RangeControl
								label={__('Padding Right', 'ainoblocks')}
								value={paddingRight}
								onChange={(paddingRight) => setAttributes({ paddingRight })}
								min={0}
								max={19}
								allowReset={true}
								resetFallbackValue={0}
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
			[`pt__${paddingTop}`] : paddingTop ? paddingTop : undefined,
			[`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
			[`pl__${paddingLeft}`] : paddingLeft ? paddingLeft : undefined,
			[`pr__${paddingRight}`] : paddingRight ? paddingRight : undefined,
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
			el.props.className = classnames(el.props.className, `pt__${paddingTop}`);
		}

		if (paddingBottom) {
			el.props.className = classnames(el.props.className, `pb__${paddingBottom}`);
		}

		if (paddingLeft) {
			el.props.className = classnames(el.props.className, `pl__${paddingLeft}`);
		}

		if (paddingRight) {
			el.props.className = classnames(el.props.className, `pr__${paddingRight}`);
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
