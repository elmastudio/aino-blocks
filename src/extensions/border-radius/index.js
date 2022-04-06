/**
 * External dependencies
 */
import classnames from 'classnames';
import get from 'lodash/get';

/**
 * Internal Dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';

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
	SelectControl,
} = wp.components;
const {
	createHigherOrderComponent,
} = wp.compose;

// Enable border-radius control on the following blocks
const enableBorderRadiusControlOnBlocks = [
	'core/image',
	'core/code',
	'core/preformatted',
	'core/group',
	'ainoblocks/card',
	'ainoblocks/grid-item',
	'ainoblocks/flexbox',
	'ainoblocks/timeline-event-block',
];

/**
 * Add custom attributes to blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings customizes settings.
 */
function borderRadiusAttributes(settings) {

	//check if object exists for old Gutenberg version compatibility
	//add enableBorderRadiusControlOnBlocks restriction
	if (typeof settings.attributes !== 'undefined' && enableBorderRadiusControlOnBlocks.includes(settings.name)) {

		settings.attributes = Object.assign(settings.attributes, {
			borderRadius: {
				type: 'string',
			},
			borderTopLeft: {
				type: 'string',
			},
			borderTopRight: {
				type: 'string',
			},
			borderBottomLeft: {
				type: 'string',
			},
			borderBottomRight: {
				type: 'string',
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
function borderRadiusInspectorControls(BlockEdit) {
	const withInspectorControls = createHigherOrderComponent(BlockEdit => {
		return props => {

			// Do nothing if it's another block than our defined ones.
			if (!enableBorderRadiusControlOnBlocks.includes(props.name)) {
				return (
					<BlockEdit {...props} />
				);
			}

			const {
				attributes,
				setAttributes,
			} = props;

			const {
				borderRadius,
				borderTopLeft,
				borderTopRight,
				borderBottomLeft,
				borderBottomRight,
			} = attributes;

			const borderRadiusOptions = [
				{ value: "none", label: __('Not set', 'ainoblocks') },
				{ value: "xxs", label   : __('SSX', 'ainoblocks') },
				{ value: "xs", label   : __('XS', 'ainoblocks') },
				{ value: "s", label   : __('S', 'ainoblocks') },
				{ value: "m", label   : __('M', 'ainoblocks') },
				{ value: "l", label   : __('L', 'ainoblocks') },
				{ value: "xl", label   : __('XL', 'ainoblocks') },
				{ value: "xxl", label   : __('XXL', 'ainoblocks') },
				{ value: "xxxl", label   : __('3XL', 'ainoblocks') },
				{ value: "xxxxl", label   : __('4XL', 'ainoblocks') },
				{ value: "rounded-full", label   : __('rounded full', 'ainoblocks') }
			];

			return (
				<Fragment>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody
							title={__('Border Radius', 'ainoblocks')}
							initialOpen={false}
						>
							<SelectControl
								label={__('Border Radius (all)', 'ainoblocks')}
								value={borderRadius}
								options={borderRadiusOptions}
								onChange={borderRadius => setAttributes({ borderRadius })}
							/>
								{(borderRadius === 'none' || borderRadius === undefined) && (
							<SelectControl
								label={__('Border Top Left', 'ainoblocks')}
								value={borderTopLeft}
								options={borderRadiusOptions}
								onChange={borderTopLeft => setAttributes({ borderTopLeft })}
							/>
							)}
							{(borderRadius === 'none' || borderRadius === undefined) && (
								<SelectControl
									label={__('Border Top Right', 'ainoblocks')}
									value={borderTopRight}
									options={borderRadiusOptions}
									onChange={borderTopRight => setAttributes({ borderTopRight })}
								/>
							)}
							{(borderRadius === 'none' || borderRadius === undefined) && (
								<SelectControl
								label={__('Border Bottom Right', 'ainoblocks')}
								value={borderBottomRight}
								options={borderRadiusOptions}
								onChange={borderBottomRight => setAttributes({ borderBottomRight })}
							/>
							)}
							{(borderRadius === 'none' || borderRadius === undefined) && (
								<SelectControl
									label={__('Border Bottom Left', 'ainoblocks')}
									value={borderBottomLeft}
									options={borderRadiusOptions}
									onChange={borderBottomLeft => setAttributes({ borderBottomLeft })}
								/>
							)}
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

const withBorderRadiusClassName = createHigherOrderComponent((BlockListBlock) => {

	return (props) => {

		const {
			attributes,
			className,
		} = props;

		const {
			borderRadius,
			borderTopLeft,
			borderTopRight,
			borderBottomLeft,
			borderBottomRight,
		} = attributes;

		const classNames = classnames(className, {
			[`btl__${borderTopLeft}`] : borderTopLeft ? borderTopLeft : undefined,
			[`btr__${borderTopRight}`] : borderTopRight ? borderTopRight : undefined,
			[`bbl__${borderBottomLeft}`]: borderBottomLeft ? borderBottomLeft : undefined,
			[`bbr__${borderBottomRight}`] : borderBottomRight ? borderBottomRight : undefined,
			[`br-all__${borderRadius}`] : borderRadius ? borderRadius : undefined,
		});

		return <BlockListBlock {...props} className={classNames} />;
	};
}, 'withBorderRadiusClassName');

/**
 * Add custom element class in save element.
 *
 * @param {Object} el         Block element.
 * @param {Object} block      Blocks object.
 * @param {Object} attributes attributes.
 *
 * @return {Object} el Modified block element.
 */
function modifyBorderRadiusSaveSettings(el, block, attributes) {

	if (enableBorderRadiusControlOnBlocks.includes(block.name)) {

		const {
			borderRadius,
			borderTopLeft,
			borderTopRight,
			borderBottomLeft,
			borderBottomRight,
		} = attributes;

		if (borderTopLeft) {
			el.props.className = classnames(el.props.className, `btl__${borderTopLeft}`);
		}

		if (borderTopRight) {
			el.props.className = classnames(el.props.className, `btr__${borderTopRight}`);
		}

		if (borderBottomLeft) {
			el.props.className = classnames(el.props.className, `bbl__${borderBottomLeft}`);
		}

		if (borderBottomRight) {
			el.props.className = classnames(el.props.className, `bbr__${borderBottomRight}`);
		}

		if (borderRadius) {
			el.props.className = classnames(el.props.className, `br-all__${borderRadius}`);
		}
	}

	return el;
}

// Add Filters.
addFilter(
	'blocks.registerBlockType',
	'ainoblocks/border-radius-attributes',
	borderRadiusAttributes
);

addFilter(
	'editor.BlockEdit',
	'ainoblocks/border-radius-inspector-controls',
	borderRadiusInspectorControls
);

addFilter(
	'blocks.getSaveElement',
	'ainoblocks/modify-border-radius-save-settings',
	modifyBorderRadiusSaveSettings
);

addFilter('editor.BlockListBlock',
	'ainoblocks/modify-border-radius-save-settings',
	withBorderRadiusClassName
);
