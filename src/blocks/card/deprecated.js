deprecated: [
	{
		save( props ) {
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
]