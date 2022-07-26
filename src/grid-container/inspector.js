/**
 * WordPress dependencies
 */
import {
	Component,
	Fragment
} from '@wordpress/element';

import {
	InspectorControls
} from '@wordpress/block-editor';

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
