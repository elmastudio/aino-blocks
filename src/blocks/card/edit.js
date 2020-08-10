/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
class CardEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			align,
			backgroundColor,
			borderColor,
			backgroundRadius,
			shadowName,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
		} = attributes;

		const shadowNameOptions = [
			{ value: "shadow-none", label: __('none', 'ainoblocks') },
			{ value: "shadow-a", label   : __('small', 'ainoblocks') },
			{ value: "shadow-b", label   : __('large', 'ainoblocks') }
		];

		const MIN_BORDER_RADIUS_VALUE = 0;
		const MAX_BORDER_RADIUS_VALUE = 50;
		const INITIAL_BORDER_RADIUS_POSITION = 0;

		const classes = classnames(classnames, shadowName, align, {
			'has-background'        : backgroundColor,
			'has-border'            : borderColor,
			[`pt__${paddingTop}`]   : paddingTop,
			[`pb__${paddingBottom}`]: paddingBottom,
			[`pl__${paddingLeft}`]  : paddingLeft,
			[`pr__${paddingRight}`] : paddingRight,
		});

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Card Settings', 'ainoblocks')}>
						<SelectControl
							label={__("Shadow", "ainoblocks")}
							value={shadowName}
							options={shadowNameOptions}
							onChange={shadowName => setAttributes({ shadowName })}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color Settings', 'ainoblocks')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: backgroundColor => {
									setAttributes({ backgroundColor });
								},
								label: __('Background Color', 'ainoblocks'),
							},
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __('Border Color', 'ainoblocks'),
							},
						]}
					>
					</PanelColorSettings>
					<PanelBody
						title={__('Spacing', 'ainoblocks')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Padding Top', 'ainoblocks')}
							value={paddingTop}
							onChange={(paddingTop) => setAttributes({ paddingTop })}
							initialPosition={3}
							min={0}
							max={11}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Bottom', 'ainoblocks')}
							value={paddingBottom}
							onChange={(paddingBottom) => setAttributes({ paddingBottom })}
							initialPosition={3}
							min={0}
							max={11}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Left', 'ainoblocks')}
							value={paddingLeft}
							onChange={(paddingLeft) => setAttributes({ paddingLeft })}
							initialPosition={3}
							min={0}
							max={11}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Right', 'ainoblocks')}
							value={paddingRight}
							onChange={(paddingRight) => setAttributes({ paddingRight })}
							initialPosition={3}
							min={0}
							max={11}
							allowReset={true}
						/>
					</PanelBody>
					<PanelBody
						title={__('Border', 'ainoblocks')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Border Radius', 'ainoblocks')}
							value={backgroundRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={backgroundRadius => setAttributes({ backgroundRadius })}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={classnames(className, shadowName, align, {
						'has-background': backgroundColor,
						'has-border': borderColor,
						[`pt__${paddingTop}`]: paddingTop,
						[`pb__${paddingBottom}`]: paddingBottom,
						[`pl__${paddingLeft}`]: paddingLeft,
						[`pr__${paddingRight}`]: paddingRight,
					})}
					style={{
						backgroundColor: backgroundColor,
						borderColor: borderColor,
						borderRadius: backgroundRadius,
					}}>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}
export default CardEdit;
