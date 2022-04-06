/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment} = wp.element;
const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
} = wp.components;

/**
 * Block edit function
 */
export default function AuthorEdit( { attributes, setAttributes, className } ) {

	const {
		name,
		info,
		infoTextColor,
		nameTextColor,
		layout,
		alignment,
	} = attributes;

	const TEMPLATE = [
		['ainoblocks/profile-image', {},
		]
	];

	const layoutOptions = [
		{ value: 'stacked', label: __('stacked', 'ainoblocks') },
		{ value: 'floated-left', label: __('floated left', 'ainoblocks') },
		{ value: 'floated-right', label: __('floated right', 'ainoblocks') }
	];

	const authorClasses = classnames(className, layout, alignment, {});

	const blockProps = useBlockProps( {
		className: authorClasses,
	} );

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={alignment => setAttributes({ alignment })}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Author Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Layout', 'ainoblocks')}
						value={layout}
						options={layoutOptions}
						onChange={layout => setAttributes({ layout })}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color', 'ainoblocks')}
					initialOpen={false}
					colorSettings={[
						{
							value: nameTextColor,
							onChange: nameTextColor => {
								setAttributes({ nameTextColor });
							},
							label: __('Text Name', 'ainoblocks'),
						},
						{
							value: infoTextColor,
							onChange: infoTextColor => {
								setAttributes({ infoTextColor });
							},
							label: __('Text Description', 'ainoblocks'),
						},
					]}
				>
				</PanelColorSettings>
			</InspectorControls>

			<div { ...blockProps }>
			<InnerBlocks
				template={ TEMPLATE }
			/>

				<div className={`wp-block-ainoblocks-author__text-wrapper`}>
					<RichText
						multiline="false"
						tagName="span"
						className={classnames(`wp-block-ainoblocks-author__name`, {
							'has-name-text-color': nameTextColor,
						})}
						style={{
							color: nameTextColor,
						}}
						placeholder={__('Name', 'ainoblocks')}
						value={name}
						onChange={(value) => setAttributes({ name: value })}
					/>
					<RichText
						multiline="false"
						tagName="span"
						className={classnames(`wp-block-ainoblocks-author__info`, {
							'has-info-text-color': infoTextColor,
						})}
						style={{
							color: infoTextColor,
						}}
						placeholder={__('Description', 'ainoblocks')}
						value={info}
						onChange={(value) => setAttributes({ info: value })}
					/>
				</div>
			</div>
		</Fragment>
	);
}
