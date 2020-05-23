/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			clientId,
			attributes,
			setAttributes,
		} = this.props;

		const {
			items,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Grid Container Settings', 'ainoblocks')}>
						<RangeControl
							label={__('Number of Grid Items', 'ainoblocks')}
							value={items}
							onChange={(nextCount) => {
								setAttributes({
									items: parseInt(nextCount),
								});

								wp.data.dispatch('core/block-editor').selectBlock(clientId);
							}}
							min={1}
							max={10}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
