/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
		} = this.props;

		return (
			<Fragment>
				<InspectorControls>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
