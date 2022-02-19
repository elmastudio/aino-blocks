/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	useBlockProps,
} = wp.blockEditor;

const deprecated = [
	{

		attributes: {
			align: {
				type: 'string'
			},
			backgroundColor: {
				type: 'string'
			},
			borderColor: {
				type: 'string'
			},
			borderRadius: {
				type: 'number',
				default: 0
			},
			shadowName: {
				type: 'string',
				default: "shadow-none"
			},
			paddingTop: {
				type: 'number',
				default: 7
			},
			paddingBottom: {
				type: 'number',
				default: 7
			},
			paddingLeft: {
				type: 'number',
				default: 7
			},
			paddingRight: {
				type: 'number',
				default: 7
			},
			borderTopWidth: {
				type: 'number',
				default: 0
			},
			borderRightWidth: {
				type: 'number',
				default: 0
			},
			borderBottomWidth: {
				type: 'number',
				default: 0
			},
			borderLeftWidth: {
				type: 'number',
				default: 0
			}
		},

		save( attributes ) {

			const {
				backgroundColor,
				borderColor,
				borderRadius,
				shadowName,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				borderTopWidth,
				borderRightWidth,
				borderBottomWidth,
				borderLeftWidth,
				borderWidth,
			} = attributes;

			const cardClasses = classnames(classnames, shadowName, {
				'has-background'        : backgroundColor,
				'has-border'            : borderColor,
				[`pt__${paddingTop}`]   : paddingTop,
				[`pb__${paddingBottom}`]: paddingBottom,
				[`pl__${paddingLeft}`]  : paddingLeft,
				[`pr__${paddingRight}`] : paddingRight,
			});

			const blockProps = useBlockProps.save( {
				className: cardClasses,
				style: {
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderRadius: borderRadius ? borderRadius + 'px' : undefined,
					borderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,
					borderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,
					borderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,
					borderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined,
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
