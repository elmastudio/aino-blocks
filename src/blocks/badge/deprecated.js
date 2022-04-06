/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	useBlockProps,
} = wp.blockEditor;
const {
} = wp.components;

const deprecated = [
	{
		attributes: {
			content: {
				type: 'string'
			},
			size: {
				type: 'string',
				default: 'size__m'
			},
			placeholder: {
				type: 'string'
			},
			backgroundColor: {
				type: 'string'
			},
			textColor: {
				type: 'string'
			},
			borderColor: {
				type: 'string'
			},
			alignment: {
				type: 'string'
			},
			borderRadius: {
				type: "number"
			},
			gradient: {
				type: 'string'
			},
			icon: {
				type: 'boolean'
			}
		},

		save( attributes ) {

			const {
				size,
				textColor,
				icon,
			} = attributes;

			const badgeClasses = classnames(classnames, size, {
				'no-icon': icon,
			});

			const blockProps = useBlockProps.save( {
				className: badgeClasses,
				style: {
					color: textColor,
				},
			} );

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div >
			);
		}
	}
];

export default deprecated;