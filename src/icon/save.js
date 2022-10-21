/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		iconType,
		iconSize,
		alignment,
	} = attributes;

	const iconClasses = classnames(classnames, iconType, iconSize, alignment, {});

	const blockProps = useBlockProps.save( {
		className: iconClasses,
	} );

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
	: (icons.attachment);

	return (
		<div { ...blockProps }>
			{icon}
		</div>
	);
}