/**
 * WordPress dependencies
 */
const { Path, SVG, G } = wp.components;

const icons = {};

icons.alignPullBelow =
	<SVG className="components-ainoblocks-svg" aria-hidden role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><Path d="M16 11h-12v6h12v-6zM13 7h-6v2h6v-2zM13 3h-6v2h6v-2z"></Path></SVG>

icons.mediaHide =
	<SVG className="components-ainoblocks-svg" aria-hidden role="img" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><Path d="M6.167 6.167h7.667v2.583h-7.667v-2.583z"></Path><Path d="M6.167 11.25h7.667v2.583h-7.667v-2.583z"></Path></SVG>

icons.mediaContainer =
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path d="M18 2l2 4h-2l-2-4h-3l2 4h-2l-2-4h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2zm2 12H10V4.4L11.8 8H20z" /><Path d="M14 20H4V10h3V8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2z" /><Path d="M5 19h8l-1.59-2H9.24l-.84 1.1L7 16.3 5 19z" /></SVG>

export default icons;
