/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	RichText,
} = wp.editor;

export default function save({ attributes }) {

	const {
		imgID,
		imgURL,
		imgAlt,
		imgSize,
		imgRadius,
		name,
		info,
		infoTextColor,
		nameTextColor,
		alignment,
		layout,
	} = attributes;

	return (
		<div
			className={classnames(layout, imgSize)}
			style={{ textAlign: alignment }}
		>
			{imgURL && (
				<div className={classnames('wp-block-ainoblocks-author__avatar')}>
					<img style={{
						borderRadius: imgRadius + '%',
					}}
						src={imgURL}
						alt={imgAlt}
					/>
				</div>
			)}
			<div className={'wp-block-ainoblocks-author__text-wrapper'}>
				<div className={'wp-block-ainoblocks-author__author'}>
					{!RichText.isEmpty(name) && (
						<RichText.Content
							tagName="span"
							style={{
								color: nameTextColor,
							}}
							className={'wp-block-ainoblocks-author__name'}
							value={name}
						/>
					)}
					{!RichText.isEmpty(info) && (
						<RichText.Content
							tagName="span"
							style={{
								color: infoTextColor,
							}}
							className={'wp-block-ainoblocks-author__info'}
							value={info}
						/>
					)}
				</div>
			</div>
		</div >
	);
}
