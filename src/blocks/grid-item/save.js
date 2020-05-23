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

export default function save({ attributes, className }) {

	const {
		gridColumnStart,
		gridColumnEnd,
		stackOrder,
		gutter,
	} = attributes;

	const gridStyles = {
		gridColumnStart: gridColumnStart,
		gridColumnEnd: gridColumnEnd,
		zIndex: stackOrder,
	};

	return (
		<div className={classnames(className, {
			'no-gutter': ! gutter,
		})}
		style={gridStyles}
		>
			<InnerBlocks.Content />
		</div >
	);
}
