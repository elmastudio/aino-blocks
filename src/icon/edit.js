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
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * Block edit function
 */
export default function iconEdit( { attributes, setAttributes, className } ) {

	const {
		iconType,
		iconSize,
		alignment,
	} = attributes;

	const iconTypeOptions = [
		{ value: 'attachment', label         : __('Attachment', 'ainoblocks') },
		{ value: 'baggage', label            : __('Baggage', 'ainoblocks') },
		{ value: 'bookmark', label           : __('Bookmark', 'ainoblocks') },
		{ value: 'calendar', label           : __('Calendar', 'ainoblocks') },
		{ value: 'clock', label              : __('Clock', 'ainoblocks') },
		{ value: 'flash', label              : __('Flash', 'ainoblocks') },
		{ value: 'heart', label              : __('Heart', 'ainoblocks') },
		{ value: 'pin', label                : __('Pin', 'ainoblocks') },
		{ value: 'quote', label              : __('Quote', 'ainoblocks') },
		{ value: 'trophy', label             : __('Trophy', 'ainoblocks') },
		{ value: 'view', label               : __('View', 'ainoblocks') },
		{ value: 'checkcircle', label        : __('Check Circle', 'ainoblocks') },
		{ value: 'ArrowClockwise', label     : __('Arrow Clockwise', 'ainoblocks') },
		{ value: 'ArrowLeft', label          : __('Arrow Left', 'ainoblocks') },
		{ value: 'ArrowRight', label         : __('Arrow Right', 'ainoblocks') },
		{ value: 'BookmarkSimple', label     : __('Bookmark Simple', 'ainoblocks') },
		{ value: 'BookOpen', label           : __('Book Open', 'ainoblocks') },
		{ value: 'BoundingBox', label        : __('Bounding Box', 'ainoblocks') },
		{ value: 'Camera', label             : __('Camera', 'ainoblocks') },
		{ value: 'CaretDown', label          : __('Caret Down', 'ainoblocks') },
		{ value: 'CaretLeft', label          : __('Caret Left', 'ainoblocks') },
		{ value: 'CaretRight', label         : __('Caret Right', 'ainoblocks') },
		{ value: 'CaretUp', label            : __('Caret Up', 'ainoblocks') },
		{ value: 'ChartBar', label           : __('Chart Bar', 'ainoblocks') },
		{ value: 'CheckCircle', label        : __('Check Circle', 'ainoblocks') },
		{ value: 'Coffee', label             : __('Coffee', 'ainoblocks') },
		{ value: 'Confetti', label           : __('Confetti', 'ainoblocks') },
		{ value: 'CreditCard', label         : __('Credit Card', 'ainoblocks') },
		{ value: 'Crown', label              : __('Crown', 'ainoblocks') },
		{ value: 'Fire', label               : __('Fire', 'ainoblocks') },
		{ value: 'Flag', label               : __('Flag', 'ainoblocks') },
		{ value: 'GlobeStand', label         : __('Globe Stand', 'ainoblocks') },
		{ value: 'GridFour', label           : __('Grid Four', 'ainoblocks') },
		{ value: 'HandPalm', label           : __('Hand Palm', 'ainoblocks') },
		{ value: 'HeartStraight', label      : __('Heart Straight', 'ainoblocks') },
		{ value: 'Hexagon', label            : __('Hexagon', 'ainoblocks') },
		{ value: 'ImageSquare', label        : __('Image Square', 'ainoblocks') },
		{ value: 'Lifebuoy', label           : __('Lifebuoy', 'ainoblocks') },
		{ value: 'MagnifyingGlass', label    : __('Magnifying Glass', 'ainoblocks') },
		{ value: 'CamMapPinLineera', label   : __('Map Pin Line', 'ainoblocks') },
		{ value: 'MapTrifold', label         : __('Map Trifold', 'ainoblocks') },
		{ value: 'Medal', label              : __('Medal', 'ainoblocks') },
		{ value: 'Microphone', label         : __('Microphone', 'ainoblocks') },
		{ value: 'Minus', label              : __('Minus', 'ainoblocks') },
		{ value: 'Moon', label               : __('Moon', 'ainoblocks') },
		{ value: 'MoonStars', label          : __('Moon Stars', 'ainoblocks') },
		{ value: 'Mouse', label              : __('Mouse', 'ainoblocks') },
		{ value: 'Note', label               : __('Note', 'ainoblocks') },
		{ value: 'NumberEight', label        : __('Number Eight', 'ainoblocks') },
		{ value: 'NumberFive', label         : __('Number Five', 'ainoblocks') },
		{ value: 'NumberFour', label         : __('Number Four', 'ainoblocks') },
		{ value: 'NumberNine', label         : __('Number Nine', 'ainoblocks') },
		{ value: 'NumberOne', label          : __('Number One', 'ainoblocks') },
		{ value: 'NumberSeven', label        : __('Number Seven', 'ainoblocks') },
		{ value: 'NumberSix', label          : __('Number Six', 'ainoblocks') },
		{ value: 'NumberThree', label        : __('Number Three', 'ainoblocks') },
		{ value: 'NumberTwo', label          : __('Number Two', 'ainoblocks') },
		{ value: 'NumberZero', label         : __('Number Zero', 'ainoblocks') },
		{ value: 'Paperclip', label          : __('Paperclip', 'ainoblocks') },
		{ value: 'PaperPlaneRight', label    : __('Paper Plane Right', 'ainoblocks') },
		{ value: 'Play', label               : __('Play', 'ainoblocks') },
		{ value: 'Plus', label               : __('Plus', 'ainoblocks') },
		{ value: 'PushPin', label            : __('Push Pin', 'ainoblocks') },
		{ value: 'Quotes', label             : __('Quotes', 'ainoblocks') },
		{ value: 'Rainbow', label            : __('Rainbow', 'ainoblocks') },
		{ value: 'SelectionBackground', label: __('Selection Background', 'ainoblocks') },
		{ value: 'ShieldWarning', label      : __('Shield Warning', 'ainoblocks') },
		{ value: 'Smiley', label             : __('Smiley', 'ainoblocks') },
		{ value: 'SmileySad', label          : __('Smiley Sad', 'ainoblocks') },
		{ value: 'Sparkle', label            : __('Sparkle', 'ainoblocks') },
		{ value: 'Star', label               : __('Star', 'ainoblocks') },
		{ value: 'Storefront', label         : __('Storefront', 'ainoblocks') },
		{ value: 'Sun', label                : __('Sun', 'ainoblocks') },
		{ value: 'Swap', label               : __('Swap', 'ainoblocks') },
		{ value: 'Tag', label                : __('Tag', 'ainoblocks') },
		{ value: 'Timer', label              : __('Timer', 'ainoblocks') },
		{ value: 'Translate', label          : __('Translate', 'ainoblocks') },
		{ value: 'Trash', label              : __('Trash', 'ainoblocks') },
		{ value: 'TrendUp', label            : __('Trend Up', 'ainoblocks') },
		{ value: 'Triangle', label           : __('Triangle', 'ainoblocks') },
		{ value: 'Trophy', label             : __('Trophy', 'ainoblocks') },
		{ value: 'Truck', label              : __('Truck', 'ainoblocks') },
		{ value: 'TShirt', label             : __('TShirt', 'ainoblocks') },
		{ value: 'User', label               : __('User', 'ainoblocks') },
		{ value: 'UserCircle', label         : __('User Circle', 'ainoblocks') },
		{ value: 'UserCirclePlus', label     : __('User Circle Plus', 'ainoblocks') },
		{ value: 'X', label                  : __('X', 'ainoblocks') },
		{ value: 'XCircle', label            : __('X Circle', 'ainoblocks') },
		{ value: 'DotsThree', label          : __('Dots Three', 'ainoblocks') },
		{ value: 'DotsThreeVertical', label: __('Dots Three Vertical', 'ainoblocks') },
		{ value: 'applepay', label         : __('Applepay', 'ainoblocks') },
		{ value: 'applepayIconOnly', label : __('Applepay icon only', 'ainoblocks') },
		{ value: 'dinersclub', label       : __('Dinersclub', 'ainoblocks') },
		{ value: 'dinersclubColor', label  : __('dinersclub color', 'ainoblocks') },
		{ value: 'discover', label         : __('Discover', 'ainoblocks') },
		{ value: 'googlepay', label        : __('Googlepay', 'ainoblocks') },
		{ value: 'googlepayColor', label   : __('Googlepay color', 'ainoblocks') },
		{ value: 'mastercard', label       : __('Mastercard', 'ainoblocks') },
		{ value: 'mastercardColor', label  : __('Mastercard Color', 'ainoblocks') },
		{ value: 'paypal', label           : __('Paypal', 'ainoblocks') },
		{ value: 'paypalColor', label      : __('Paypal color', 'ainoblocks') },
		{ value: 'visa', label             : __('Visa', 'ainoblocks') },
		{ value: 'visaColor', label        : __('Visa color', 'ainoblocks') },
	];

	const icon = (iconType === 'quote') ? (icons.quote)
	: (iconType === 'attachment') ? (icons.attachment)
	: (iconType === 'baggage') ? (icons.baggage)
	: (iconType === 'bookmark') ? (icons.bookmark)
	: (iconType === 'calendar') ? (icons.calendar)
	: (iconType === 'clock') ? (icons.clock)
	: (iconType === 'flash') ? (icons.flash)
	: (iconType === 'heart') ? (icons.heart)
	: (iconType === 'pin') ? (icons.pin)
	: (iconType === 'trophy') ? (icons.trophy)
	: (iconType === 'view') ? (icons.view)
	: (iconType === 'checkcircle') ? (icons.checkcircle)
	: (iconType === 'ArrowClockwise') ? (icons.ArrowClockwise)
	: (iconType === 'ArrowLeft') ? (icons.ArrowLeft)
	: (iconType === 'ArrowRight') ? (icons.ArrowRight)
	: (iconType === 'BookmarkSimple') ? (icons.BookmarkSimple)
	: (iconType === 'BookOpen') ? (icons.BookOpen)
	: (iconType === 'BoundingBox') ? (icons.BoundingBox)
	: (iconType === 'Camera') ? (icons.Camera)
	: (iconType === 'CaretDown') ? (icons.CaretDown)
	: (iconType === 'CaretLeft') ? (icons.CaretLeft)
	: (iconType === 'CaretRight') ? (icons.CaretRight)
	: (iconType === 'CaretUp') ? (icons.CaretUp)
	: (iconType === 'ChartBar') ? (icons.ChartBar)
	: (iconType === 'Check') ? (icons.Check)
	: (iconType === 'CheckCircle') ? (icons.CheckCircle)
	: (iconType === 'Coffee') ? (icons.Coffee)
	: (iconType === 'Confetti') ? (icons.Confetti)
	: (iconType === 'CreditCard') ? (icons.CreditCard)
	: (iconType === 'Crown') ? (icons.Crown)
	: (iconType === 'Fire') ? (icons.Fire)
	: (iconType === 'Flag') ? (icons.Flag)
	: (iconType === 'GlobeStand') ? (icons.GlobeStand)
	: (iconType === 'GridFour') ? (icons.GridFour)
	: (iconType === 'HandPalm') ? (icons.HandPalm)
	: (iconType === 'HeartStraight') ? (icons.HeartStraight)
	: (iconType === 'Hexagon') ? (icons.Hexagon)
	: (iconType === 'ImageSquare') ? (icons.ImageSquare)
	: (iconType === 'Lifebuoy') ? (icons.Lifebuoy)
	: (iconType === 'MagnifyingGlass') ? (icons.MagnifyingGlass)
	: (iconType === 'MapPinLine') ? (icons.MapPinLine)
	: (iconType === 'MapTrifold') ? (icons.MapTrifold)
	: (iconType === 'Medal') ? (icons.Medal)
	: (iconType === 'Microphone') ? (icons.Microphone)
	: (iconType === 'Minus') ? (icons.Minus)
	: (iconType === 'Moon') ? (icons.Moon)
	: (iconType === 'MoonStars') ? (icons.MoonStars)
	: (iconType === 'Mouse') ? (icons.Mouse)
	: (iconType === 'Note') ? (icons.Note)
	: (iconType === 'NumberEight') ? (icons.NumberEight)
	: (iconType === 'NumberFive') ? (icons.NumberFive)
	: (iconType === 'NumberFour') ? (icons.NumberFour)
	: (iconType === 'NumberNine') ? (icons.NumberNine)
	: (iconType === 'NumberOne') ? (icons.NumberOne)
	: (iconType === 'NumberSeven') ? (icons.NumberSeven)
	: (iconType === 'NumberSix') ? (icons.NumberSix)
	: (iconType === 'NumberThree') ? (icons.NumberThree)
	: (iconType === 'NumberTwo') ? (icons.NumberTwo)
	: (iconType === 'NumberZero') ? (icons.NumberZero)
	: (iconType === 'Paperclip') ? (icons.Paperclip)
	: (iconType === 'PaperPlaneRight') ? (icons.PaperPlaneRight)
	: (iconType === 'Play') ? (icons.Play)
	: (iconType === 'Plus') ? (icons.Plus)
	: (iconType === 'PushPin') ? (icons.PushPin)
	: (iconType === 'Quotes') ? (icons.Quotes)
	: (iconType === 'Rainbow') ? (icons.Rainbow)
	: (iconType === 'SelectionBackground') ? (icons.SelectionBackground)
	: (iconType === 'ShieldWarning') ? (icons.ShieldWarning)
	: (iconType === 'Smiley') ? (icons.Smiley)
	: (iconType === 'Sparkle') ? (icons.Sparkle)
	: (iconType === 'Star') ? (icons.Star)
	: (iconType === 'Storefront') ? (icons.Storefront)
	: (iconType === 'Sun') ? (icons.Sun)
	: (iconType === 'Swap') ? (icons.Swap)
	: (iconType === 'Tag') ? (icons.Tag)
	: (iconType === 'Timer') ? (icons.Timer)
	: (iconType === 'Translate') ? (icons.Translate)
	: (iconType === 'Trash') ? (icons.Trash)
	: (iconType === 'TrendUp') ? (icons.TrendUp)
	: (iconType === 'Triangle') ? (icons.Triangle)
	: (iconType === 'Trophy') ? (icons.Trophy)
	: (iconType === 'Truck') ? (icons.Truck)
	: (iconType === 'TShirt') ? (icons.TShirt)
	: (iconType === 'User') ? (icons.User)
	: (iconType === 'UserCircle') ? (icons.UserCircle)
	: (iconType === 'UserCirclePlus') ? (icons.UserCirclePlus)
	: (iconType === 'X') ? (icons.X)
	: (iconType === 'XCircle') ? (icons.XCircle)
	: (iconType === 'DotsThree') ? (icons.DotsThree)
	: (iconType === 'DotsThreeVertical') ? (icons.DotsThreeVertical)
	: (iconType === 'applepay') ? (icons.applepay)
	: (iconType === 'applepayIconOnly') ? (icons.applepayIconOnly)
	: (iconType === 'dinersclub') ? (icons.dinersclub)
	: (iconType === 'dinersclubColor') ? (icons.dinersclubColor)
	: (iconType === 'discover') ? (icons.discover)
	: (iconType === 'googlepay') ? (icons.googlepay)
	: (iconType === 'googlepayColor') ? (icons.googlepayColor)
	: (iconType === 'mastercard') ? (icons.mastercard)
	: (iconType === 'mastercardColor') ? (icons.mastercardColor)
	: (iconType === 'paypal') ? (icons.paypal)
	: (iconType === 'paypalColor') ? (icons.paypalColor)
	: (iconType === 'visa') ? (icons.visa)
	: (iconType === 'visaColor') ? (icons.visaColor)
	
	: (icons.attachment);

	const iconSizeOptions = [
		{ value: 'size-xxxs', label: __('3XS (16px)', 'ainoblocks') },
		{ value: 'size-xxs', label : __('XXS (20px)', 'ainoblocks') },
		{ value: 'size-xs', label  : __('XS (24px)', 'ainoblocks') },
		{ value: 'size-s', label   : __('S (32px)', 'ainoblocks') },
		{ value: 'size-m', label   : __('M (40px)', 'ainoblocks') },
		{ value: 'size-l', label   : __('L (48px)', 'ainoblocks') },
		{ value: 'size-xl', label  : __('L (64px)', 'ainoblocks') },
		{ value: 'size-xxl', label : __('L (80px)', 'ainoblocks') },
		{ value: 'size-xxxl', label: __('L (96px)', 'ainoblocks') }
	];

	const iconClasses = classnames(className, iconType, iconSize, alignment, {});

	const blockProps = useBlockProps( {
		className: iconClasses,
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
				<PanelBody title={__('Icon Settings', 'ainoblocks')}>
					<SelectControl
						label={__('Icon Type', 'ainoblocks')}
						value={iconType}
						options={iconTypeOptions}
						onChange={iconType => setAttributes({ iconType })}
					/>
					<SelectControl
						label={__('Icon Size', 'ainoblocks')}
						value={iconSize}
						options={iconSizeOptions}
						onChange={iconSize => setAttributes({ iconSize })}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{icon}
			</div>
		</Fragment>
	);
}