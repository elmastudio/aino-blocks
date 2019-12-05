/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.editor;

export default function save({ }) {

	return (

		<div>
			<InnerBlocks.Content />
		</div>
	);
}
