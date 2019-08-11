/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.blockEditor;

export default function save({ attributes }) {

	const {
		containerWidth,
	} = attributes;

	const classes = classnames({
		[`align${containerWidth}`]: containerWidth,
	});

	return (

		<div className={classes}>
			<InnerBlocks.Content />
		</div >
	);
}
