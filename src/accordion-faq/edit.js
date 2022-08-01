/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 */
import './editor.scss';

/**
 * Block edit function
 */
export default function Edit({ attributes, setAttributes, className }) {

	const {
		question,
		iconPosition,
		border,
	} = attributes;

	const blockClasses = classnames(
		className, iconPosition, {
			'has-border': border,
		}
	);
	
	const blockProps = useBlockProps( {
		className: blockClasses,
	} );

	const ANSWER_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Write an answer ...' } ],
	];

	const iconPositionOptions = [
		{ value: "icon__right", label   : __('right-aligned', 'ainoblocks') },
		{ value: "icon__left", label: __('left-aligned', 'ainoblocks') },
	];

	const [isActive, setActive] = useState(false);

	const toggleClass = () => {setActive(!isActive);};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Accordion FAQ settings', 'ainoblocks')}>
					<SelectControl
						label={__("Icon Position", 'ainoblocks')}
						value={iconPosition}
						options={iconPositionOptions}
						onChange={iconPosition => setAttributes({ iconPosition })}
					/>
					<ToggleControl
						label={__('Bottom Border only', 'ainoblocks')}
						checked={!!border}
						onChange={() => setAttributes({ border: !border })}
						help={!!border ? __('The block has a bottom border only.', 'ainoblocks') : __('Toggle for a border below the block.', 'ainoblocks')}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={`accordion`}>
					<RichText
						tagName='h3'
						allowedFormats={ [ 'core/bold', 'core/italic' ] } 
						value={question}
						className="has-xxs-font-size"
						placeholder={__('Write a question ...', 'ainoblocks')}
						onChange={(value) => setAttributes({ question: value })}
					/>
				</div>

				<div className={`panel`}>
				<InnerBlocks
					template={ ANSWER_TEMPLATE }
				/>
				</div>

			</div>
		</Fragment>
	);
}
