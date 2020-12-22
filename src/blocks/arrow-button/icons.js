/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;

const icons = {};

icons.link =
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z" />
	</SVG>

icons.linkOff =
<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<Path d="M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z" />
</SVG>

icons.arrow =
<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<Path d="M1 8h-1v40h1z"></Path>
<Path d="M40 48v-1h-40v1z"></Path>
<path d="M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z"></path>
</SVG>

export default icons;
