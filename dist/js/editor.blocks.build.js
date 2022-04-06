/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerAinoblocksBlocks\": () => (/* binding */ registerAinoblocksBlocks)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.js */ \"./src/i18n.js\");\n/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_i18n_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_block_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/block-category */ \"./src/utils/block-category.js\");\n/* harmony import */ var _extensions_border_radius__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/border-radius */ \"./src/extensions/border-radius/index.js\");\n/* harmony import */ var _extensions_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/spacing */ \"./src/extensions/spacing/index.js\");\n/* harmony import */ var _blocks_grid_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/grid-item */ \"./src/blocks/grid-item/index.js\");\n/* harmony import */ var _blocks_grid_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/grid-container */ \"./src/blocks/grid-container/index.js\");\n/* harmony import */ var _blocks_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/hero */ \"./src/blocks/hero/index.js\");\n/* harmony import */ var _blocks_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/card */ \"./src/blocks/card/index.js\");\n/* harmony import */ var _blocks_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/badge */ \"./src/blocks/badge/index.js\");\n/* harmony import */ var _blocks_author__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/author */ \"./src/blocks/author/index.js\");\n/* harmony import */ var _blocks_profile_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/profile-image */ \"./src/blocks/profile-image/index.js\");\n/* harmony import */ var _blocks_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/icon */ \"./src/blocks/icon/index.js\");\n/* harmony import */ var _blocks_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/testimonial */ \"./src/blocks/testimonial/index.js\");\n/* harmony import */ var _blocks_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/button */ \"./src/blocks/button/index.js\");\n/* harmony import */ var _blocks_multiple_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/multiple-buttons */ \"./src/blocks/multiple-buttons/index.js\");\n/* harmony import */ var _blocks_arrow_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/arrow-button */ \"./src/blocks/arrow-button/index.js\");\n/* harmony import */ var _blocks_sticker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/sticker */ \"./src/blocks/sticker/index.js\");\n/* harmony import */ var _blocks_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/divider */ \"./src/blocks/divider/index.js\");\n/* harmony import */ var _blocks_flexbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/flexbox */ \"./src/blocks/flexbox/index.js\");\n/* harmony import */ var _blocks_flex_item__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/flex-item */ \"./src/blocks/flex-item/index.js\");\n\n\n\n/**\n * WordPress dependencies\n */\nregisterBlockType;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n// Register block category\n\n\n\n// Register extensions\n\n\n\n// Register blocks\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Function to register an individual block.\n *\n * @param {Object} block The block to be registered.\n *\n */\nvar registerBlock = function registerBlock(block) {\n\tif (!block) {\n\t\treturn;\n\t}\n\n\tvar metadata = block.metadata,\n\t    settings = block.settings,\n\t    name = block.name;\n\n\n\tregisterBlockType(name, (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, metadata, settings));\n};\n\n/**\n * Function to register blocks.\n */\nvar registerAinoblocksBlocks = function registerAinoblocksBlocks() {\n\t[_blocks_author__WEBPACK_IMPORTED_MODULE_10__, _blocks_profile_image__WEBPACK_IMPORTED_MODULE_11__, _blocks_icon__WEBPACK_IMPORTED_MODULE_12__, _blocks_badge__WEBPACK_IMPORTED_MODULE_9__, _blocks_button__WEBPACK_IMPORTED_MODULE_14__, _blocks_card__WEBPACK_IMPORTED_MODULE_8__, _blocks_divider__WEBPACK_IMPORTED_MODULE_18__, _blocks_grid_container__WEBPACK_IMPORTED_MODULE_6__, _blocks_grid_item__WEBPACK_IMPORTED_MODULE_5__, _blocks_hero__WEBPACK_IMPORTED_MODULE_7__, _blocks_multiple_buttons__WEBPACK_IMPORTED_MODULE_15__, _blocks_arrow_button__WEBPACK_IMPORTED_MODULE_16__, _blocks_sticker__WEBPACK_IMPORTED_MODULE_17__, _blocks_testimonial__WEBPACK_IMPORTED_MODULE_13__, _blocks_flexbox__WEBPACK_IMPORTED_MODULE_19__, _blocks_flex_item__WEBPACK_IMPORTED_MODULE_20__].forEach(registerBlock);\n};\n\nregisterAinoblocksBlocks();\n\n//# sourceURL=webpack://ainoblocks/./src/blocks.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/arrow-button/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrowButtonEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/babel-runtime/helpers/slicedToArray.js\");\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"./src/blocks/arrow-button/icons.js\");\n\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment,\n    useCallback = _wp$element.useCallback,\n    useState = _wp$element.useState;\nvar _wp$compose = wp.compose,\n    compose = _wp$compose.compose,\n    withInstanceId = _wp$compose.withInstanceId;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl,\n    Popover = _wp$components.Popover,\n    ToolbarButton = _wp$components.ToolbarButton,\n    ToolbarGroup = _wp$components.ToolbarGroup,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG,\n    __experimentalNumberControl = _wp$components.__experimentalNumberControl;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    BlockIcon = _wp$blockEditor.BlockIcon,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Constants\n */\nvar NEW_TAB_REL = 'noreferrer noopener';\n\n/**\n * Block edit function\n */\nfunction arrowButtonEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected,\n\t    opensInNewTab = _ref.opensInNewTab;\n\tvar url = attributes.url,\n\t    label = attributes.label,\n\t    link = attributes.link,\n\t    text = attributes.text,\n\t    linkTarget = attributes.linkTarget,\n\t    rel = attributes.rel,\n\t    size = attributes.size,\n\t    uppercase = attributes.uppercase,\n\t    iconPositionAfter = attributes.iconPositionAfter,\n\t    iconRotation = attributes.iconRotation,\n\t    lineHeight = attributes.lineHeight,\n\t    textColor = attributes.textColor,\n\t    iconColor = attributes.iconColor;\n\n\n\tvar sizeOptions = [{ value: 'size__ssx', label: __('SSX', 'ainoblocks') }, { value: 'size__sx', label: __('SX', 'ainoblocks') }, { value: 'size__s', label: __('S', 'ainoblocks') }, { value: 'size__m', label: __('M', 'ainoblocks') }, { value: 'size__l', label: __('L', 'ainoblocks') }, { value: 'size__xl', label: __('XL', 'ainoblocks') }, { value: 'size__xxl', label: __('XXL', 'ainoblocks') }, { value: 'size__xxxl', label: __('3XL', 'ainoblocks') }, { value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }];\n\n\tvar MIN_ICON_ROTATION_VALUE = 0;\n\tvar MAX_ICON_ROTATION_VALUE = 360;\n\tvar INITIAL_ICON_ROTATION_POSITION = 0;\n\n\tvar iconClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-ainoblocks-arrow-button__icon');\n\n\tvar iconStyles = {\n\t\ttransform: iconRotation ? 'rotate(' + iconRotation + 'deg)' : undefined,\n\t\tfill: iconColor\n\t};\n\n\tvar linkStyles = (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n\t\tcolor: textColor,\n\t\tlineHeight: lineHeight\n\t}, 'lineHeight', lineHeight ? lineHeight : undefined);\n\n\tvar onSetLinkRel = useCallback(function (value) {\n\t\tsetAttributes({ rel: value });\n\t}, [setAttributes]);\n\n\tvar onToggleOpenInNewTab = useCallback(function (value) {\n\t\tvar newLinkTarget = value ? '_blank' : undefined;\n\n\t\tvar updatedRel = rel;\n\t\tif (newLinkTarget && !rel) {\n\t\t\tupdatedRel = NEW_TAB_REL;\n\t\t} else if (!newLinkTarget && rel === NEW_TAB_REL) {\n\t\t\tupdatedRel = undefined;\n\t\t}\n\n\t\tsetAttributes({\n\t\t\tlinkTarget: newLinkTarget,\n\t\t\trel: updatedRel\n\t\t});\n\t}, [rel, setAttributes]);\n\n\tvar _useState = useState(false),\n\t    _useState2 = (0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n\t    isURLPickerOpen = _useState2[0],\n\t    setIsURLPickerOpen = _useState2[1];\n\n\tvar urlIsSet = !!url;\n\tvar urlIsSetandSelected = urlIsSet && isSelected;\n\n\tvar openLinkControl = function openLinkControl() {\n\t\tsetIsURLPickerOpen(true);\n\t\treturn false; // prevents default behaviour for event\n\t};\n\n\tvar unlinkButton = function unlinkButton() {\n\t\tsetAttributes({\n\t\t\turl: undefined,\n\t\t\tlinkTarget: undefined,\n\t\t\trel: undefined\n\t\t});\n\t\tsetIsURLPickerOpen(false);\n\t};\n\n\tvar linkControl = (isURLPickerOpen || urlIsSetandSelected) && wp.element.createElement(\n\t\tPopover,\n\t\t{\n\t\t\tposition: 'bottom center',\n\t\t\tonClose: function onClose() {\n\t\t\t\treturn setIsURLPickerOpen(false);\n\t\t\t}\n\t\t},\n\t\twp.element.createElement(__experimentalLinkControl, {\n\t\t\tclassName: 'wp-block-navigation-link__inline-link-input',\n\t\t\tvalue: { url: url, opensInNewTab: opensInNewTab },\n\t\t\tonChange: function onChange(_ref2) {\n\t\t\t\tvar _ref2$url = _ref2.url,\n\t\t\t\t    newURL = _ref2$url === undefined ? '' : _ref2$url,\n\t\t\t\t    newOpensInNewTab = _ref2.opensInNewTab;\n\n\t\t\t\tsetAttributes({ url: newURL });\n\n\t\t\t\tif (opensInNewTab !== newOpensInNewTab) {\n\t\t\t\t\tonToggleOpenInNewTab(newOpensInNewTab);\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t);\n\n\tvar arrowButtonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, size, {});\n\tvar blockProps = useBlockProps({\n\t\tclassName: arrowButtonClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tToolbarGroup,\n\t\t\t\tnull,\n\t\t\t\t!urlIsSet && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link }),\n\t\t\t\t\ttitle: __('Link', 'ainoblocks'),\n\t\t\t\t\tonClick: openLinkControl\n\t\t\t\t}),\n\t\t\t\turlIsSetandSelected && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].linkOff }),\n\t\t\t\t\ttitle: __('Unlink', 'ainoblocks'),\n\t\t\t\t\tonClick: unlinkButton,\n\t\t\t\t\tisActive: true\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\tlinkControl,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Arrow Button Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Size', 'ainoblocks'),\n\t\t\t\t\tvalue: size,\n\t\t\t\t\toptions: sizeOptions,\n\t\t\t\t\tonChange: function onChange(size) {\n\t\t\t\t\t\treturn setAttributes({ size: size });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__experimentalNumberControl, {\n\t\t\t\t\tlabel: __('Line height', 'ainoblocks'),\n\t\t\t\t\tisShiftStepEnabled: true,\n\t\t\t\t\tonChange: function onChange(lineHeight) {\n\t\t\t\t\t\treturn setAttributes({ lineHeight: lineHeight });\n\t\t\t\t\t},\n\t\t\t\t\tstep: 0.1,\n\t\t\t\t\tvalue: lineHeight\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Icon Rotation in degrees', 'ainoblocks'),\n\t\t\t\t\tvalue: iconRotation,\n\t\t\t\t\tmin: MIN_ICON_ROTATION_VALUE,\n\t\t\t\t\tmax: MAX_ICON_ROTATION_VALUE,\n\t\t\t\t\tinitialPosition: INITIAL_ICON_ROTATION_POSITION,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tonChange: function onChange(iconRotation) {\n\t\t\t\t\t\treturn setAttributes({ iconRotation: iconRotation });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Icon Position', 'ainoblocks'),\n\t\t\t\t\tchecked: !!iconPositionAfter,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ iconPositionAfter: !iconPositionAfter });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!iconPositionAfter ? __('Icon is placed after text.', 'ainoblocks') : __('Toggle to place icon after text.', 'ainoblocks')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Uppercase Text', 'ainoblocks'),\n\t\t\t\t\tchecked: !!uppercase,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ uppercase: !uppercase });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color Settings', 'ainoblocks'),\n\t\t\t\tinitialOpen: false,\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: textColor,\n\t\t\t\t\tonChange: function onChange(textColor) {\n\t\t\t\t\t\tsetAttributes({ textColor: textColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Text Color', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: iconColor,\n\t\t\t\t\tonChange: function onChange(iconColor) {\n\t\t\t\t\t\tsetAttributes({ iconColor: iconColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Icon Color', 'ainoblocks')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorAdvancedControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tlabel: __('Link rel'),\n\t\t\t\tvalue: rel || '',\n\t\t\t\tonChange: onSetLinkRel\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\t!iconPositionAfter && wp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: iconClasses, style: iconStyles },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tSVG,\n\t\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48' },\n\t\t\t\t\twp.element.createElement(Path, { d: 'M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z' })\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-ainoblocks-arrow-button__link', {\n\t\t\t\t\t\t'is-uppercase': uppercase,\n\t\t\t\t\t\t'icon-after': iconPositionAfter\n\t\t\t\t\t}),\n\t\t\t\t\tstyle: linkStyles\n\t\t\t\t},\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tvalue: text,\n\t\t\t\t\tplaceholder: __(\"Add text…\", 'ainoblocks'),\n\t\t\t\t\ttagName: 'span',\n\t\t\t\t\tmultiline: 'false',\n\t\t\t\t\tformattingControls: ['bold', 'italic'],\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\tsetAttributes({ text: value });\n\t\t\t\t\t},\n\t\t\t\t\trel: 'noopener noreferrer',\n\t\t\t\t\topensInNewTab: linkTarget === '_blank',\n\t\t\t\t\tonToggleOpenInNewTab: onToggleOpenInNewTab\n\t\t\t\t})\n\t\t\t),\n\t\t\ticonPositionAfter && wp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: iconClasses, style: iconStyles },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tSVG,\n\t\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48' },\n\t\t\t\t\twp.element.createElement(Path, { d: 'M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z' })\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/edit.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/icon.js":
/*!*****************************************!*\
  !*** ./src/blocks/arrow-button/icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#ffd512\", d: \"M2.887 3.831c2.455-2.455 6.398-2.515 8.926-0.18l0.187 0.18 9.113 9.113-9.113 9.113-9.113-9.113c-2.455-2.455-2.515-6.398-0.18-8.926l0.18-0.187z\" }),\n  wp.element.createElement(\"path\", { fill: \"#dab400\", d: \"M12 12.944c2.516 2.516 6.596 2.516 9.113 0s2.516-6.596 0-9.113c-2.516-2.516-6.596-2.516-9.113 0s-2.516 6.596 0 9.113z\" }),\n  wp.element.createElement(\"path\", { fill: \"#ffe053\", d: \"M12 3.831l9.113 9.113-0.023 0.023c-2.518 2.494-6.581 2.486-9.090-0.023-2.455-2.455-2.515-6.398-0.18-8.926l0.18-0.187z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/icon.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/icons.js":
/*!******************************************!*\
  !*** ./src/blocks/arrow-button/icons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\nvar icons = {};\n\nicons.link = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z\" })\n);\n\nicons.linkOff = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z\" })\n);\n\nicons.arrow = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 48 48\" },\n\twp.element.createElement(Path, { d: \"M1 8h-1v40h1z\" }),\n\twp.element.createElement(Path, { d: \"M40 48v-1h-40v1z\" }),\n\twp.element.createElement(\"path\", { d: \"M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z\" })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/icons.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/index.js":
/*!******************************************!*\
  !*** ./src/blocks/arrow-button/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/arrow-button/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/arrow-button/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/arrow-button/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/arrow-button/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/arrow-button/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/arrow-button/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('A special button within an arrow icon and a unique hover style.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('button', 'ainoblocks'), __('link', 'ainoblocks'), __('cta', 'ainoblocks'), __('icon', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\texample: {\n\t\tattributes: {\n\t\t\tclassName: 'is-style-primary',\n\t\t\tlabel: __('Tell me more', 'ainoblocks'),\n\t\t\tsize: 'size__xxl',\n\t\t\ticonPositionAfter: true\n\t\t}\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/index.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/arrow-button/save.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n/**\n * Block edit function\n */\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar url = attributes.url,\n\t    text = attributes.text,\n\t    linkTarget = attributes.linkTarget,\n\t    size = attributes.size,\n\t    uppercase = attributes.uppercase,\n\t    iconPositionAfter = attributes.iconPositionAfter,\n\t    lineHeight = attributes.lineHeight,\n\t    iconRotation = attributes.iconRotation,\n\t    textColor = attributes.textColor,\n\t    iconColor = attributes.iconColor,\n\t    rel = attributes.rel;\n\n\n\tvar buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-arrow-button__link', {\n\t\t'is-uppercase': uppercase,\n\t\t'icon-after': iconPositionAfter\n\t});\n\n\tvar iconClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-arrow-button__icon');\n\n\tvar iconStyles = {\n\t\ttransform: iconRotation ? 'rotate(' + iconRotation + 'deg)' : undefined,\n\t\tfill: iconColor\n\t};\n\n\tvar linkStyles = {\n\t\tcolor: textColor,\n\t\tlineHeight: lineHeight ? lineHeight : undefined\n\t};\n\n\tvar wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), size, {});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tuseBlockProps.save({ className: wrapperClasses }),\n\t\t!iconPositionAfter && wp.element.createElement(\n\t\t\t'span',\n\t\t\t{ className: iconClasses, style: iconStyles },\n\t\t\twp.element.createElement(\n\t\t\t\tSVG,\n\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48' },\n\t\t\t\twp.element.createElement(Path, { d: 'M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z' })\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(RichText.Content, {\n\t\t\ttagName: 'a',\n\t\t\tvalue: text,\n\t\t\tclassName: buttonClasses,\n\t\t\tstyle: linkStyles,\n\t\t\thref: url,\n\t\t\ttarget: linkTarget,\n\t\t\trel: rel\n\t\t}),\n\t\ticonPositionAfter && wp.element.createElement(\n\t\t\t'span',\n\t\t\t{ className: iconClasses, style: iconStyles },\n\t\t\twp.element.createElement(\n\t\t\t\tSVG,\n\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48' },\n\t\t\t\twp.element.createElement(Path, { d: 'M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z' })\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/save.js?");

/***/ }),

/***/ "./src/blocks/author/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/author/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthorEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n/**\n * Block edit function\n */\n\nfunction AuthorEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar name = attributes.name,\n\t    info = attributes.info,\n\t    infoTextColor = attributes.infoTextColor,\n\t    nameTextColor = attributes.nameTextColor,\n\t    layout = attributes.layout,\n\t    alignment = attributes.alignment;\n\n\n\tvar TEMPLATE = [['ainoblocks/profile-image', {}]];\n\n\tvar layoutOptions = [{ value: 'stacked', label: __('stacked', 'ainoblocks') }, { value: 'floated-left', label: __('floated left', 'ainoblocks') }, { value: 'floated-right', label: __('floated right', 'ainoblocks') }];\n\n\tvar authorClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, layout, alignment, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: authorClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: alignment,\n\t\t\t\tonChange: function onChange(alignment) {\n\t\t\t\t\treturn setAttributes({ alignment: alignment });\n\t\t\t\t}\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Author Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Layout', 'ainoblocks'),\n\t\t\t\t\tvalue: layout,\n\t\t\t\t\toptions: layoutOptions,\n\t\t\t\t\tonChange: function onChange(layout) {\n\t\t\t\t\t\treturn setAttributes({ layout: layout });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color', 'ainoblocks'),\n\t\t\t\tinitialOpen: false,\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: nameTextColor,\n\t\t\t\t\tonChange: function onChange(nameTextColor) {\n\t\t\t\t\t\tsetAttributes({ nameTextColor: nameTextColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Text Name', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: infoTextColor,\n\t\t\t\t\tonChange: function onChange(infoTextColor) {\n\t\t\t\t\t\tsetAttributes({ infoTextColor: infoTextColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Text Description', 'ainoblocks')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wp-block-ainoblocks-author__text-wrapper' },\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tmultiline: 'false',\n\t\t\t\t\ttagName: 'span',\n\t\t\t\t\tclassName: classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-author__name', {\n\t\t\t\t\t\t'has-name-text-color': nameTextColor\n\t\t\t\t\t}),\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: nameTextColor\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('Name', 'ainoblocks'),\n\t\t\t\t\tvalue: name,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ name: value });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tmultiline: 'false',\n\t\t\t\t\ttagName: 'span',\n\t\t\t\t\tclassName: classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-author__info', {\n\t\t\t\t\t\t'has-info-text-color': infoTextColor\n\t\t\t\t\t}),\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: infoTextColor\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('Description', 'ainoblocks'),\n\t\t\t\t\tvalue: info,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ info: value });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/edit.js?");

/***/ }),

/***/ "./src/blocks/author/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/author/icon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#cfb092\", d: \"M2 6h20v10h-20z\" }),\n  wp.element.createElement(\"path\", { fill: \"#725232\", d: \"M17 6c0 2.761-2.239 5-5 5s-5-2.239-5-5c0-2.761 2.239-5 5-5s5 2.239 5 5z\" }),\n  wp.element.createElement(\"path\", { fill: \"#44311e\", d: \"M22 23c0-5.523-4.477-10-10-10s-10 4.477-10 10h20z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/icon.js?");

/***/ }),

/***/ "./src/blocks/author/index.js":
/*!************************************!*\
  !*** ./src/blocks/author/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/author/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/author/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/author/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/author/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/author/styles/style.scss\");\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/index.js?");

/***/ }),

/***/ "./src/blocks/author/save.js":
/*!***********************************!*\
  !*** ./src/blocks/author/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar name = attributes.name,\n\t    info = attributes.info,\n\t    infoTextColor = attributes.infoTextColor,\n\t    nameTextColor = attributes.nameTextColor,\n\t    alignment = attributes.alignment,\n\t    layout = attributes.layout;\n\n\n\tvar authorClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), layout, alignment, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: authorClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'wp-block-ainoblocks-author__text-wrapper' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wp-block-ainoblocks-author__author' },\n\t\t\t\t!RichText.isEmpty(name) && wp.element.createElement(RichText.Content, {\n\t\t\t\t\ttagName: 'span',\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: nameTextColor\n\t\t\t\t\t},\n\t\t\t\t\tclassName: 'wp-block-ainoblocks-author__name',\n\t\t\t\t\tvalue: name\n\t\t\t\t}),\n\t\t\t\t!RichText.isEmpty(info) && wp.element.createElement(RichText.Content, {\n\t\t\t\t\ttagName: 'span',\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: infoTextColor\n\t\t\t\t\t},\n\t\t\t\t\tclassName: 'wp-block-ainoblocks-author__info',\n\t\t\t\t\tvalue: info\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/save.js?");

/***/ }),

/***/ "./src/blocks/badge/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/badge/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BadgeEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n/**\n * Block edit function\n */\n\nfunction BadgeEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar content = attributes.content,\n\t    size = attributes.size,\n\t    alignment = attributes.alignment;\n\n\n\tvar sizeOptions = [{ value: 'size__xxxs', label: __('3XS', 'ainoblocks') }, { value: 'size__xxs', label: __('XXS', 'ainoblocks') }, { value: 'size__xs', label: __('XS', 'ainoblocks') }, { value: 'size__s', label: __('S', 'ainoblocks') }, { value: 'size__m', label: __('M', 'ainoblocks') }, { value: 'size__l', label: __('L', 'ainoblocks') }, { value: 'size__xl', label: __('XL', 'ainoblocks') }, { value: 'size__xxl', label: __('XXL', 'ainoblocks') }, { value: 'size__xxxl', label: __('3XL', 'ainoblocks') }, { value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }];\n\n\tvar badgeClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, size, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: badgeClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: alignment,\n\t\t\t\tonChange: function onChange(alignment) {\n\t\t\t\t\treturn setAttributes({ alignment: alignment });\n\t\t\t\t}\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Badge settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Size', 'ainoblocks'),\n\t\t\t\t\tvalue: size,\n\t\t\t\t\toptions: sizeOptions,\n\t\t\t\t\tonChange: function onChange(size) {\n\t\t\t\t\t\treturn setAttributes({ size: size });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: 'span',\n\t\t\t\tvalue: content,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\treturn setAttributes({ content: value });\n\t\t\t\t}\n\t\t\t})\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/edit.js?");

/***/ }),

/***/ "./src/blocks/badge/icon.js":
/*!**********************************!*\
  !*** ./src/blocks/badge/icon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#4a40da\", d: \"M8 16h8v8l-4-2.5-4 2.5z\" }),\n  wp.element.createElement(\"path\", { fill: \"#2920a4\", d: \"M12 0c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.523 0-10-4.477-10-10s4.477-10 10-10z\" }),\n  wp.element.createElement(\"path\", { fill: \"#8e88e8\", d: \"M12 6c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" }),\n  wp.element.createElement(\"path\", { fill: \"#100d42\", d: \"M16.001 16l0 3.168c-1.225 0.535-2.578 0.832-4 0.832s-2.776-0.297-4.001-0.832l0.001-3.168h8z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/icon.js?");

/***/ }),

/***/ "./src/blocks/badge/index.js":
/*!***********************************!*\
  !*** ./src/blocks/badge/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/badge/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/badge/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/badge/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/badge/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/badge/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/badge/styles/editor.scss\");\n/**\n* WordPress dependencies\n*/\nvar __ = wp.i18n.__;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('This is a badge block.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('badge', 'ainoblocks'), __('notice', 'ainoblocks'), __('highlight', 'ainoblocks'), __('info', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\texample: {\n\t\tname: 'ainoblocks/badge',\n\t\tattributes: {\n\t\t\tcontent: __('Start something new', 'ainoblocks'),\n\t\t\tbackgroundColor: '#AE9FF2',\n\t\t\tborderRadius: 50\n\t\t}\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/index.js?");

/***/ }),

/***/ "./src/blocks/badge/save.js":
/*!**********************************!*\
  !*** ./src/blocks/badge/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar content = attributes.content,\n\t    size = attributes.size;\n\n\n\tvar badgeClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), size, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: badgeClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(RichText.Content, {\n\t\t\ttagName: 'span',\n\t\t\tvalue: content\n\t\t})\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/save.js?");

/***/ }),

/***/ "./src/blocks/button/deprecated.js":
/*!*****************************************!*\
  !*** ./src/blocks/button/deprecated.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/button/block.json\");\n\n/**\n * External dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nvar deprecated = [{\n\tattributes: (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _block_json__WEBPACK_IMPORTED_MODULE_3__.attributes, {\n\t\tlinkBackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tlinkTextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t}\n\t}),\n\n\tsave: function save(_ref) {\n\t\tvar attributes = _ref.attributes;\n\t\tvar linkBackgroundColor = attributes.linkBackgroundColor,\n\t\t    linkTextColor = attributes.linkTextColor,\n\t\t    backgroundColor = attributes.backgroundColor,\n\t\t    textColor = attributes.textColor,\n\t\t    url = attributes.url,\n\t\t    label = attributes.label,\n\t\t    linkTarget = attributes.linkTarget,\n\t\t    rel = attributes.rel,\n\t\t    size = attributes.size,\n\t\t    borderRadius = attributes.borderRadius,\n\t\t    borderWidth = attributes.borderWidth,\n\t\t    uppercase = attributes.uppercase;\n\n\n\t\tvar buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-ainoblocks-button__link', size, borderRadius, {\n\t\t\t'has-custom-background': backgroundColor,\n\t\t\t'has-custom-text-color': textColor,\n\t\t\t'has-link-bg': linkBackgroundColor,\n\t\t\t'is-uppercase': uppercase,\n\t\t\t'no-border-radius': borderRadius === 0,\n\t\t\t'no-border': borderWidth === 0\n\t\t});\n\n\t\tvar styleButton = {\n\t\t\tbackgroundColor: backgroundColor,\n\t\t\tcolor: textColor,\n\t\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined,\n\t\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined\n\t\t};\n\n\t\tvar styleBg = {\n\t\t\tbackgroundColor: linkBackgroundColor,\n\t\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined\n\t\t};\n\n\t\tvar wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((classnames__WEBPACK_IMPORTED_MODULE_1___default()), {});\n\n\t\tvar blockProps = useBlockProps.save({\n\t\t\tclassName: wrapperClasses,\n\t\t\tstyle: styleBg\n\t\t});\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(RichText.Content, {\n\t\t\t\ttagName: 'a',\n\t\t\t\tclassName: buttonClasses,\n\t\t\t\thref: url,\n\t\t\t\tstyle: styleButton,\n\t\t\t\tvalue: label,\n\t\t\t\ttarget: linkTarget,\n\t\t\t\trel: rel\n\t\t\t})\n\t\t);\n\t}\n}];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/deprecated.js?");

/***/ }),

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buttonEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/babel-runtime/helpers/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"./src/blocks/button/icons.js\");\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    useCallback = _wp$element.useCallback,\n    useState = _wp$element.useState;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    ToolbarGroup = _wp$components.ToolbarGroup,\n    ToolbarButton = _wp$components.ToolbarButton,\n    Popover = _wp$components.Popover,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    BlockIcon = _wp$blockEditor.BlockIcon,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl;\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Constants\n */\nvar NEW_TAB_REL = 'noreferrer noopener';\n\n/**\n * Block edit function\n */\nfunction buttonEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected,\n\t    opensInNewTab = _ref.opensInNewTab;\n\tvar label = attributes.label,\n\t    url = attributes.url,\n\t    linkTarget = attributes.linkTarget,\n\t    rel = attributes.rel,\n\t    size = attributes.size,\n\t    borderRadius = attributes.borderRadius,\n\t    borderWidth = attributes.borderWidth,\n\t    uppercase = attributes.uppercase;\n\n\n\tvar sizeOptions = [{ value: 'size__xxxs', label: __('3XS', 'ainoblocks') }, { value: 'size__xxs', label: __('XXS', 'ainoblocks') }, { value: 'size__xs', label: __('XS', 'ainoblocks') }, { value: 'size__s', label: __('S', 'ainoblocks') }, { value: 'size__m', label: __('M', 'ainoblocks') }, { value: 'size__l', label: __('L', 'ainoblocks') }, { value: 'size__xl', label: __('XL', 'ainoblocks') }, { value: 'size__xxl', label: __('XXL', 'ainoblocks') }, { value: 'size__xxxl', label: __('3XL', 'ainoblocks') }, { value: 'size__xxxxl', label: __('4XL', 'ainoblocks') }];\n\n\tvar styleButton = {\n\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined\n\t};\n\n\tvar styleBg = {\n\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined\n\t};\n\n\tvar onSetLinkRel = useCallback(function (value) {\n\t\tsetAttributes({ rel: value });\n\t}, [setAttributes]);\n\n\tvar onToggleOpenInNewTab = useCallback(function (value) {\n\t\tvar newLinkTarget = value ? '_blank' : undefined;\n\n\t\tvar updatedRel = rel;\n\t\tif (newLinkTarget && !rel) {\n\t\t\tupdatedRel = NEW_TAB_REL;\n\t\t} else if (!newLinkTarget && rel === NEW_TAB_REL) {\n\t\t\tupdatedRel = undefined;\n\t\t}\n\n\t\tsetAttributes({\n\t\t\tlinkTarget: newLinkTarget,\n\t\t\trel: updatedRel\n\t\t});\n\t}, [rel, setAttributes]);\n\n\tvar _useState = useState(false),\n\t    _useState2 = (0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n\t    isURLPickerOpen = _useState2[0],\n\t    setIsURLPickerOpen = _useState2[1];\n\n\tvar urlIsSet = !!url;\n\tvar urlIsSetandSelected = urlIsSet && isSelected;\n\n\tvar openLinkControl = function openLinkControl() {\n\t\tsetIsURLPickerOpen(true);\n\t\treturn false; // prevents default behaviour for event\n\t};\n\n\tvar unlinkButton = function unlinkButton() {\n\t\tsetAttributes({\n\t\t\turl: undefined,\n\t\t\tlinkTarget: undefined,\n\t\t\trel: undefined\n\t\t});\n\t\tsetIsURLPickerOpen(false);\n\t};\n\n\tvar linkControl = (isURLPickerOpen || urlIsSetandSelected) && wp.element.createElement(\n\t\tPopover,\n\t\t{\n\t\t\tposition: 'bottom center',\n\t\t\tonClose: function onClose() {\n\t\t\t\treturn setIsURLPickerOpen(false);\n\t\t\t}\n\t\t},\n\t\twp.element.createElement(__experimentalLinkControl, {\n\t\t\tclassName: 'wp-block-navigation-link__inline-link-input',\n\t\t\tvalue: { url: url, opensInNewTab: opensInNewTab },\n\t\t\tonChange: function onChange(_ref2) {\n\t\t\t\tvar _ref2$url = _ref2.url,\n\t\t\t\t    newURL = _ref2$url === undefined ? '' : _ref2$url,\n\t\t\t\t    newOpensInNewTab = _ref2.opensInNewTab;\n\n\t\t\t\tsetAttributes({ url: newURL });\n\n\t\t\t\tif (opensInNewTab !== newOpensInNewTab) {\n\t\t\t\t\tonToggleOpenInNewTab(newOpensInNewTab);\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t);\n\n\tvar buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: buttonClasses,\n\t\tstyle: styleBg\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tToolbarGroup,\n\t\t\t\tnull,\n\t\t\t\t!urlIsSet && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"].link }),\n\t\t\t\t\ttitle: __('Link', 'ainoblocks'),\n\t\t\t\t\tonClick: openLinkControl\n\t\t\t\t}),\n\t\t\t\turlIsSetandSelected && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"].linkOff }),\n\t\t\t\t\ttitle: __('Unlink', 'ainoblocks'),\n\t\t\t\t\tonClick: unlinkButton,\n\t\t\t\t\tisActive: true\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\tlinkControl,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Button Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Size', 'ainoblocks'),\n\t\t\t\t\tvalue: size,\n\t\t\t\t\toptions: sizeOptions,\n\t\t\t\t\tonChange: function onChange(size) {\n\t\t\t\t\t\treturn setAttributes({ size: size });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Radius', 'ainoblocks'),\n\t\t\t\t\tvalue: borderRadius,\n\t\t\t\t\tonChange: function onChange(borderRadius) {\n\t\t\t\t\t\treturn setAttributes({ borderRadius: borderRadius });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 200,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width', 'ainoblocks'),\n\t\t\t\t\tvalue: borderWidth,\n\t\t\t\t\tonChange: function onChange(borderWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderWidth: borderWidth });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 20,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Uppercase Text', 'ainoblocks'),\n\t\t\t\t\tchecked: !!uppercase,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ uppercase: !uppercase });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorAdvancedControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tlabel: __('Link rel'),\n\t\t\t\tvalue: rel || '',\n\t\t\t\tonChange: onSetLinkRel\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tplaceholder: __(\"Add text…\", 'ainoblocks'),\n\t\t\t\tvalue: label,\n\t\t\t\ttagName: 'div',\n\t\t\t\tclassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-ainoblocks-button__link', size, borderRadius, {\n\t\t\t\t\t'is-uppercase': uppercase,\n\t\t\t\t\t'no-border-radius': borderRadius === 0,\n\t\t\t\t\t'no-border': borderWidth === 0\n\t\t\t\t}),\n\t\t\t\tstyle: styleButton,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\tsetAttributes({ label: value });\n\t\t\t\t},\n\t\t\t\tformattingControls: ['bold', 'italic'],\n\t\t\t\trel: 'noopener noreferrer',\n\t\t\t\topensInNewTab: linkTarget === '_blank',\n\t\t\t\tonToggleOpenInNewTab: onToggleOpenInNewTab\n\t\t\t})\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/edit.js?");

/***/ }),

/***/ "./src/blocks/button/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/button/icon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#ad55ff\", d: \"M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8s8 3.582 8 8z\" }),\n  wp.element.createElement(\"path\", { fill: \"#6a00cc\", d: \"M16 12c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/icon.js?");

/***/ }),

/***/ "./src/blocks/button/icons.js":
/*!************************************!*\
  !*** ./src/blocks/button/icons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\nvar icons = {};\n\nicons.link = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z\" })\n);\n\nicons.linkOff = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z\" })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/icons.js?");

/***/ }),

/***/ "./src/blocks/button/index.js":
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ \"./src/blocks/button/deprecated.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ \"./src/blocks/button/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./src/blocks/button/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/button/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ \"./src/blocks/button/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/button/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/button/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_3__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('A single button within a Buttons block.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\tparent: ['ainoblocks/multiple-buttons'],\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tkeywords: [__('button', 'ainoblocks'), __('link', 'ainoblocks'), __('cta', 'ainoblocks'), __('buttons', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\tstyles: [{\n\t\tname: 'primary',\n\t\t/* translators: block style */\n\t\tlabel: __('Fill', 'ainoblocks'),\n\t\tisDefault: true\n\t}, {\n\t\tname: 'outline',\n\t\t/* translators: block style */\n\t\tlabel: __('Outline')\n\t}, {\n\t\tname: 'naked',\n\t\t/* translators: block style */\n\t\tlabel: __('Naked')\n\t}, {\n\t\tname: 'raised',\n\t\t/* translators: block style */\n\t\tlabel: __('Raised')\n\t}],\n\texample: {\n\t\tname: 'ainoblocks/button',\n\t\tattributes: {\n\t\t\tclassName: 'is-style-primary',\n\t\t\tlabel: __('Call to Action', 'ainoblocks'),\n\t\t\tborderRadius: 'radius-circular',\n\t\t\tsize: 'size__l'\n\t\t}\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n\tdeprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/index.js?");

/***/ }),

/***/ "./src/blocks/button/save.js":
/*!***********************************!*\
  !*** ./src/blocks/button/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar url = attributes.url,\n\t    label = attributes.label,\n\t    linkTarget = attributes.linkTarget,\n\t    rel = attributes.rel,\n\t    size = attributes.size,\n\t    borderRadius = attributes.borderRadius,\n\t    borderWidth = attributes.borderWidth,\n\t    uppercase = attributes.uppercase;\n\n\n\tvar buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-button__link', size, borderRadius, {\n\t\t'is-uppercase': uppercase,\n\t\t'no-border-radius': borderRadius === 0,\n\t\t'no-border': borderWidth === 0\n\t});\n\n\tvar styleButton = {\n\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined\n\t};\n\n\tvar styleBg = {\n\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined\n\t};\n\n\tvar wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: wrapperClasses,\n\t\tstyle: styleBg\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(RichText.Content, {\n\t\t\ttagName: 'a',\n\t\t\tclassName: buttonClasses,\n\t\t\thref: url,\n\t\t\tstyle: styleButton,\n\t\t\tvalue: label,\n\t\t\ttarget: linkTarget,\n\t\t\trel: rel\n\t\t})\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/save.js?");

/***/ }),

/***/ "./src/blocks/card/deprecated.js":
/*!***************************************!*\
  !*** ./src/blocks/card/deprecated.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nvar deprecated = [{\n\n\tattributes: {\n\t\talign: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tborderColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tborderRadius: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t},\n\t\tshadowName: {\n\t\t\ttype: 'string',\n\t\t\tdefault: \"shadow-none\"\n\t\t},\n\t\tpaddingTop: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 7\n\t\t},\n\t\tpaddingBottom: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 7\n\t\t},\n\t\tpaddingLeft: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 7\n\t\t},\n\t\tpaddingRight: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 7\n\t\t},\n\t\tborderTopWidth: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t},\n\t\tborderRightWidth: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t},\n\t\tborderBottomWidth: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t},\n\t\tborderLeftWidth: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t}\n\t},\n\n\tsave: function save(attributes) {\n\t\tvar _classnames;\n\n\t\tvar backgroundColor = attributes.backgroundColor,\n\t\t    borderColor = attributes.borderColor,\n\t\t    borderRadius = attributes.borderRadius,\n\t\t    shadowName = attributes.shadowName,\n\t\t    paddingTop = attributes.paddingTop,\n\t\t    paddingBottom = attributes.paddingBottom,\n\t\t    paddingLeft = attributes.paddingLeft,\n\t\t    paddingRight = attributes.paddingRight,\n\t\t    borderTopWidth = attributes.borderTopWidth,\n\t\t    borderRightWidth = attributes.borderRightWidth,\n\t\t    borderBottomWidth = attributes.borderBottomWidth,\n\t\t    borderLeftWidth = attributes.borderLeftWidth,\n\t\t    borderWidth = attributes.borderWidth;\n\n\n\t\tvar cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((classnames__WEBPACK_IMPORTED_MODULE_1___default()), shadowName, (_classnames = {\n\t\t\t'has-background': backgroundColor,\n\t\t\t'has-border': borderColor\n\t\t}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pt__' + paddingTop, paddingTop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pb__' + paddingBottom, paddingBottom), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pl__' + paddingLeft, paddingLeft), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pr__' + paddingRight, paddingRight), _classnames));\n\n\t\tvar blockProps = useBlockProps.save({\n\t\t\tclassName: cardClasses,\n\t\t\tstyle: {\n\t\t\t\tbackgroundColor: backgroundColor,\n\t\t\t\tborderColor: borderColor,\n\t\t\t\tborderRadius: borderRadius ? borderRadius + 'px' : undefined,\n\t\t\t\tborderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,\n\t\t\t\tborderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,\n\t\t\t\tborderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,\n\t\t\t\tborderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined\n\t\t\t}\n\t\t});\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n}];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/deprecated.js?");

/***/ }),

/***/ "./src/blocks/card/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/card/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cardEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl;\n\n/**\n * Block edit function\n */\n\nfunction cardEdit(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar align = attributes.align,\n\t    shadowName = attributes.shadowName,\n\t    paddingTop = attributes.paddingTop,\n\t    paddingBottom = attributes.paddingBottom,\n\t    paddingLeft = attributes.paddingLeft,\n\t    paddingRight = attributes.paddingRight,\n\t    borderTopWidth = attributes.borderTopWidth,\n\t    borderRightWidth = attributes.borderRightWidth,\n\t    borderBottomWidth = attributes.borderBottomWidth,\n\t    borderLeftWidth = attributes.borderLeftWidth;\n\n\n\tvar shadowNameOptions = [{ value: \"shadow-none\", label: __('none', 'ainoblocks') }, { value: \"shadow-a\", label: __('small', 'ainoblocks') }, { value: \"shadow-b\", label: __('large', 'ainoblocks') }];\n\n\tvar cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, shadowName, align, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pt__' + paddingTop, paddingTop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pb__' + paddingBottom, paddingBottom), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pl__' + paddingLeft, paddingLeft), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pr__' + paddingRight, paddingRight), _classnames));\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: cardClasses,\n\t\tstyle: {\n\t\t\tborderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,\n\t\t\tborderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,\n\t\t\tborderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,\n\t\t\tborderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined\n\t\t}\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Shadow', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __(\"Shadow\", \"ainoblocks\"),\n\t\t\t\t\tvalue: shadowName,\n\t\t\t\t\toptions: shadowNameOptions,\n\t\t\t\t\tonChange: function onChange(shadowName) {\n\t\t\t\t\t\treturn setAttributes({ shadowName: shadowName });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Border Width', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width Top', 'ainoblocks'),\n\t\t\t\t\tvalue: borderTopWidth,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tonChange: function onChange(borderTopWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderTopWidth: borderTopWidth });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width Right', 'ainoblocks'),\n\t\t\t\t\tvalue: borderRightWidth,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tonChange: function onChange(borderRightWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderRightWidth: borderRightWidth });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width Bottom', 'ainoblocks'),\n\t\t\t\t\tvalue: borderBottomWidth,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tonChange: function onChange(borderBottomWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderBottomWidth: borderBottomWidth });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width Left', 'ainoblocks'),\n\t\t\t\t\tvalue: borderLeftWidth,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tonChange: function onChange(borderLeftWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderLeftWidth: borderLeftWidth });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Responsive Spacing', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Padding Top', 'ainoblocks'),\n\t\t\t\t\tvalue: paddingTop,\n\t\t\t\t\tonChange: function onChange(paddingTop) {\n\t\t\t\t\t\treturn setAttributes({ paddingTop: paddingTop });\n\t\t\t\t\t},\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 19,\n\t\t\t\t\tallowReset: true\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Padding Bottom', 'ainoblocks'),\n\t\t\t\t\tvalue: paddingBottom,\n\t\t\t\t\tonChange: function onChange(paddingBottom) {\n\t\t\t\t\t\treturn setAttributes({ paddingBottom: paddingBottom });\n\t\t\t\t\t},\n\t\t\t\t\tinitialPosition: 7,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 19,\n\t\t\t\t\tallowReset: true\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Padding Left', 'ainoblocks'),\n\t\t\t\t\tvalue: paddingLeft,\n\t\t\t\t\tonChange: function onChange(paddingLeft) {\n\t\t\t\t\t\treturn setAttributes({ paddingLeft: paddingLeft });\n\t\t\t\t\t},\n\t\t\t\t\tinitialPosition: 7,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 19,\n\t\t\t\t\tallowReset: true\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Padding Right', 'ainoblocks'),\n\t\t\t\t\tvalue: paddingRight,\n\t\t\t\t\tonChange: function onChange(paddingRight) {\n\t\t\t\t\t\treturn setAttributes({ paddingRight: paddingRight });\n\t\t\t\t\t},\n\t\t\t\t\tinitialPosition: 7,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 19,\n\t\t\t\t\tallowReset: true\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/edit.js?");

/***/ }),

/***/ "./src/blocks/card/icon.js":
/*!*********************************!*\
  !*** ./src/blocks/card/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#6af9ec\", d: \"M12 10l12 7-12 7-12-7z\" }),\n  wp.element.createElement(\"path\", { fill: \"#09d9c7\", d: \"M12 5l12 7-12 7-12-7z\" }),\n  wp.element.createElement(\"path\", { fill: \"#07ae9f\", d: \"M12 0l12 7-12 7-12-7z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/icon.js?");

/***/ }),

/***/ "./src/blocks/card/index.js":
/*!**********************************!*\
  !*** ./src/blocks/card/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ \"./src/blocks/card/deprecated.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/card/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/card/block.json\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ \"./src/blocks/card/icon.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ \"./src/blocks/card/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/card/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/card/styles/editor.scss\");\n/**\n* WordPress dependencies\n*/\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('Insert a card to highlight important content such as quotes or special notices. The card has a box style format that can be customised.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\tkeywords: [__('card', 'ainoblocks'), __('container', 'ainoblocks'), __('wrapper', 'ainoblocks'), __('box', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\texample: {\n\t\tattributes: {\n\t\t\tborderRadius: '20',\n\t\t\tshadowName: 'shadow-a',\n\t\t\tpaddingTop: '9',\n\t\t\tpaddingBottom: '9',\n\t\t\tpaddingLeft: '9',\n\t\t\tpaddingRight: '9'\n\t\t},\n\t\tinnerBlocks: [{\n\t\t\tname: 'core/paragraph',\n\t\t\tattributes: {\n\t\t\t\tcontent: __('You can include any kind of block inside a card. It is a great block to be used on coloured backgrounds.', 'ainoblocks')\n\t\t\t}\n\t\t}]\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n\tdeprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/index.js?");

/***/ }),

/***/ "./src/blocks/card/save.js":
/*!*********************************!*\
  !*** ./src/blocks/card/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes;\n\tvar shadowName = attributes.shadowName,\n\t    paddingTop = attributes.paddingTop,\n\t    paddingBottom = attributes.paddingBottom,\n\t    paddingLeft = attributes.paddingLeft,\n\t    paddingRight = attributes.paddingRight,\n\t    borderTopWidth = attributes.borderTopWidth,\n\t    borderRightWidth = attributes.borderRightWidth,\n\t    borderBottomWidth = attributes.borderBottomWidth,\n\t    borderLeftWidth = attributes.borderLeftWidth;\n\n\n\tvar cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((classnames__WEBPACK_IMPORTED_MODULE_1___default()), shadowName, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pt__' + paddingTop, paddingTop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pb__' + paddingBottom, paddingBottom), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pl__' + paddingLeft, paddingLeft), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'pr__' + paddingRight, paddingRight), _classnames));\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: cardClasses,\n\t\tstyle: {\n\t\t\tborderTopWidth: borderTopWidth ? borderTopWidth + 'px' : undefined,\n\t\t\tborderRightWidth: borderRightWidth ? borderRightWidth + 'px' : undefined,\n\t\t\tborderBottomWidth: borderBottomWidth ? borderBottomWidth + 'px' : undefined,\n\t\t\tborderLeftWidth: borderLeftWidth ? borderLeftWidth + 'px' : undefined\n\t\t}\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/save.js?");

/***/ }),

/***/ "./src/blocks/divider/edit.js":
/*!************************************!*\
  !*** ./src/blocks/divider/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dividerEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$compose = wp.compose,\n    compose = _wp$compose.compose,\n    withInstanceId = _wp$compose.withInstanceId;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl;\n\n/**\n * Block edit function\n */\n\nfunction dividerEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar backgroundColor = attributes.backgroundColor,\n\t    borderColor = attributes.borderColor,\n\t    iconColor = attributes.iconColor,\n\t    borderWidth = attributes.borderWidth;\n\n\n\tvar styles = {\n\t\tbackgroundColor: backgroundColor,\n\t\tborderColor: borderColor,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined\n\t};\n\n\tvar iconStyles = {\n\t\tfill: iconColor\n\t};\n\n\tvar borderWidthTooltipContent = function borderWidthTooltipContent(borderWidth) {\n\t\treturn borderWidth + 'px';\n\t};\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: className\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Divider Settings', 'ainoblocks')\n\t\t\t\t},\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width', 'ainoblocks'),\n\t\t\t\t\thelp: __('Do not forget to choose a border color in the Color settings.', 'ainoblocks'),\n\t\t\t\t\tvalue: borderWidth,\n\t\t\t\t\tonChange: function onChange(borderWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderWidth: borderWidth });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 50,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\trenderTooltipContent: borderWidthTooltipContent\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color Settings', 'ainoblocks'),\n\t\t\t\tinitialOpen: false,\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: backgroundColor,\n\t\t\t\t\tonChange: function onChange(backgroundColor) {\n\t\t\t\t\t\tsetAttributes({ backgroundColor: backgroundColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Background Color', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: borderColor,\n\t\t\t\t\tonChange: function onChange(borderColor) {\n\t\t\t\t\t\tsetAttributes({ borderColor: borderColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Border Color', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: iconColor,\n\t\t\t\t\tonChange: function onChange(iconColor) {\n\t\t\t\t\t\tsetAttributes({ iconColor: iconColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Icon Color', 'ainoblocks')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ 'class': 'wp-block-ainoblocks-divider__inner', style: styles },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'svg',\n\t\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48', 'class': '__icon', style: iconStyles },\n\t\t\t\t\twp.element.createElement('path', { d: 'M25.586 6.586l17.414 17.414-17.414 17.414-2.828-2.828 12.585-12.586-30.342 0v-4l30.342-0-12.585-12.586z' })\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/edit.js?");

/***/ }),

/***/ "./src/blocks/divider/icon.js":
/*!************************************!*\
  !*** ./src/blocks/divider/icon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#a5d0fd\", d: \"M1.608 6l10.392-6 10.392 6v12l-10.392 6-10.392-6z\" }),\n  wp.element.createElement(\"path\", { fill: \"#000\", opacity: \"0.4\", d: \"M12 24l10.392-6h-20.785z\" }),\n  wp.element.createElement(\"path\", { fill: \"#03458a\", d: \"M12 24l10.392-6h-20.785z\" }),\n  wp.element.createElement(\"path\", { fill: \"#4ca1fb\", d: \"M12 0l-10.392 6v12z\" }),\n  wp.element.createElement(\"path\", { fill: \"#0573e6\", d: \"M22.392 18l-10.392-18-10.392 18z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/icon.js?");

/***/ }),

/***/ "./src/blocks/divider/index.js":
/*!*************************************!*\
  !*** ./src/blocks/divider/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/divider/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/divider/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/divider/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/divider/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/divider/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/divider/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('A visual divider between sections.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('divider', 'ainoblocks'), __('separator', 'ainoblocks'), __('spacer', 'ainoblocks'), __('icon', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\tstyles: [{\n\t\tname: 'default',\n\t\t/* translators: block style */\n\t\tlabel: __('Default', 'ainoblocks'),\n\t\tisDefault: true\n\t}, {\n\t\tname: 'outline',\n\t\t/* translators: block style */\n\t\tlabel: __('Outline')\n\t}],\n\tsupports: {\n\t\t\"anchor\": true\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/index.js?");

/***/ }),

/***/ "./src/blocks/divider/save.js":
/*!************************************!*\
  !*** ./src/blocks/divider/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar backgroundColor = attributes.backgroundColor,\n\t    borderColor = attributes.borderColor,\n\t    iconColor = attributes.iconColor,\n\t    borderWidth = attributes.borderWidth;\n\n\n\tvar dividerClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), {\n\t\t'has-custom-background': backgroundColor,\n\t\t'has-custom-border-color': borderColor\n\t});\n\n\tvar styles = {\n\t\tbackgroundColor: backgroundColor,\n\t\tborderColor: borderColor,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined\n\t};\n\n\tvar iconStyles = {\n\t\tfill: iconColor\n\t};\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: dividerClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(\n\t\t\t'span',\n\t\t\t{ 'class': 'wp-block-ainoblocks-divider__inner', style: styles },\n\t\t\twp.element.createElement(\n\t\t\t\t'svg',\n\t\t\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48', 'class': '__icon', style: iconStyles },\n\t\t\t\twp.element.createElement('path', { d: 'M25.586 6.586l17.414 17.414-17.414 17.414-2.828-2.828 12.585-12.586-30.342 0v-4l30.342-0-12.585-12.586z' })\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/save.js?");

/***/ }),

/***/ "./src/blocks/flex-item/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/flex-item/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ flexboxEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    useState = _wp$element.useState;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl,\n    TabPanel = _wp$components.TabPanel,\n    ToggleControl = _wp$components.ToggleControl;\n\n/**\n * Block edit function\n */\n\nfunction flexboxEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    onSelect = _ref.onSelect;\n\tvar flexOrder = attributes.flexOrder,\n\t    flexGrow = attributes.flexGrow,\n\t    flexShrink = attributes.flexShrink,\n\t    flexBasis = attributes.flexBasis,\n\t    alignSelfDesktop = attributes.alignSelfDesktop,\n\t    alignSelfTablet = attributes.alignSelfTablet,\n\t    alignSelfMobile = attributes.alignSelfMobile;\n\n\n\tvar alignSelfDesktopOptions = [{ value: \"align__auto__d\", label: __('auto', 'ainoblocks') }, { value: \"align__flexstart__d\", label: __('flex-start', 'ainoblocks') }, { value: \"align__ flexend__d\", label: __(' flex-end', 'ainoblocks') }, { value: \"align__center__d\", label: __('center', 'ainoblocks') }, { value: \"align__baseline__d\", label: __('baseline', 'ainoblocks') }, { value: \"align__stretch__d\", label: __('stretch', 'ainoblocks') }];\n\n\tvar alignSelfTabletOptions = [{ value: \"align__auto__t\", label: __('auto', 'ainoblocks') }, { value: \"align__flexstart__t\", label: __('flex-start', 'ainoblocks') }, { value: \"align__ flexend__t\", label: __(' flex-end', 'ainoblocks') }, { value: \"align__center__t\", label: __('center', 'ainoblocks') }, { value: \"align__baseline__t\", label: __('baseline', 'ainoblocks') }, { value: \"align__stretch__t\", label: __('stretch', 'ainoblocks') }];\n\n\tvar alignSelfMobileOptions = [{ value: \"align__auto__m\", label: __('auto', 'ainoblocks') }, { value: \"align__flexstart__m\", label: __('flex-start', 'ainoblocks') }, { value: \"align__ flexend__m\", label: __(' flex-end', 'ainoblocks') }, { value: \"align__center__m\", label: __('center', 'ainoblocks') }, { value: \"align__baseline__m\", label: __('baseline', 'ainoblocks') }, { value: \"align__stretch__m\", label: __('stretch', 'ainoblocks') }];\n\n\tvar flexItemClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, alignSelfDesktop, alignSelfTablet, alignSelfMobile, {});\n\n\tvar flexItemStyles = {\n\t\torder: flexOrder ? flexOrder : undefined,\n\t\tflexGrow: flexGrow ? flexGrow : undefined,\n\t\tflexBasis: flexBasis ? flexBasis + 'px' : undefined,\n\t\tflexShrink: flexShrink ? \"0\" : undefined\n\t};\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: flexItemClasses,\n\t\tstyle: flexItemStyles\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Flex Item settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Flex Order', 'ainoblocks'),\n\t\t\t\t\tvalue: flexOrder,\n\t\t\t\t\tonChange: function onChange(flexOrder) {\n\t\t\t\t\t\treturn setAttributes({ flexOrder: flexOrder });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Flex Basis (in pixels)', 'ainoblocks'),\n\t\t\t\t\tvalue: flexBasis,\n\t\t\t\t\tonChange: function onChange(flexBasis) {\n\t\t\t\t\t\treturn setAttributes({ flexBasis: flexBasis });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 1800\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Flex Grow', 'ainoblocks'),\n\t\t\t\t\tvalue: flexGrow,\n\t\t\t\t\tonChange: function onChange(flexGrow) {\n\t\t\t\t\t\treturn setAttributes({ flexGrow: flexGrow });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Flex Shrink', 'ainoblocks'),\n\t\t\t\t\tchecked: !!flexShrink,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ flexShrink: !flexShrink });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!flexShrink ? __('Icon is set to zero.', 'ainoblocks') : __('Toggle to set flex shrink to zero.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Item Alignment', 'ainoblocks') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tTabPanel,\n\t\t\t\t\t{ className: 'aino-device-panel',\n\t\t\t\t\t\tactiveClass: 'is-active',\n\t\t\t\t\t\tinitialTabName: 'desktop',\n\t\t\t\t\t\tonSelect: onSelect,\n\t\t\t\t\t\ttabs: [{\n\t\t\t\t\t\t\tname: 'desktop',\n\t\t\t\t\t\t\ttitle: 'Desktop',\n\t\t\t\t\t\t\tclassName: 'device-d'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'tablet',\n\t\t\t\t\t\t\ttitle: 'Tablet',\n\t\t\t\t\t\t\tclassName: 'device-t'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'mobile',\n\t\t\t\t\t\t\ttitle: 'Mobile',\n\t\t\t\t\t\t\tclassName: 'device-m'\n\t\t\t\t\t\t}] },\n\t\t\t\t\tfunction (tab) {\n\t\t\t\t\t\tswitch (tab.name) {\n\t\t\t\t\t\t\tcase 'desktop':\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Self\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignSelfDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: alignSelfDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignSelfDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignSelfDesktop: alignSelfDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tcase 'tablet':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Self\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignSelfTablet,\n\t\t\t\t\t\t\t\t\t\toptions: alignSelfTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignSelfTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignSelfTablet: alignSelfTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\t\t\t\t\t\t\tcase 'mobile':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Self\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignSelfMobile,\n\t\t\t\t\t\t\t\t\t\toptions: alignSelfMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignSelfMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignSelfMobile: alignSelfMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/edit.js?");

/***/ }),

/***/ "./src/blocks/flex-item/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/flex-item/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#ec70c2\", d: \"M2.5 2.5h14v14h-14z\" }),\n  wp.element.createElement(\"path\", { fill: \"#b81882\", d: \"M7.5 7.5h14v14h-14z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/icon.js?");

/***/ }),

/***/ "./src/blocks/flex-item/index.js":
/*!***************************************!*\
  !*** ./src/blocks/flex-item/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/flex-item/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/flex-item/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/flex-item/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/flex-item/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/flex-item/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/flex-item/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n/**\n * Register block\n */\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n  category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n  icon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/index.js?");

/***/ }),

/***/ "./src/blocks/flex-item/save.js":
/*!**************************************!*\
  !*** ./src/blocks/flex-item/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar flexOrder = attributes.flexOrder,\n\t    flexGrow = attributes.flexGrow,\n\t    flexShrink = attributes.flexShrink,\n\t    flexBasis = attributes.flexBasis,\n\t    alignSelfDesktop = attributes.alignSelfDesktop,\n\t    alignSelfTablet = attributes.alignSelfTablet,\n\t    alignSelfMobile = attributes.alignSelfMobile;\n\n\n\tvar flexItemClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), alignSelfDesktop, alignSelfTablet, alignSelfMobile, {});\n\n\tvar flexItemStyles = {\n\t\torder: flexOrder ? flexOrder : undefined,\n\t\tflexGrow: flexGrow ? flexGrow : undefined,\n\t\tflexBasis: flexBasis ? flexBasis + 'px' : undefined,\n\t\tflexShrink: flexShrink ? \"0\" : undefined\n\t};\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: flexItemClasses,\n\t\tstyle: flexItemStyles\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/save.js?");

/***/ }),

/***/ "./src/blocks/flexbox/edit.js":
/*!************************************!*\
  !*** ./src/blocks/flexbox/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ flexboxEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    TabPanel = _wp$components.TabPanel;\n\n/**\n * Block edit function\n */\n\nfunction flexboxEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    onSelect = _ref.onSelect;\n\tvar align = attributes.align,\n\t    flexDirectionDesktop = attributes.flexDirectionDesktop,\n\t    flexDirectionTablet = attributes.flexDirectionTablet,\n\t    flexDirectionMobile = attributes.flexDirectionMobile,\n\t    flexWrapDesktop = attributes.flexWrapDesktop,\n\t    flexWrapTablet = attributes.flexWrapTablet,\n\t    flexWrapMobile = attributes.flexWrapMobile,\n\t    justifyContentDesktop = attributes.justifyContentDesktop,\n\t    justifyContentTablet = attributes.justifyContentTablet,\n\t    justifyContentMobile = attributes.justifyContentMobile,\n\t    alignItemsDesktop = attributes.alignItemsDesktop,\n\t    alignItemsTablet = attributes.alignItemsTablet,\n\t    alignItemsMobile = attributes.alignItemsMobile,\n\t    alignContentDesktop = attributes.alignContentDesktop,\n\t    alignContentTablet = attributes.alignContentTablet,\n\t    alignContentMobile = attributes.alignContentMobile,\n\t    shadowName = attributes.shadowName,\n\t    position = attributes.position;\n\n\n\tvar flexDirectionDesktopOptions = [{ value: \"direction__row__d\", label: __('row', 'ainoblocks') }, { value: \"direction__rowrev__d\", label: __('row-reverse', 'ainoblocks') }, { value: \"direction__col__d\", label: __('column', 'ainoblocks') }, { value: \"direction__colrev__d\", label: __('column-reverse', 'ainoblocks') }];\n\n\tvar flexDirectionTabletOptions = [{ value: \"direction__row__t\", label: __('row', 'ainoblocks') }, { value: \"direction__rowrev__t\", label: __('row-reverse', 'ainoblocks') }, { value: \"direction__col__t\", label: __('column', 'ainoblocks') }, { value: \"direction__colrev__t\", label: __('column-reverse', 'ainoblocks') }];\n\n\tvar flexDirectionMobileOptions = [{ value: \"direction__row__m\", label: __('row', 'ainoblocks') }, { value: \"direction__rowrev__m\", label: __('row-reverse', 'ainoblocks') }, { value: \"direction__col__m\", label: __('column', 'ainoblocks') }, { value: \"direction__colrev__m\", label: __('column-reverse', 'ainoblocks') }];\n\n\tvar flexWrapDesktopOptions = [{ value: \"nowrap__d\", label: __('nowrap', 'ainoblocks') }, { value: \"wrap__d\", label: __('wrap', 'ainoblocks') }, { value: \"wraprev__d\", label: __('wrap-reverse', 'ainoblocks') }];\n\n\tvar flexWrapTabletOptions = [{ value: \"nowrap__t\", label: __('nowrap', 'ainoblocks') }, { value: \"wrap__t\", label: __('wrap', 'ainoblocks') }, { value: \"wraprev__t\", label: __('wrap-reverse', 'ainoblocks') }];\n\n\tvar flexWrapMobileOptions = [{ value: \"nowrap__m\", label: __('nowrap', 'ainoblocks') }, { value: \"wrap__m\", label: __('wrap', 'ainoblocks') }, { value: \"wraprev__m\", label: __('wrap-reverse', 'ainoblocks') }];\n\n\tvar justifyContentDesktopOptions = [{ value: \"justify__flexstart__d\", label: __('flex-start', 'ainoblocks') }, { value: \"justify__flexend__d\", label: __('flex-end', 'ainoblocks') }, { value: \"justify__center__d\", label: __('center', 'ainoblocks') }, { value: \"justify__between__d\", label: __('space-between', 'ainoblocks') }, { value: \"justify__around__d\", label: __('space-around', 'ainoblocks') }, { value: \"justify__evenly__d\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar justifyContentTabletOptions = [{ value: \"justify__flexstart__t\", label: __('flex-start', 'ainoblocks') }, { value: \"justify__flexend__t\", label: __('flex-end', 'ainoblocks') }, { value: \"justify__center__t\", label: __('center', 'ainoblocks') }, { value: \"justify__between__t\", label: __('space-between', 'ainoblocks') }, { value: \"justify__around__t\", label: __('space-around', 'ainoblocks') }, { value: \"justify__evenly__t\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar justifyContentMobileOptions = [{ value: \"justify__flexstart__m\", label: __('flex-start', 'ainoblocks') }, { value: \"justify__flexend__m\", label: __('flex-end', 'ainoblocks') }, { value: \"justify__center__m\", label: __('center', 'ainoblocks') }, { value: \"justify__between__m\", label: __('space-between', 'ainoblocks') }, { value: \"justify__around__m\", label: __('space-around', 'ainoblocks') }, { value: \"justify__evenly__m\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar alignItemsDesktopOptions = [{ value: \"align-items__stretch__d\", label: __('stretch', 'ainoblocks') }, { value: \"align-items__flexstart__d\", label: __('flex-start', 'ainoblocks') }, { value: \"align-items__flexend__d\", label: __('flex-end', 'ainoblocks') }, { value: \"align-items__center__d\", label: __('center', 'ainoblocks') }, { value: \"align-items__baseline__d\", label: __('baseline', 'ainoblocks') }];\n\n\tvar alignItemsTabletOptions = [{ value: \"align-items__stretch__t\", label: __('stretch', 'ainoblocks') }, { value: \"align-items__flexstart__t\", label: __('flex-start', 'ainoblocks') }, { value: \"align-items__flexend__t\", label: __('flex-end', 'ainoblocks') }, { value: \"align-items__center__t\", label: __('center', 'ainoblocks') }, { value: \"align-items__baseline__t\", label: __('baseline', 'ainoblocks') }];\n\n\tvar alignItemsMobileOptions = [{ value: \"align-items__stretch__m\", label: __('stretch', 'ainoblocks') }, { value: \"align-items__flexstart__m\", label: __('flex-start', 'ainoblocks') }, { value: \"align-items__flexend__m\", label: __('flex-end', 'ainoblocks') }, { value: \"align-items__center__m\", label: __('center', 'ainoblocks') }, { value: \"align-items__baseline__m\", label: __('baseline', 'ainoblocks') }];\n\n\tvar alignContentDesktopOptions = [{ value: \"align-cont__stretch__d\", label: __('stretch', 'ainoblocks') }, { value: \"align-cont__flexstart__d\", label: __('flex-start', 'ainoblocks') }, { value: \"align-cont__flexend__d\", label: __('flex-end', 'ainoblocks') }, { value: \"align-cont__center__d\", label: __('center', 'ainoblocks') }, { value: \"align-cont__between__d\", label: __('space-between', 'ainoblocks') }, { value: \"align-cont__around__d\", label: __('space-around', 'ainoblocks') }, { value: \"align-cont__evenly__d\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar alignContentTabletOptions = [{ value: \"align-cont__stretch__t\", label: __('stretch', 'ainoblocks') }, { value: \"align-cont__flexstart__t\", label: __('flex-start', 'ainoblocks') }, { value: \"align-cont__flexend__t\", label: __('flex-end', 'ainoblocks') }, { value: \"align-cont__center__t\", label: __('center', 'ainoblocks') }, { value: \"align-cont__between__t\", label: __('space-between', 'ainoblocks') }, { value: \"align-cont__around__t\", label: __('space-around', 'ainoblocks') }, { value: \"align-cont__evenly__t\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar alignContentMobileOptions = [{ value: \"align-cont__stretch__m\", label: __('stretch', 'ainoblocks') }, { value: \"align-cont__flexstart__m\", label: __('flex-start', 'ainoblocks') }, { value: \"align-cont__flexend__m\", label: __('flex-end', 'ainoblocks') }, { value: \"align-cont__center__m\", label: __('center', 'ainoblocks') }, { value: \"align-cont__between__m\", label: __('space-between', 'ainoblocks') }, { value: \"align-cont__around__m\", label: __('space-around', 'ainoblocks') }, { value: \"align-cont__evenly__m\", label: __('space-evenly', 'ainoblocks') }];\n\n\tvar shadowNameOptions = [{ value: \"shadow-none\", label: __('none', 'ainoblocks') }, { value: \"shadow-a\", label: __('small', 'ainoblocks') }, { value: \"shadow-b\", label: __('large', 'ainoblocks') }];\n\n\tvar positionOptions = [{ value: \"pos-none\", label: __('none', 'ainoblocks') }, { value: \"pos-tl\", label: __('top left', 'ainoblocks') }, { value: \"pos-tr\", label: __('top right', 'ainoblocks') }, { value: \"pos-bl\", label: __('bottom left', 'ainoblocks') }, { value: \"pos-br\", label: __('bottom right', 'ainoblocks') }];\n\n\tvar flexboxClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, flexDirectionDesktop, flexDirectionTablet, flexDirectionMobile, flexWrapDesktop, flexWrapTablet, flexWrapMobile, justifyContentDesktop, justifyContentTablet, justifyContentMobile, alignItemsDesktop, alignItemsTablet, alignItemsMobile, alignContentDesktop, alignContentTablet, alignContentMobile, shadowName, align, position, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: flexboxClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Flexbox settings', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: true\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'em',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t__('Use Preview for Desktop, Tablet and Mobile view.', 'ainoblocks')\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tTabPanel,\n\t\t\t\t\t{ className: 'aino-device-panel',\n\t\t\t\t\t\tactiveClass: 'is-active',\n\t\t\t\t\t\tinitialTabName: 'desktop',\n\t\t\t\t\t\tonSelect: onSelect,\n\t\t\t\t\t\ttabs: [{\n\t\t\t\t\t\t\tname: 'desktop',\n\t\t\t\t\t\t\ttitle: 'Desktop',\n\t\t\t\t\t\t\tclassName: 'device-d'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'tablet',\n\t\t\t\t\t\t\ttitle: 'Tablet',\n\t\t\t\t\t\t\tclassName: 'device-t'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'mobile',\n\t\t\t\t\t\t\ttitle: 'Mobile',\n\t\t\t\t\t\t\tclassName: 'device-m'\n\t\t\t\t\t\t}] },\n\t\t\t\t\tfunction (tab) {\n\t\t\t\t\t\tswitch (tab.name) {\n\t\t\t\t\t\t\tcase 'desktop':\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Direction\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexDirectionDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: flexDirectionDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexDirectionDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexDirectionDesktop: flexDirectionDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Wrap\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexWrapDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: flexWrapDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexWrapDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexWrapDesktop: flexWrapDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Justify Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: justifyContentDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: justifyContentDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(justifyContentDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ justifyContentDesktop: justifyContentDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Items\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignItemsDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: alignItemsDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignItemsDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignItemsDesktop: alignItemsDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignContentDesktop,\n\t\t\t\t\t\t\t\t\t\toptions: alignContentDesktopOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignContentDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignContentDesktop: alignContentDesktop });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tcase 'tablet':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Direction\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexDirectionTablet,\n\t\t\t\t\t\t\t\t\t\toptions: flexDirectionTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexDirectionTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexDirectionTablet: flexDirectionTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Wrap\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexWrapTablet,\n\t\t\t\t\t\t\t\t\t\toptions: flexWrapTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexWrapTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexWrapTablet: flexWrapTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Justify Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: justifyContentTablet,\n\t\t\t\t\t\t\t\t\t\toptions: justifyContentTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(justifyContentTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ justifyContentTablet: justifyContentTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Items\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignItemsTablet,\n\t\t\t\t\t\t\t\t\t\toptions: alignItemsTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignItemsTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignItemsTablet: alignItemsTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignContentTablet,\n\t\t\t\t\t\t\t\t\t\toptions: alignContentTabletOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignContentTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignContentTablet: alignContentTablet });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\n\t\t\t\t\t\t\tcase 'mobile':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Direction\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexDirectionMobile,\n\t\t\t\t\t\t\t\t\t\toptions: flexDirectionMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexDirectionMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexDirectionMobile: flexDirectionMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Flex Wrap\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: flexWrapMobile,\n\t\t\t\t\t\t\t\t\t\toptions: flexWrapMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(flexWrapMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ flexWrapMobile: flexWrapMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Justify Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: justifyContentMobile,\n\t\t\t\t\t\t\t\t\t\toptions: justifyContentMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(justifyContentMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ justifyContentMobile: justifyContentMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Items\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignItemsMobile,\n\t\t\t\t\t\t\t\t\t\toptions: alignItemsMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignItemsMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignItemsMobile: alignItemsMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __(\"Align Content\", \"ainoblocks\"),\n\t\t\t\t\t\t\t\t\t\tvalue: alignContentMobile,\n\t\t\t\t\t\t\t\t\t\toptions: alignContentMobileOptions,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(alignContentMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ alignContentMobile: alignContentMobile });\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Positioning', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __(\"Absolute Positioning\", \"ainoblocks\"),\n\t\t\t\t\tvalue: position,\n\t\t\t\t\toptions: positionOptions,\n\t\t\t\t\tonChange: function onChange(position) {\n\t\t\t\t\t\treturn setAttributes({ position: position });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Shadow', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __(\"Shadow\", \"ainoblocks\"),\n\t\t\t\t\tvalue: shadowName,\n\t\t\t\t\toptions: shadowNameOptions,\n\t\t\t\t\tonChange: function onChange(shadowName) {\n\t\t\t\t\t\treturn setAttributes({ shadowName: shadowName });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/edit.js?");

/***/ }),

/***/ "./src/blocks/flexbox/icon.js":
/*!************************************!*\
  !*** ./src/blocks/flexbox/icon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#f4addc\", d: \"M0 0h14v14h-14z\" }),\n  wp.element.createElement(\"path\", { fill: \"#ec70c2\", d: \"M5 5h14v14h-14z\" }),\n  wp.element.createElement(\"path\", { fill: \"#b81882\", d: \"M10 10h14v14h-14z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/icon.js?");

/***/ }),

/***/ "./src/blocks/flexbox/index.js":
/*!*************************************!*\
  !*** ./src/blocks/flexbox/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/flexbox/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/flexbox/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/flexbox/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/flexbox/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/flexbox/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/flexbox/styles/editor.scss\");\n/**\n* WordPress dependencies\n*/\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n/**\n * Register block\n */\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n  category: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n  icon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/index.js?");

/***/ }),

/***/ "./src/blocks/flexbox/save.js":
/*!************************************!*\
  !*** ./src/blocks/flexbox/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar align = attributes.align,\n\t    flexDirectionDesktop = attributes.flexDirectionDesktop,\n\t    flexDirectionTablet = attributes.flexDirectionTablet,\n\t    flexDirectionMobile = attributes.flexDirectionMobile,\n\t    flexWrapDesktop = attributes.flexWrapDesktop,\n\t    flexWrapTablet = attributes.flexWrapTablet,\n\t    flexWrapMobile = attributes.flexWrapMobile,\n\t    justifyContentDesktop = attributes.justifyContentDesktop,\n\t    justifyContentTablet = attributes.justifyContentTablet,\n\t    justifyContentMobile = attributes.justifyContentMobile,\n\t    alignItemsDesktop = attributes.alignItemsDesktop,\n\t    alignItemsTablet = attributes.alignItemsTablet,\n\t    alignItemsMobile = attributes.alignItemsMobile,\n\t    alignContentDesktop = attributes.alignContentDesktop,\n\t    alignContentTablet = attributes.alignContentTablet,\n\t    alignContentMobile = attributes.alignContentMobile,\n\t    shadowName = attributes.shadowName,\n\t    position = attributes.position;\n\n\n\tvar flexboxClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), flexDirectionDesktop, flexDirectionTablet, flexDirectionMobile, flexWrapDesktop, flexWrapTablet, flexWrapMobile, justifyContentDesktop, justifyContentTablet, justifyContentMobile, alignItemsDesktop, alignItemsTablet, alignItemsMobile, alignContentDesktop, alignContentTablet, alignContentMobile, shadowName, align, position, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: flexboxClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/save.js?");

/***/ }),

/***/ "./src/blocks/grid-container/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/grid-container/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GridContainerEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memize */ \"./node_modules/memize/index.js\");\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/times */ \"./node_modules/lodash/times.js\");\n/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ \"./src/blocks/grid-container/inspector.js\");\n/**\n * External dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n/**\n * Constants\n */\n\nvar ALLOWED_BLOCKS = ['ainoblocks/grid-item'];\n\n/**\n * Returns the layouts configuration for a given number of items.\n *\n * @param {number} count Number of feature items.\n *\n * @return {Object[]} Columns layout configuration.\n */\nvar getCount = memize__WEBPACK_IMPORTED_MODULE_1___default()(function (count) {\n\treturn lodash_times__WEBPACK_IMPORTED_MODULE_2___default()(count, function () {\n\t\treturn ['ainoblocks/grid-item'];\n\t});\n});\n\n/**\n * Block edit function\n */\n\nfunction GridContainerEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected;\n\tvar align = attributes.align,\n\t    items = attributes.items,\n\t    columnGap = attributes.columnGap;\n\n\n\tvar columnGapOptions = [{ value: \"col-gap-none\", label: __('none', 'ainoblocks') }, { value: \"col-gap-s\", label: __('small', 'ainoblocks') }, { value: \"col-gap-m\", label: __('medium', 'ainoblocks') }, { value: \"col-gap-l\", label: __('large', 'ainoblocks') }];\n\n\tvar gridClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'align' + align, columnGap);\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: gridClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Gap', 'ainoblocks')\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __(\"Column Gap\", \"ainoblocks\"),\n\t\t\t\t\tvalue: columnGap,\n\t\t\t\t\toptions: columnGapOptions,\n\t\t\t\t\tonChange: function onChange(columnGap) {\n\t\t\t\t\t\treturn setAttributes({ columnGap: columnGap });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\tallowedBlocks: ALLOWED_BLOCKS,\n\t\t\t\ttemplate: getCount(items),\n\t\t\t\ttemplateLock: false,\n\t\t\t\ttemplateInsertUpdatesSelection: true\n\t\t\t})\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/edit.js?");

/***/ }),

/***/ "./src/blocks/grid-container/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/grid-container/icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#f7acb4\", d: \"M3 0c1.657 0 3 1.343 3 3v18c0 1.657-1.343 3-3 3s-3-1.343-3-3v-18c0-1.657 1.343-3 3-3z\" }),\n  wp.element.createElement(\"path\", { fill: \"#f3838e\", d: \"M9 0c1.657 0 3 1.343 3 3v18c0 1.657-1.343 3-3 3s-3-1.343-3-3v-18c0-1.657 1.343-3 3-3z\" }),\n  wp.element.createElement(\"path\", { fill: \"#ef5969\", d: \"M15 0c1.657 0 3 1.343 3 3v18c0 1.657-1.343 3-3 3s-3-1.343-3-3v-18c0-1.657 1.343-3 3-3z\" }),\n  wp.element.createElement(\"path\", { fill: \"#eb2e42\", d: \"M21 0c1.657 0 3 1.343 3 3v18c0 1.657-1.343 3-3 3s-3-1.343-3-3v-18c0-1.657 1.343-3 3-3z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/icon.js?");

/***/ }),

/***/ "./src/blocks/grid-container/index.js":
/*!********************************************!*\
  !*** ./src/blocks/grid-container/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/grid-container/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/grid-container/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/grid-container/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/grid-container/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/grid-container/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/grid-container/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/index.js?");

/***/ }),

/***/ "./src/blocks/grid-container/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/grid-container/inspector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\n\n\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar PanelBody = wp.components.PanelBody;\n\n/**\n * Inspector controls\n */\n\nvar Inspector = function (_Component) {\n\t(0,babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Inspector, _Component);\n\n\tfunction Inspector() {\n\t\t(0,babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Inspector);\n\n\t\treturn (0,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, (Inspector.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Inspector)).apply(this, arguments));\n\t}\n\n\t(0,babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Inspector, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    clientId = _props.clientId,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    setAttributes = _props.setAttributes;\n\t\t\tvar items = attributes.items;\n\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(InspectorControls, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Inspector;\n}(Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/inspector.js?");

/***/ }),

/***/ "./src/blocks/grid-container/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/grid-container/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies.\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes,\n\t    className = _ref.className;\n\tvar align = attributes.align,\n\t    items = attributes.items,\n\t    columnGap = attributes.columnGap;\n\n\n\tvar innerClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-grid-container__inner', {});\n\n\tvar gridClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), columnGap);\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: gridClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: innerClasses },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/save.js?");

/***/ }),

/***/ "./src/blocks/grid-item/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/grid-item/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GridItemEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl,\n    TabPanel = _wp$components.TabPanel;\n\n/**\n * Block edit function\n */\n\nfunction GridItemEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    onSelect = _ref.onSelect;\n\tvar gridColumnStartDesktop = attributes.gridColumnStartDesktop,\n\t    gridColumnEndDesktop = attributes.gridColumnEndDesktop,\n\t    gridColumnStartTablet = attributes.gridColumnStartTablet,\n\t    gridColumnEndTablet = attributes.gridColumnEndTablet,\n\t    gridColumnStartMobile = attributes.gridColumnStartMobile,\n\t    gridColumnEndMobile = attributes.gridColumnEndMobile,\n\t    alignItem = attributes.alignItem,\n\t    justifyItem = attributes.justifyItem,\n\t    stacking = attributes.stacking,\n\t    stackOrder = attributes.stackOrder,\n\t    gutter = attributes.gutter,\n\t    overlapLeft = attributes.overlapLeft,\n\t    overlapRight = attributes.overlapRight,\n\t    marginTopDesktop = attributes.marginTopDesktop,\n\t    marginRightDesktop = attributes.marginRightDesktop,\n\t    marginBottomDesktop = attributes.marginBottomDesktop,\n\t    marginLeftDesktop = attributes.marginLeftDesktop,\n\t    marginTopTablet = attributes.marginTopTablet,\n\t    marginRightTablet = attributes.marginRightTablet,\n\t    marginBottomTablet = attributes.marginBottomTablet,\n\t    marginLeftTablet = attributes.marginLeftTablet,\n\t    marginTopMobile = attributes.marginTopMobile,\n\t    marginRightMobile = attributes.marginRightMobile,\n\t    marginBottomMobile = attributes.marginBottomMobile,\n\t    marginLeftMobile = attributes.marginLeftMobile;\n\n\n\tvar alignItemOptions = [{\n\t\tvalue: 'start',\n\t\tlabel: __('start', 'ainoblocks')\n\t}, {\n\t\tvalue: 'end',\n\t\tlabel: __('end', 'ainoblocks')\n\t}, {\n\t\tvalue: 'center',\n\t\tlabel: __('center', 'ainoblocks')\n\t}, {\n\t\tvalue: 'stretch',\n\t\tlabel: __('stretch', 'ainoblocks')\n\t}];\n\n\tvar justifyItemOptions = [{\n\t\tvalue: 'start',\n\t\tlabel: __('start', 'ainoblocks')\n\t}, {\n\t\tvalue: 'end',\n\t\tlabel: __('end', 'ainoblocks')\n\t}, {\n\t\tvalue: 'center',\n\t\tlabel: __('center', 'ainoblocks')\n\t}, {\n\t\tvalue: 'stretch',\n\t\tlabel: __('stretch', 'ainoblocks')\n\t}];\n\n\tvar gridColumnStartDesktopTooltipContent = function gridColumnStartDesktopTooltipContent(gridColumnStartDesktop) {\n\t\treturn 'line ' + gridColumnStartDesktop;\n\t};\n\tvar gridColumnEndDesktopTooltipContent = function gridColumnEndDesktopTooltipContent(gridColumnEndDesktop) {\n\t\treturn 'line ' + gridColumnEndDesktop;\n\t};\n\tvar gridColumnStartTabletTooltipContent = function gridColumnStartTabletTooltipContent(gridColumnStartTablet) {\n\t\treturn 'line ' + gridColumnStartTablet;\n\t};\n\tvar gridColumnEndTabletTooltipContent = function gridColumnEndTabletTooltipContent(gridColumnEndTablet) {\n\t\treturn 'line ' + gridColumnEndTablet;\n\t};\n\tvar gridColumnStartMobileTooltipContent = function gridColumnStartMobileTooltipContent(gridColumnStartMobile) {\n\t\treturn 'line ' + gridColumnStartMobile;\n\t};\n\tvar gridColumnEndMobileTooltipContent = function gridColumnEndMobileTooltipContent(gridColumnEndMobile) {\n\t\treturn 'line ' + gridColumnEndMobile;\n\t};\n\n\tvar classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: classNames\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Positioning', 'ainoblocks') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'em',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t__('Use Preview for Desktop, Tablet and Mobile view.', 'ainoblocks')\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tTabPanel,\n\t\t\t\t\t{ className: 'aino-device-panel',\n\t\t\t\t\t\tactiveClass: 'is-active',\n\t\t\t\t\t\tinitialTabName: 'desktop',\n\t\t\t\t\t\tonSelect: onSelect,\n\t\t\t\t\t\ttabs: [{\n\t\t\t\t\t\t\tname: 'desktop',\n\t\t\t\t\t\t\ttitle: 'Desktop',\n\t\t\t\t\t\t\tclassName: 'device-d'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'tablet',\n\t\t\t\t\t\t\ttitle: 'Tablet',\n\t\t\t\t\t\t\tclassName: 'device-t'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'mobile',\n\t\t\t\t\t\t\ttitle: 'Mobile',\n\t\t\t\t\t\t\tclassName: 'device-m'\n\t\t\t\t\t\t}] },\n\t\t\t\t\tfunction (tab) {\n\t\t\t\t\t\tswitch (tab.name) {\n\t\t\t\t\t\t\tcase 'desktop':\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column Start', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnStartDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnStartDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnStartDesktop: gridColumnStartDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnStartDesktopTooltipContent\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column End', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnEndDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnEndDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnEndDesktop: gridColumnEndDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnEndDesktopTooltipContent\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tcase 'tablet':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column Start', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnStartTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnStartTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnStartTablet: gridColumnStartTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnStartTabletTooltipContent\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column End', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnEndTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnEndTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnEndTablet: gridColumnEndTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnEndTabletTooltipContent\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\n\t\t\t\t\t\t\tcase 'mobile':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column Start', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnStartMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnStartMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnStartMobile: gridColumnStartMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnStartMobileTooltipContent\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Grid Column End', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: gridColumnEndMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(gridColumnEndMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ gridColumnEndMobile: gridColumnEndMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\t\t\t\tmax: 13,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\trenderTooltipContent: gridColumnEndMobileTooltipContent\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Margins', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tTabPanel,\n\t\t\t\t\t{ className: 'aino-device-panel',\n\t\t\t\t\t\tactiveClass: 'is-active',\n\t\t\t\t\t\tinitialTabName: 'desktop',\n\t\t\t\t\t\tonSelect: onSelect,\n\t\t\t\t\t\ttabs: [{\n\t\t\t\t\t\t\tname: 'desktop',\n\t\t\t\t\t\t\ttitle: 'Desktop',\n\t\t\t\t\t\t\tclassName: 'device-d'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'tablet',\n\t\t\t\t\t\t\ttitle: 'Tablet',\n\t\t\t\t\t\t\tclassName: 'device-t'\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\tname: 'mobile',\n\t\t\t\t\t\t\ttitle: 'Mobile',\n\t\t\t\t\t\t\tclassName: 'device-m'\n\t\t\t\t\t\t}] },\n\t\t\t\t\tfunction (tab) {\n\t\t\t\t\t\tswitch (tab.name) {\n\t\t\t\t\t\t\tcase 'desktop':\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Top', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginTopDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginTopDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginTopDesktop: marginTopDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Right', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginRightDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginRightDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginRightDesktop: marginRightDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Bottom', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginBottomDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginBottomDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginBottomDesktop: marginBottomDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Left', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginLeftDesktop,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginLeftDesktop) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginLeftDesktop: marginLeftDesktop });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tcase 'tablet':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Top', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginTopTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginTopTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginTopTablet: marginTopTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Right', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginRightTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginRightTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginRightTablet: marginRightTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Bottom', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginBottomTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginBottomTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginBottomTablet: marginBottomTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Left', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginLeftTablet,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginLeftTablet) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginLeftTablet: marginLeftTablet });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\n\t\t\t\t\t\t\tcase 'mobile':\n\t\t\t\t\t\t\t\treturn [wp.element.createElement(\n\t\t\t\t\t\t\t\t\tFragment,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Top', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginTopMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginTopMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginTopMobile: marginTopMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Right', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginRightMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginRightMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginRightMobile: marginRightMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Bottom', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginBottomMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginBottomMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginBottomMobile: marginBottomMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\t\t\t\tlabel: __('Margin Left', 'ainoblocks'),\n\t\t\t\t\t\t\t\t\t\tvalue: marginLeftMobile,\n\t\t\t\t\t\t\t\t\t\tonChange: function onChange(marginLeftMobile) {\n\t\t\t\t\t\t\t\t\t\t\treturn setAttributes({ marginLeftMobile: marginLeftMobile });\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tmin: -18,\n\t\t\t\t\t\t\t\t\t\tmax: 18,\n\t\t\t\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Gutter', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Add end gutters', 'ainoblocks'),\n\t\t\t\t\tchecked: !!gutter,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ gutter: !gutter });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!gutter ? __('Toogle off to remove the spacing left and right of the grid item.', 'ainoblocks') : __('Toggle on for space left and right of the grid item.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Overlapping', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Overlap to left', 'ainoblocks'),\n\t\t\t\t\tchecked: !!overlapLeft,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ overlapLeft: !overlapLeft });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!overlapLeft ? __('Toogle off to position grid item within grid container.', 'ainoblocks') : __('Toggle on to overlap grid item to left screen edge.', 'ainoblocks')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Overlap to right', 'ainoblocks'),\n\t\t\t\t\tchecked: !!overlapRight,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ overlapRight: !overlapRight });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!overlapRight ? __('Toogle off to position grid item within grid container.', 'ainoblocks') : __('Toggle on to overlap grid item to right screen edge.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Stacking', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Stacking', 'ainoblocks'),\n\t\t\t\t\tchecked: !!stacking,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ stacking: !stacking });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!stacking ? __('Toogle off to show grid items below the previous grid item.', 'ainoblocks') : __('Toggle on to allow stacking of grid item.', 'ainoblocks')\n\t\t\t\t}),\n\t\t\t\tstacking === true && wp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Stack Order', 'ainoblocks'),\n\t\t\t\t\thelp: __('An item with greater stack order is always in front of an item with a lower stack order.', 'ainoblocks'),\n\t\t\t\t\tvalue: stackOrder,\n\t\t\t\t\tonChange: function onChange(stackOrder) {\n\t\t\t\t\t\treturn setAttributes({ stackOrder: stackOrder });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: 20\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Aligment', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Align item', 'ainoblocks'),\n\t\t\t\t\thelp: __('Aligns an item inside its grid area along the vertical column axis.', 'ainoblocks'),\n\t\t\t\t\tvalue: alignItem,\n\t\t\t\t\toptions: alignItemOptions,\n\t\t\t\t\tonChange: function onChange(alignItem) {\n\t\t\t\t\t\treturn setAttributes({ alignItem: alignItem });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Justify item', 'ainoblocks'),\n\t\t\t\t\thelp: __('Aligns an item inside its grid area on the horizontal row axis.', 'ainoblocks'),\n\t\t\t\t\tvalue: justifyItem,\n\t\t\t\t\toptions: justifyItemOptions,\n\t\t\t\t\tonChange: function onChange(justifyItem) {\n\t\t\t\t\t\treturn setAttributes({ justifyItem: justifyItem });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplateLock: false\n\t\t\t})\n\t\t)\n\t);\n}\n\n/**\n * Override the default block element to add wrapper props.\n *\n * @param {Function} BlockListBlock Original component\n * @return {Function} Wrapped component\n */\n\nvar addCustomClassName = createHigherOrderComponent(function (BlockListBlock) {\n\n\treturn function (props) {\n\t\tvar _classnames;\n\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className;\n\t\tvar gridColumnStartDesktop = attributes.gridColumnStartDesktop,\n\t\t    gridColumnEndDesktop = attributes.gridColumnEndDesktop,\n\t\t    gridColumnStartTablet = attributes.gridColumnStartTablet,\n\t\t    gridColumnEndTablet = attributes.gridColumnEndTablet,\n\t\t    gridColumnStartMobile = attributes.gridColumnStartMobile,\n\t\t    gridColumnEndMobile = attributes.gridColumnEndMobile,\n\t\t    alignItem = attributes.alignItem,\n\t\t    justifyItem = attributes.justifyItem,\n\t\t    stacking = attributes.stacking,\n\t\t    stackOrder = attributes.stackOrder,\n\t\t    gutter = attributes.gutter,\n\t\t    overlapLeft = attributes.overlapLeft,\n\t\t    overlapRight = attributes.overlapRight,\n\t\t    marginTopDesktop = attributes.marginTopDesktop,\n\t\t    marginRightDesktop = attributes.marginRightDesktop,\n\t\t    marginBottomDesktop = attributes.marginBottomDesktop,\n\t\t    marginLeftDesktop = attributes.marginLeftDesktop,\n\t\t    marginTopTablet = attributes.marginTopTablet,\n\t\t    marginRightTablet = attributes.marginRightTablet,\n\t\t    marginBottomTablet = attributes.marginBottomTablet,\n\t\t    marginLeftTablet = attributes.marginLeftTablet,\n\t\t    marginTopMobile = attributes.marginTopMobile,\n\t\t    marginRightMobile = attributes.marginRightMobile,\n\t\t    marginBottomMobile = attributes.marginBottomMobile,\n\t\t    marginLeftMobile = attributes.marginLeftMobile;\n\n\n\t\tvar classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_start_d__' + gridColumnStartDesktop, gridColumnStartDesktop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_end_d__' + gridColumnEndDesktop, gridColumnEndDesktop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_start_t__' + gridColumnStartTablet, gridColumnStartTablet), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_end_t__' + gridColumnEndTablet, gridColumnEndTablet), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_start_m__' + gridColumnStartMobile, gridColumnStartMobile), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'col_end_m__' + gridColumnEndMobile, gridColumnEndMobile), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'align-self__' + alignItem, alignItem), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'justify-self__' + justifyItem, justifyItem), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'no-gutter', !gutter), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'no-stacking', !stacking), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'has-stacking', stacking === true && stackOrder ? stackOrder : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'stack-order__' + stackOrder, stacking === true && stackOrder ? stackOrder : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'overlap-left', overlapLeft), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'overlap-right', overlapRight), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_d__' + marginTopDesktop, marginTopDesktop ? marginTopDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_d__' + marginRightDesktop, marginRightDesktop ? marginRightDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_d__' + marginBottomDesktop, marginBottomDesktop ? marginBottomDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_d__' + marginLeftDesktop, marginLeftDesktop ? marginLeftDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_t__' + marginTopTablet, marginTopTablet ? marginTopTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_t__' + marginRightTablet, marginRightTablet ? marginRightTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_t__' + marginBottomTablet, marginBottomTablet ? marginBottomTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_t__' + marginLeftTablet, marginLeftTablet ? marginLeftTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_m__' + marginTopMobile, marginTopMobile ? marginTopMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_m__' + marginRightMobile, marginRightMobile ? marginRightMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_m__' + marginBottomMobile, marginBottomMobile ? marginBottomMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_m__' + marginLeftMobile, marginLeftMobile ? marginLeftMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_d__0', marginTopDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_d__0', marginRightDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_d__0', marginLeftDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_d__0', marginBottomDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_t__0', marginTopTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_t__0', marginRightTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_t__0', marginLeftTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_t__0', marginBottomTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mt_m__0', marginTopMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mr_m__0', marginRightMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'ml_m__0', marginLeftMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'mb_m__0', marginBottomMobile === 0), _classnames));\n\n\t\treturn wp.element.createElement(BlockListBlock, (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, { className: classNames }));\n\t};\n}, 'addCustomClassName');\n\nwp.hooks.addFilter('editor.BlockListBlock', 'ainoblocks/grid-item', addCustomClassName);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/edit.js?");

/***/ }),

/***/ "./src/blocks/grid-item/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/grid-item/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#f3838e\", d: \"M6 9c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3z\" }),\n  wp.element.createElement(\"path\", { fill: \"#ef5969\", d: \"M12 6c1.657 0 3 1.343 3 3v6c0 1.657-1.343 3-3 3s-3-1.343-3-3v-6c0-1.657 1.343-3 3-3z\" }),\n  wp.element.createElement(\"path\", { fill: \"#eb2e42\", d: \"M18 3c1.657 0 3 1.343 3 3v12c0 1.657-1.343 3-3 3s-3-1.343-3-3v-12c0-1.657 1.343-3 3-3z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/icon.js?");

/***/ }),

/***/ "./src/blocks/grid-item/index.js":
/*!***************************************!*\
  !*** ./src/blocks/grid-item/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/grid-item/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/grid-item/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/grid-item/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/grid-item/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/grid-item/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/grid-item/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\tparent: ['ainoblocks/grid-container'],\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/index.js?");

/***/ }),

/***/ "./src/blocks/grid-item/save.js":
/*!**************************************!*\
  !*** ./src/blocks/grid-item/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes,\n\t    className = _ref.className;\n\tvar gridColumnStartDesktop = attributes.gridColumnStartDesktop,\n\t    gridColumnEndDesktop = attributes.gridColumnEndDesktop,\n\t    gridColumnStartTablet = attributes.gridColumnStartTablet,\n\t    gridColumnEndTablet = attributes.gridColumnEndTablet,\n\t    gridColumnStartMobile = attributes.gridColumnStartMobile,\n\t    gridColumnEndMobile = attributes.gridColumnEndMobile,\n\t    alignItem = attributes.alignItem,\n\t    justifyItem = attributes.justifyItem,\n\t    stacking = attributes.stacking,\n\t    stackOrder = attributes.stackOrder,\n\t    gutter = attributes.gutter,\n\t    overlapLeft = attributes.overlapLeft,\n\t    overlapRight = attributes.overlapRight,\n\t    marginTopDesktop = attributes.marginTopDesktop,\n\t    marginRightDesktop = attributes.marginRightDesktop,\n\t    marginBottomDesktop = attributes.marginBottomDesktop,\n\t    marginLeftDesktop = attributes.marginLeftDesktop,\n\t    marginTopTablet = attributes.marginTopTablet,\n\t    marginRightTablet = attributes.marginRightTablet,\n\t    marginBottomTablet = attributes.marginBottomTablet,\n\t    marginLeftTablet = attributes.marginLeftTablet,\n\t    marginTopMobile = attributes.marginTopMobile,\n\t    marginRightMobile = attributes.marginRightMobile,\n\t    marginBottomMobile = attributes.marginBottomMobile,\n\t    marginLeftMobile = attributes.marginLeftMobile;\n\n\n\tvar classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_start_d__' + gridColumnStartDesktop, gridColumnStartDesktop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_end_d__' + gridColumnEndDesktop, gridColumnEndDesktop), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_start_t__' + gridColumnStartTablet, gridColumnStartTablet), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_end_t__' + gridColumnEndTablet, gridColumnEndTablet), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_start_m__' + gridColumnStartMobile, gridColumnStartMobile), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'col_end_m__' + gridColumnEndMobile, gridColumnEndMobile), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'align-self__' + alignItem, alignItem), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'justify-self__' + justifyItem, justifyItem), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'no-stacking', !stacking), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'has-stacking', stacking === true && stackOrder ? stackOrder : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'stack-order__' + stackOrder, stacking === true && stackOrder ? stackOrder : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'no-gutter', !gutter), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'overlap-left', overlapLeft), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'overlap-right', overlapRight), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_d__' + marginTopDesktop, marginTopDesktop ? marginTopDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_d__' + marginRightDesktop, marginRightDesktop ? marginRightDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_d__' + marginBottomDesktop, marginBottomDesktop ? marginBottomDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_d__' + marginLeftDesktop, marginLeftDesktop ? marginLeftDesktop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_t__' + marginTopTablet, marginTopTablet ? marginTopTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_t__' + marginRightTablet, marginRightTablet ? marginRightTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_t__' + marginBottomTablet, marginBottomTablet ? marginBottomTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_t__' + marginLeftTablet, marginLeftTablet ? marginLeftTablet : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_m__' + marginTopMobile, marginTopMobile ? marginTopMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_m__' + marginRightMobile, marginRightMobile ? marginRightMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_m__' + marginBottomMobile, marginBottomMobile ? marginBottomMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_m__' + marginLeftMobile, marginLeftMobile ? marginLeftMobile : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_d__0', marginTopDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_d__0', marginRightDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_d__0', marginLeftDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_d__0', marginBottomDesktop === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_t__0', marginTopTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_t__0', marginRightTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_t__0', marginLeftTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_t__0', marginBottomTablet === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mt_m__0', marginTopMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mr_m__0', marginRightMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'ml_m__0', marginLeftMobile === 0), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'mb_m__0', marginBottomMobile === 0), _classnames));\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: classNames\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/save.js?");

/***/ }),

/***/ "./src/blocks/hero/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/hero/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ heroEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/babel-runtime/helpers/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ \"./src/blocks/hero/icons.js\");\n/* harmony import */ var _media_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media-container */ \"./src/blocks/hero/media-container.js\");\n\n\n\n/**\n * External dependencies\n */\n\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    useState = _wp$element.useState;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    BlockVerticalAlignmentToolbar = _wp$blockEditor.BlockVerticalAlignmentToolbar,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextareaControl = _wp$components.TextareaControl,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Constants\n */\nvar ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'ainoblocks/button', 'ainoblocks/multiple-buttons'];\n\nvar TEMPLATE = [['ainoblocks/badge', {\n\tplaceholder: _x('Write Badge text…', 'content placeholder'),\n\tcontent: _x('Write Badge text…', 'content placeholder')\n}], ['core/heading', {\n\tplaceholder: _x('Write heading…', 'content placeholder'),\n\tcontent: _x('Write heading…', 'content placeholder')\n}], ['core/paragraph', {\n\tplaceholder: _x('Start writing here…', 'content placeholder'),\n\tcontent: _x('Start writing here…', 'content placeholder'),\n\tclassName: 'hero-text'\n}], ['ainoblocks/multiple-buttons']];\n\n/**\n * Block edit function\n */\nfunction heroEdit(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected;\n\tvar align = attributes.align,\n\t    mediaAlt = attributes.mediaAlt,\n\t    mediaPosition = attributes.mediaPosition,\n\t    mediaHeight = attributes.mediaHeight,\n\t    mediaType = attributes.mediaType,\n\t    verticalContentAlignment = attributes.verticalContentAlignment,\n\t    imageFill = attributes.imageFill,\n\t    contentGridColumnStart = attributes.contentGridColumnStart,\n\t    contentGridColumnEnd = attributes.contentGridColumnEnd,\n\t    mediaGridColumnStart = attributes.mediaGridColumnStart,\n\t    mediaGridColumnEnd = attributes.mediaGridColumnEnd,\n\t    backgroundColor = attributes.backgroundColor;\n\n\tvar _useState = useState(0),\n\t    _useState2 = (0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n\t    mediaWidth = _useState2[0],\n\t    setmediaWidth = _useState2[1];\n\n\tvar onSelectMedia = function onSelectMedia(media) {\n\n\t\tvar mediaType = void 0;\n\t\tvar src = void 0;\n\t\t// for media selections originated from a file upload.\n\t\tif (media.media_type) {\n\t\t\tif (media.media_type === 'image') {\n\t\t\t\tmediaType = 'image';\n\t\t\t} else {\n\t\t\t\t// only images and videos are accepted so if the media_type is not an image we can assume it is a video.\n\t\t\t\t// video contain the media type of 'file' in the object returned from the rest api.\n\t\t\t\tmediaType = 'video';\n\t\t\t}\n\t\t} else {\n\t\t\t// for media selections originated from existing files in the media library.\n\t\t\tmediaType = media.type;\n\t\t}\n\n\t\tif (mediaType === 'image') {\n\t\t\t// Try the \"large\" size URL, falling back to the \"full\" size URL below.\n\t\t\tsrc = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(media, ['sizes', 'large', 'url']) || lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(media, ['media_details', 'sizes', 'large', 'source_url']);\n\t\t}\n\n\t\tsetAttributes({\n\t\t\tmediaAlt: media.alt,\n\t\t\tmediaId: media.id,\n\t\t\tmediaType: mediaType,\n\t\t\tmediaUrl: src || media.url,\n\t\t\timageFill: undefined\n\t\t});\n\t};\n\n\tvar onWidthChange = function onWidthChange(width) {\n\t\tsetmediaWidth({\n\t\t\tmediaWidth: applyWidthConstraints(width)\n\t\t});\n\t};\n\n\tvar commitWidthChange = function commitWidthChange(width) {\n\t\tsetAttributes({\n\t\t\tmediaWidth: applyWidthConstraints(width)\n\t\t});\n\n\t\tsetmediaWidth({\n\t\t\tmediaWidth: 0\n\t\t});\n\t};\n\n\tvar renderMediaArea = function renderMediaArea(width) {\n\t\tvar mediaAlt = attributes.mediaAlt,\n\t\t    mediaId = attributes.mediaId,\n\t\t    mediaPosition = attributes.mediaPosition,\n\t\t    mediaHeight = attributes.mediaHeight,\n\t\t    mediaType = attributes.mediaType,\n\t\t    mediaUrl = attributes.mediaUrl,\n\t\t    imageFill = attributes.imageFill;\n\n\n\t\tif ('media-hide' !== mediaPosition) {\n\t\t\treturn wp.element.createElement(_media_container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ className: 'wp-block-ainoblocks-hero__media',\n\t\t\t\tonSelectMedia: onSelectMedia,\n\t\t\t\tonWidthChange: onWidthChange,\n\t\t\t\tcommitWidthChange: commitWidthChange }, {\n\t\t\t\tmediaAlt: mediaAlt,\n\t\t\t\tmediaId: mediaId,\n\t\t\t\tmediaType: mediaType,\n\t\t\t\tmediaUrl: mediaUrl,\n\t\t\t\tmediaPosition: mediaPosition,\n\t\t\t\timageFill: imageFill\n\t\t\t}));\n\t\t}\n\t};\n\n\tvar mediaPositionOptions = [{\n\t\tvalue: 'media-right',\n\t\tlabel: __('Media right', 'ainoblocks')\n\t}, {\n\t\tvalue: 'media-left',\n\t\tlabel: __('Media left', 'ainoblocks')\n\t}, {\n\t\tvalue: 'media-below',\n\t\tlabel: __('Media below', 'ainoblocks')\n\t}, {\n\t\tvalue: 'media-hide',\n\t\tlabel: __('Hide media', 'ainoblocks')\n\t}];\n\n\tvar temporaryMediaWidth = mediaWidth;\n\n\tvar styleContent = {\n\t\tgridColumnStart: contentGridColumnStart,\n\t\tgridColumnEnd: contentGridColumnEnd\n\t};\n\n\tvar styleMedia = {\n\t\tgridColumnStart: mediaGridColumnStart,\n\t\tgridColumnEnd: mediaGridColumnEnd\n\t};\n\n\tvar widthString = (temporaryMediaWidth || mediaWidth) + '%';\n\n\tvar onMediaAltChange = function onMediaAltChange(newMediaAlt) {\n\t\tsetAttributes({\n\t\t\tmediaAlt: newMediaAlt\n\t\t});\n\t};\n\n\tvar onVerticalContentAlignmentChange = function onVerticalContentAlignmentChange(alignment) {\n\t\tsetAttributes({\n\t\t\tverticalContentAlignment: alignment\n\t\t});\n\t};\n\n\tvar heroSettings = wp.element.createElement(\n\t\tPanelBody,\n\t\t{\n\t\t\ttitle: __('Hero Settings', 'ainoblocks'),\n\t\t\tinitialOpen: true\n\t\t},\n\t\twp.element.createElement(SelectControl, {\n\t\t\tlabel: __('Media Position', 'ainoblocks'),\n\t\t\tvalue: mediaPosition,\n\t\t\toptions: mediaPositionOptions,\n\t\t\tonChange: function onChange(mediaPosition) {\n\t\t\t\treturn setAttributes({ mediaPosition: mediaPosition });\n\t\t\t}\n\t\t}),\n\t\twp.element.createElement(ToggleControl, {\n\t\t\tlabel: __('Media height 100%', 'ainoblocks'),\n\t\t\tchecked: !!mediaHeight,\n\t\t\tonChange: function onChange() {\n\t\t\t\treturn setAttributes({ mediaHeight: !mediaHeight });\n\t\t\t},\n\t\t\thelp: !!mediaHeight ? __('Media is full-height.', 'ainoblocks') : __('Toggle for full-height media.', 'ainoblocks')\n\t\t}),\n\t\tmediaType === 'image' && wp.element.createElement(TextareaControl, {\n\t\t\tlabel: __('Alt text (alternative text)', 'ainoblocks'),\n\t\t\tvalue: mediaAlt,\n\t\t\tonChange: onMediaAltChange,\n\t\t\thelp: __('Describe the purpose of the image. Leave empty if the image is purely decorative.', 'ainoblocks')\n\t\t})\n\t);\n\n\tvar contentGridSettings = wp.element.createElement(\n\t\tPanelBody,\n\t\t{\n\t\t\ttitle: __('Content Grid Settings', 'ainoblocks'),\n\t\t\tinitialOpen: false\n\t\t},\n\t\twp.element.createElement(RangeControl, {\n\t\t\tlabel: __('Grid Column Start', 'ainoblocks'),\n\t\t\tvalue: contentGridColumnStart,\n\t\t\tonChange: function onChange(contentGridColumnStart) {\n\t\t\t\treturn setAttributes({ contentGridColumnStart: contentGridColumnStart });\n\t\t\t},\n\t\t\tmin: 1,\n\t\t\tmax: 13,\n\t\t\tallowReset: true\n\t\t}),\n\t\twp.element.createElement(RangeControl, {\n\t\t\tlabel: __('Grid Column End', 'ainoblocks'),\n\t\t\tvalue: contentGridColumnEnd,\n\t\t\tonChange: function onChange(contentGridColumnEnd) {\n\t\t\t\treturn setAttributes({ contentGridColumnEnd: contentGridColumnEnd });\n\t\t\t},\n\t\t\tmin: 1,\n\t\t\tmax: 13,\n\t\t\tallowReset: true\n\t\t})\n\t);\n\n\tvar mediaGridSettings = wp.element.createElement(\n\t\tPanelBody,\n\t\t{\n\t\t\ttitle: __('Media Grid Settings', 'ainoblocks'),\n\t\t\tinitialOpen: false\n\t\t},\n\t\twp.element.createElement(RangeControl, {\n\t\t\tlabel: __('Grid Column Start', 'ainoblocks'),\n\t\t\tvalue: mediaGridColumnStart,\n\t\t\tonChange: function onChange(mediaGridColumnStart) {\n\t\t\t\treturn setAttributes({ mediaGridColumnStart: mediaGridColumnStart });\n\t\t\t},\n\t\t\tmin: 1,\n\t\t\tmax: 13,\n\t\t\tallowReset: true\n\t\t}),\n\t\twp.element.createElement(RangeControl, {\n\t\t\tlabel: __('Grid Column End', 'ainoblocks'),\n\t\t\tvalue: mediaGridColumnEnd,\n\t\t\tonChange: function onChange(mediaGridColumnEnd) {\n\t\t\t\treturn setAttributes({ mediaGridColumnEnd: mediaGridColumnEnd });\n\t\t\t},\n\t\t\tmin: 1,\n\t\t\tmax: 13,\n\t\t\tallowReset: true\n\t\t})\n\t);\n\n\tvar heroClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'align' + align, align), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'media-right', 'media-right' === mediaPosition), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'media-left', 'media-left' === mediaPosition), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'media-below', 'media-below' === mediaPosition), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'media-hide', 'media-hide' === mediaPosition), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'media-fullheight', mediaHeight), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'is-selected', isSelected), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'content-vertically-aligned-' + verticalContentAlignment, verticalContentAlignment), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'is-image-fill', imageFill), _classnames));\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: heroClasses,\n\t\tstyle: {\n\t\t\tbackgroundColor: backgroundColor\n\t\t}\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\theroSettings,\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color Settings', 'ainoblocks'),\n\t\t\t\tinitialOpen: false,\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: backgroundColor,\n\t\t\t\t\tonChange: function onChange(backgroundColor) {\n\t\t\t\t\t\tsetAttributes({ backgroundColor: backgroundColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Background Color', 'ainoblocks')\n\t\t\t\t}]\n\t\t\t}),\n\t\t\tcontentGridSettings,\n\t\t\tmediaGridSettings\n\t\t),\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(BlockVerticalAlignmentToolbar, {\n\t\t\t\tonChange: onVerticalContentAlignmentChange,\n\t\t\t\tvalue: verticalContentAlignment\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wp-block-ainoblocks-hero__inner-container' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'wp-block-ainoblocks-hero__content', style: styleContent },\n\t\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\t\t\ttemplateInsertUpdatesSelection: false\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'wp-block-ainoblocks-hero__media', style: styleMedia },\n\t\t\t\t\trenderMediaArea()\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/edit.js?");

/***/ }),

/***/ "./src/blocks/hero/icon.js":
/*!*********************************!*\
  !*** ./src/blocks/hero/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#00a07d\", d: \"M23 8l-22 14h22z\" }),\n  wp.element.createElement(\"path\", { fill: \"#00795e\", d: \"M12 2l11 20h-22z\" }),\n  wp.element.createElement(\"path\", { fill: \"#005240\", d: \"M1 8l22 14h-22z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/icon.js?");

/***/ }),

/***/ "./src/blocks/hero/icons.js":
/*!**********************************!*\
  !*** ./src/blocks/hero/icons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG,\n    G = _wp$components.G;\n\n\nvar icons = {};\n\nicons.alignPullBelow = wp.element.createElement(\n\tSVG,\n\t{ className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"20\", height: \"20\", viewBox: \"0 0 20 20\" },\n\twp.element.createElement(Path, { d: \"M16 11h-12v6h12v-6zM13 7h-6v2h6v-2zM13 3h-6v2h6v-2z\" })\n);\n\nicons.mediaHide = wp.element.createElement(\n\tSVG,\n\t{ className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"22\", height: \"22\", viewBox: \"0 0 22 22\" },\n\twp.element.createElement(Path, { d: \"M6.167 6.167h7.667v2.583h-7.667v-2.583z\" }),\n\twp.element.createElement(Path, { d: \"M6.167 11.25h7.667v2.583h-7.667v-2.583z\" })\n);\n\nicons.mediaContainer = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M18 2l2 4h-2l-2-4h-3l2 4h-2l-2-4h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2zm2 12H10V4.4L11.8 8H20z\" }),\n\twp.element.createElement(Path, { d: \"M14 20H4V10h3V8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2z\" }),\n\twp.element.createElement(Path, { d: \"M5 19h8l-1.59-2H9.24l-.84 1.1L7 16.3 5 19z\" })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/icons.js?");

/***/ }),

/***/ "./src/blocks/hero/index.js":
/*!**********************************!*\
  !*** ./src/blocks/hero/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/hero/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/hero/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/hero/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/hero/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/hero/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/hero/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('Include a fullscreen featured header area at the top of your front page.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('header', 'ainoblocks'), __('hero', 'ainoblocks'), __('featured', 'ainoblocks'), __('front page', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\tsupports: {\n\t\talign: ['full']\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/index.js?");

/***/ }),

/***/ "./src/blocks/hero/media-container.js":
/*!********************************************!*\
  !*** ./src/blocks/hero/media-container.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageFillStyles\": () => (/* binding */ imageFillStyles),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ \"./src/blocks/hero/icons.js\");\n\n\n\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    BlockIcon = _wp$blockEditor.BlockIcon,\n    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    ResizableBox = _wp$components.ResizableBox,\n    Toolbar = _wp$components.Toolbar,\n    withNotices = _wp$components.withNotices;\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Constants\n */\nvar ALLOWED_MEDIA_TYPES = ['image', 'video'];\n\nfunction imageFillStyles(url, focalPoint) {\n\treturn url ? {\n\t\tbackgroundImage: 'url(' + url + ')',\n\t\tbackgroundPosition: focalPoint ? focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%' : '50% 50%'\n\t} : {};\n}\n\nvar MediaContainer = function (_Component) {\n\t(0,babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MediaContainer, _Component);\n\n\tfunction MediaContainer() {\n\t\t(0,babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MediaContainer);\n\n\t\tvar _this = (0,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, (MediaContainer.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(MediaContainer)).apply(this, arguments));\n\n\t\t_this.onUploadError = _this.onUploadError.bind(_this);\n\t\treturn _this;\n\t}\n\n\t(0,babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MediaContainer, [{\n\t\tkey: 'onUploadError',\n\t\tvalue: function onUploadError(message) {\n\t\t\tvar noticeOperations = this.props.noticeOperations;\n\n\t\t\tnoticeOperations.removeAllNotices();\n\t\t\tnoticeOperations.createErrorNotice(message);\n\t\t}\n\t}, {\n\t\tkey: 'renderToolbarEditButton',\n\t\tvalue: function renderToolbarEditButton() {\n\t\t\tvar _props = this.props,\n\t\t\t    mediaId = _props.mediaId,\n\t\t\t    onSelectMedia = _props.onSelectMedia;\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tToolbar,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\t\tallowedTypes: ALLOWED_MEDIA_TYPES,\n\t\t\t\t\t\tvalue: mediaId,\n\t\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(IconButton, {\n\t\t\t\t\t\t\t\tclassName: 'components-toolbar__control',\n\t\t\t\t\t\t\t\tlabel: __('Edit media'),\n\t\t\t\t\t\t\t\ticon: 'edit',\n\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'renderImage',\n\t\tvalue: function renderImage() {\n\t\t\tvar _props2 = this.props,\n\t\t\t    mediaAlt = _props2.mediaAlt,\n\t\t\t    mediaUrl = _props2.mediaUrl,\n\t\t\t    className = _props2.className,\n\t\t\t    imageFill = _props2.imageFill,\n\t\t\t    focalPoint = _props2.focalPoint;\n\n\t\t\tvar backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\tthis.renderToolbarEditButton(),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'figure',\n\t\t\t\t\t{ style: backgroundStyles },\n\t\t\t\t\twp.element.createElement('img', { src: mediaUrl, alt: mediaAlt })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'renderVideo',\n\t\tvalue: function renderVideo() {\n\t\t\tvar _props3 = this.props,\n\t\t\t    mediaUrl = _props3.mediaUrl,\n\t\t\t    className = _props3.className;\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\tthis.renderToolbarEditButton(),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'figure',\n\t\t\t\t\t{ style: backgroundStyles },\n\t\t\t\t\twp.element.createElement('video', { controls: true, src: mediaUrl })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'renderPlaceholder',\n\t\tvalue: function renderPlaceholder() {\n\t\t\tvar _props4 = this.props,\n\t\t\t    onSelectMedia = _props4.onSelectMedia,\n\t\t\t    className = _props4.className,\n\t\t\t    noticeUI = _props4.noticeUI;\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wp-block-ainoblocks-hero__placeholder' },\n\t\t\t\twp.element.createElement(MediaPlaceholder, {\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"].mediaContainer }),\n\t\t\t\t\tlabels: {\n\t\t\t\t\t\ttitle: __('Media area')\n\t\t\t\t\t},\n\t\t\t\t\tclassName: className,\n\t\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\t\taccept: 'image/*,video/*',\n\t\t\t\t\tallowedTypes: ALLOWED_MEDIA_TYPES,\n\t\t\t\t\tnotices: noticeUI,\n\t\t\t\t\tonError: this.onUploadError\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props5 = this.props,\n\t\t\t    mediaPosition = _props5.mediaPosition,\n\t\t\t    mediaUrl = _props5.mediaUrl,\n\t\t\t    mediaType = _props5.mediaType,\n\t\t\t    mediaWidth = _props5.mediaWidth,\n\t\t\t    commitWidthChange = _props5.commitWidthChange,\n\t\t\t    onWidthChange = _props5.onWidthChange;\n\n\t\t\tif (mediaType && mediaUrl) {\n\t\t\t\tvar onResize = function onResize(event, direction, elt) {\n\t\t\t\t\tonWidthChange(parseInt(elt.style.width));\n\t\t\t\t};\n\t\t\t\tvar onResizeStop = function onResizeStop(event, direction, elt) {\n\t\t\t\t\tcommitWidthChange(parseInt(elt.style.width));\n\t\t\t\t};\n\t\t\t\tvar enablePositions = {\n\t\t\t\t\tright: mediaPosition === 'left',\n\t\t\t\t\tleft: mediaPosition === 'right',\n\t\t\t\t\tbelow: mediaPosition === 'below'\n\t\t\t\t};\n\n\t\t\t\tvar mediaElement = null;\n\t\t\t\tswitch (mediaType) {\n\t\t\t\t\tcase 'image':\n\t\t\t\t\t\tmediaElement = this.renderImage();\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'video':\n\t\t\t\t\t\tmediaElement = this.renderVideo();\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\tResizableBox,\n\t\t\t\t\t{\n\t\t\t\t\t\tclassName: 'editor-media-container__resizer',\n\t\t\t\t\t\tsize: { width: mediaWidth + '%' },\n\t\t\t\t\t\tminWidth: '10%',\n\t\t\t\t\t\tmaxWidth: '100%',\n\t\t\t\t\t\tenable: enablePositions,\n\t\t\t\t\t\tonResize: onResize,\n\t\t\t\t\t\tonResizeStop: onResizeStop,\n\t\t\t\t\t\taxis: 'x'\n\t\t\t\t\t},\n\t\t\t\t\tmediaElement\n\t\t\t\t);\n\t\t\t}\n\t\t\treturn this.renderPlaceholder();\n\t\t}\n\t}]);\n\n\treturn MediaContainer;\n}(Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withNotices(MediaContainer));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/media-container.js?");

/***/ }),

/***/ "./src/blocks/hero/save.js":
/*!*********************************!*\
  !*** ./src/blocks/hero/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ \"./node_modules/lodash/noop.js\");\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-container */ \"./src/blocks/hero/media-container.js\");\n\n/**\n * External dependencies\n */\n\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n/**\n * Internal dependencies\n */\n\n\n\nfunction save(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes;\n\tvar backgroundColor = attributes.backgroundColor,\n\t    mediaAlt = attributes.mediaAlt,\n\t    mediaPosition = attributes.mediaPosition,\n\t    mediaHeight = attributes.mediaHeight,\n\t    mediaType = attributes.mediaType,\n\t    mediaUrl = attributes.mediaUrl,\n\t    mediaId = attributes.mediaId,\n\t    verticalContentAlignment = attributes.verticalContentAlignment,\n\t    imageFill = attributes.imageFill,\n\t    contentGridColumnStart = attributes.contentGridColumnStart,\n\t    contentGridColumnEnd = attributes.contentGridColumnEnd,\n\t    mediaGridColumnStart = attributes.mediaGridColumnStart,\n\t    mediaGridColumnEnd = attributes.mediaGridColumnEnd;\n\n\n\tvar mediaTypeRenders = {\n\t\timage: function image() {\n\t\t\treturn wp.element.createElement('img', { src: mediaUrl,\n\t\t\t\talt: mediaAlt,\n\t\t\t\tclassName: mediaId && mediaType === 'image' ? 'wp-image-' + mediaId : null\n\t\t\t});\n\t\t},\n\t\tvideo: function video() {\n\t\t\treturn wp.element.createElement('video', { controls: true, src: mediaUrl\n\t\t\t});\n\t\t}\n\t};\n\n\tvar heroClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames = {\n\t\t'media-right': 'media-right' === mediaPosition,\n\t\t'media-left': 'media-left' === mediaPosition,\n\t\t'media-below': 'media-below' === mediaPosition,\n\t\t'media-hide': 'media-hide' === mediaPosition,\n\t\t'media-fullheight': mediaHeight\n\t}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'content-vertically-aligned-' + verticalContentAlignment, verticalContentAlignment), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'is-image-fill', imageFill), _classnames));\n\n\tvar styleContent = {\n\t\tgridColumnStart: contentGridColumnStart,\n\t\tgridColumnEnd: contentGridColumnEnd\n\t};\n\n\tvar styleMedia = {\n\t\tgridColumnStart: mediaGridColumnStart,\n\t\tgridColumnEnd: mediaGridColumnEnd\n\t};\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: heroClasses,\n\t\tstyle: {\n\t\t\tbackgroundColor: backgroundColor\n\t\t}\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'wp-block-ainoblocks-hero__inner-container' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wp-block-ainoblocks-hero__content', style: styleContent },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t),\n\t\t\t'media-hide' !== mediaPosition && wp.element.createElement(\n\t\t\t\t'figure',\n\t\t\t\t{ className: 'wp-block-ainoblocks-hero__media', style: styleMedia },\n\t\t\t\t(mediaTypeRenders[mediaType] || (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()))()\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/save.js?");

/***/ }),

/***/ "./src/blocks/icon/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/icon/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iconEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./src/blocks/icon/icons.js\");\n/**\n * External dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n/**\n * Block edit function\n */\n\nfunction iconEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar iconType = attributes.iconType,\n\t    iconSize = attributes.iconSize,\n\t    alignment = attributes.alignment;\n\n\n\tvar iconTypeOptions = [{ value: 'attachment', label: __('Attachment', 'ainoblocks') }, { value: 'baggage', label: __('Baggage', 'ainoblocks') }, { value: 'bookmark', label: __('Bookmark', 'ainoblocks') }, { value: 'calendar', label: __('Calendar', 'ainoblocks') }, { value: 'clock', label: __('Clock', 'ainoblocks') }, { value: 'flash', label: __('Flash', 'ainoblocks') }, { value: 'heart', label: __('Heart', 'ainoblocks') }, { value: 'pin', label: __('Pin', 'ainoblocks') }, { value: 'quote', label: __('Quote', 'ainoblocks') }, { value: 'trophy', label: __('Trophy', 'ainoblocks') }, { value: 'view', label: __('View', 'ainoblocks') }];\n\n\tvar icon = iconType === 'quote' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].quote : iconType === 'attachment' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].attachment : iconType === 'baggage' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].baggage : iconType === 'bookmark' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bookmark : iconType === 'calendar' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calendar : iconType === 'clock' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clock : iconType === 'flash' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flash : iconType === 'heart' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].heart : iconType === 'pin' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pin : iconType === 'trophy' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].trophy : iconType === 'view' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].view : _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].attachment;\n\n\tvar iconSizeOptions = [{ value: 'size-xs', label: __('XS', 'ainoblocks') }, { value: 'size-s', label: __('S', 'ainoblocks') }, { value: 'size-m', label: __('M', 'ainoblocks') }, { value: 'size-l', label: __('L', 'ainoblocks') }];\n\n\tvar iconClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, iconType, iconSize, alignment, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: iconClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: alignment,\n\t\t\t\tonChange: function onChange(alignment) {\n\t\t\t\t\treturn setAttributes({ alignment: alignment });\n\t\t\t\t}\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Icon Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Icon Type', 'ainoblocks'),\n\t\t\t\t\tvalue: iconType,\n\t\t\t\t\toptions: iconTypeOptions,\n\t\t\t\t\tonChange: function onChange(iconType) {\n\t\t\t\t\t\treturn setAttributes({ iconType: iconType });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Icon Size', 'ainoblocks'),\n\t\t\t\t\tvalue: iconSize,\n\t\t\t\t\toptions: iconSizeOptions,\n\t\t\t\t\tonChange: function onChange(iconSize) {\n\t\t\t\t\t\treturn setAttributes({ iconSize: iconSize });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\ticon\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/edit.js?");

/***/ }),

/***/ "./src/blocks/icon/icon.js":
/*!*********************************!*\
  !*** ./src/blocks/icon/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#cfb092\", d: \"M2 6h20v10h-20z\" }),\n  wp.element.createElement(\"path\", { fill: \"#725232\", d: \"M17 6c0 2.761-2.239 5-5 5s-5-2.239-5-5c0-2.761 2.239-5 5-5s5 2.239 5 5z\" }),\n  wp.element.createElement(\"path\", { fill: \"#44311e\", d: \"M22 23c0-5.523-4.477-10-10-10s-10 4.477-10 10h20z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/icon.js?");

/***/ }),

/***/ "./src/blocks/icon/icons.js":
/*!**********************************!*\
  !*** ./src/blocks/icon/icons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar icons = {};\n\nicons.quote = wp.element.createElement(\n\t'svg',\n\t{ width: '24px', height: '24px', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M11.25 2h-11.25v11.25h6l-3.75 9h5.25l3.75-9v-11.25z' }),\n\twp.element.createElement('path', { d: 'M24 2h-11.25v11.25h6l-3.75 9h5.25l3.75-9v-11.25z' })\n);\n\nicons.attachment = wp.element.createElement(\n\t'svg',\n\t{ width: '25', height: '24', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M6.792 1.506c0.964-0.964 2.273-1.506 3.637-1.506h4.286c1.364 0 2.672 0.542 3.636 1.506s1.506 2.273 1.506 3.637v14.571c0 0.473-0.384 0.857-0.857 0.857s-0.857-0.384-0.857-0.857v-14.571c0-0.909-0.361-1.781-1.004-2.424s-1.515-1.004-2.424-1.004h-4.286c-0.909 0-1.781 0.361-2.424 1.004s-1.004 1.515-1.004 2.424v14.571c0 0.682 0.271 1.336 0.753 1.818s1.136 0.753 1.818 0.753h1.714c0.682 0 1.336-0.271 1.818-0.753s0.753-1.136 0.753-1.818v-12.857c0-0.227-0.090-0.445-0.251-0.606s-0.379-0.251-0.606-0.251h-0.857c-0.227 0-0.445 0.090-0.606 0.251s-0.251 0.379-0.251 0.606v9.429c0 0.473-0.384 0.857-0.857 0.857s-0.857-0.384-0.857-0.857v-9.429c0-0.682 0.271-1.336 0.753-1.818s1.136-0.753 1.818-0.753h0.857c0.682 0 1.336 0.271 1.818 0.753s0.753 1.136 0.753 1.818v12.857c0 1.137-0.452 2.227-1.255 3.030s-1.894 1.255-3.030 1.255h-1.714c-1.137 0-2.227-0.452-3.030-1.255s-1.255-1.894-1.255-3.030v-14.571c0-1.364 0.542-2.672 1.506-3.637z' })\n);\n\nicons.baggage = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M7.358 6h-2.643c-2.367 0-4.286 1.919-4.286 4.286v9.429c0 2.367 1.919 4.286 4.286 4.286h15.429c2.367 0 4.286-1.919 4.286-4.286v-9.429c0-2.367-1.919-4.286-4.286-4.286h-2.643c-0.177-1.046-0.674-2.019-1.434-2.779-0.965-0.964-2.273-1.506-3.636-1.506s-2.672 0.542-3.637 1.506c-0.76 0.76-1.258 1.733-1.434 2.779zM10.004 4.433c0.643-0.643 1.515-1.004 2.424-1.004s1.781 0.361 2.424 1.004c0.437 0.437 0.744 0.979 0.895 1.567h-6.639c0.152-0.588 0.459-1.13 0.895-1.567zM16.714 7.714v14.571h-8.571v-14.571h8.571zM2.143 10.286c0-1.42 1.151-2.571 2.571-2.571h1.714v14.571h-1.714c-1.42 0-2.571-1.151-2.571-2.571v-9.429zM18.429 22.286v-14.571h1.714c1.42 0 2.571 1.151 2.571 2.571v9.429c0 1.42-1.151 2.571-2.571 2.571h-1.714z' })\n);\n\nicons.bookmark = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M7 1.714c-0.227 0-0.445 0.090-0.606 0.251s-0.251 0.379-0.251 0.606v18.502l5.394-5.394c0.335-0.335 0.877-0.335 1.212 0l5.394 5.394v-18.502c0-0.227-0.090-0.445-0.251-0.606s-0.379-0.251-0.606-0.251h-10.286zM5.182 0.753c0.482-0.482 1.136-0.753 1.818-0.753h10.286c0.682 0 1.336 0.271 1.818 0.753s0.753 1.136 0.753 1.818v20.571c0 0.347-0.209 0.659-0.529 0.792s-0.689 0.059-0.934-0.186l-6.251-6.251-6.251 6.251c-0.245 0.245-0.614 0.318-0.934 0.186s-0.529-0.445-0.529-0.792v-20.571c0-0.682 0.271-1.336 0.753-1.818z' })\n);\n\nicons.calendar = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M7.143 0.857c0-0.473-0.384-0.857-0.857-0.857s-0.857 0.384-0.857 0.857v6.857c0 0.473 0.384 0.857 0.857 0.857s0.857-0.384 0.857-0.857v-2.571h7.714c0.473 0 0.857-0.384 0.857-0.857s-0.384-0.857-0.857-0.857h-7.714v-2.571z' }),\n\twp.element.createElement('path', { d: 'M1.039 4.182c-0.482 0.482-0.753 1.136-0.753 1.818v15.429c0 0.682 0.271 1.336 0.753 1.818s1.136 0.753 1.818 0.753h18.857c0.682 0 1.336-0.271 1.818-0.753s0.753-1.136 0.753-1.818v-15.429c0-0.682-0.271-1.336-0.753-1.818s-1.136-0.753-1.818-0.753h-2.571v-2.571c0-0.473-0.384-0.857-0.857-0.857s-0.857 0.384-0.857 0.857v6.857c0 0.473 0.384 0.857 0.857 0.857s0.857-0.384 0.857-0.857v-2.571h2.571c0.227 0 0.445 0.090 0.606 0.251s0.251 0.379 0.251 0.606v4.286h-20.571v-4.286c0-0.227 0.090-0.445 0.251-0.606s0.379-0.251 0.606-0.251c0.473 0 0.857-0.384 0.857-0.857s-0.384-0.857-0.857-0.857c-0.682 0-1.336 0.271-1.818 0.753zM2 21.429v-9.429h20.571v9.429c0 0.227-0.090 0.445-0.251 0.606s-0.379 0.251-0.606 0.251h-18.857c-0.227 0-0.445-0.090-0.606-0.251s-0.251-0.379-0.251-0.606z' })\n);\n\nicons.clock = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M12.143 1.714c-5.681 0-10.286 4.605-10.286 10.286s4.605 10.286 10.286 10.286c5.681 0 10.286-4.605 10.286-10.286s-4.605-10.286-10.286-10.286zM0.143 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12c-6.627 0-12-5.373-12-12z' }),\n\twp.element.createElement('path', { d: 'M12.143 6.857c0.473 0 0.857 0.384 0.857 0.857v3.968l4.148 4.833c0.308 0.359 0.267 0.9-0.092 1.209s-0.9 0.267-1.209-0.092l-4.354-5.074c-0.133-0.155-0.207-0.353-0.207-0.558v-4.286c0-0.473 0.384-0.857 0.857-0.857z' })\n);\n\nicons.crown = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M12.429 2.571c0.28 0 0.542 0.136 0.702 0.366l5.414 7.735 4.42-4.42c0.245-0.245 0.614-0.318 0.934-0.186s0.529 0.445 0.529 0.792v11.143c0 0.909-0.361 1.781-1.004 2.424s-1.515 1.004-2.424 1.004h-17.143c-0.909 0-1.781-0.361-2.424-1.004s-1.004-1.515-1.004-2.424v-11.143c0-0.347 0.209-0.659 0.529-0.792s0.689-0.059 0.934 0.186l4.42 4.421 5.414-7.735c0.16-0.229 0.423-0.366 0.702-0.366zM12.429 4.923l-5.298 7.568c-0.145 0.208-0.375 0.34-0.627 0.362s-0.502-0.069-0.681-0.248l-3.68-3.68v9.074c0 0.455 0.181 0.891 0.502 1.212s0.758 0.502 1.212 0.502h17.143c0.455 0 0.891-0.181 1.212-0.502s0.502-0.758 0.502-1.212v-9.074l-3.68 3.68c-0.179 0.179-0.429 0.27-0.681 0.248s-0.482-0.155-0.627-0.362l-5.298-7.568z' })\n);\n\nicons.flash = wp.element.createElement(\n\t'svg',\n\t{ width: '24px', height: '24px', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M6.496 0.523c0.134-0.317 0.445-0.523 0.789-0.523h9.429c0.297 0 0.573 0.154 0.729 0.407s0.17 0.568 0.038 0.834l-2.808 5.617h5.053c0.34 0.005 0.67 0.11 0.95 0.303s0.496 0.465 0.621 0.781c0.125 0.316 0.153 0.662 0.081 0.994s-0.241 0.635-0.486 0.871l-0.005 0.005-14.726 13.954c-0.28 0.266-0.704 0.311-1.034 0.111s-0.486-0.597-0.38-0.968l3.116-10.907h-3.651c-0.281-0.001-0.557-0.072-0.804-0.205s-0.458-0.325-0.614-0.558c-0.156-0.234-0.252-0.502-0.279-0.781s0.014-0.561 0.12-0.821l0.004-0.009 3.857-9.103zM7.853 1.714l-3.632 8.571h4.779c0.269 0 0.522 0.126 0.684 0.341s0.214 0.493 0.14 0.752l-2.568 8.987 12.446-11.794h-6.417c-0.297 0-0.573-0.154-0.729-0.407s-0.17-0.568-0.037-0.834l2.808-5.617h-7.474z' })\n);\n\nicons.heart = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M3.986 12.151c-2.152-2.168-1.686-5.364 0.173-7.21 0.912-0.906 2.122-1.436 3.462-1.339s2.939 0.832 4.593 2.707c0.163 0.185 0.397 0.29 0.643 0.29s0.48-0.106 0.643-0.29c1.654-1.875 3.251-2.608 4.587-2.702s2.543 0.437 3.454 1.345c1.858 1.853 2.32 5.049 0.187 7.198l-8.871 8.035-8.871-8.035zM12.857 4.494c-1.678-1.66-3.43-2.479-5.112-2.601-1.898-0.138-3.578 0.625-4.794 1.832-2.393 2.376-3.137 6.678-0.163 9.653 0.010 0.010 0.020 0.020 0.031 0.029l9.463 8.571c0.327 0.296 0.824 0.296 1.151 0l9.463-8.571c0.010-0.009 0.021-0.019 0.031-0.029 2.959-2.959 2.21-7.261-0.174-9.639-1.213-1.209-2.889-1.976-4.786-1.841-1.68 0.119-3.432 0.938-5.109 2.597z' })\n);\n\nicons.pin = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M17.609 0.154c-0.365-0.117-0.751-0.15-1.131-0.099s-0.743 0.188-1.063 0.398c-0.314 0.206-0.58 0.479-0.777 0.799l-3.502 5.237-7.378 1.643c-0.323 0.078-0.619 0.24-0.859 0.47s-0.415 0.518-0.507 0.837c-0.092 0.319-0.099 0.657-0.019 0.979s0.243 0.618 0.474 0.857l0.010 0.010 4.724 4.732-6.474 6.522c-0.334 0.336-0.332 0.879 0.004 1.212s0.879 0.331 1.212-0.004l6.469-6.516 4.608 4.615c0.010 0.010 0.021 0.020 0.031 0.030 0.243 0.22 0.538 0.373 0.858 0.445s0.652 0.061 0.966-0.033c0.314-0.094 0.598-0.268 0.825-0.504s0.389-0.527 0.471-0.844l0.004-0.015 1.737-7.277 5.308-3.425c0.323-0.198 0.598-0.465 0.805-0.781 0.21-0.32 0.346-0.683 0.398-1.063s0.018-0.766-0.099-1.131-0.313-0.699-0.576-0.978l-0.018-0.019-5.522-5.521c-0.279-0.262-0.613-0.459-0.978-0.576zM16.71 1.754c0.127-0.017 0.255-0.006 0.377 0.033 0.118 0.038 0.227 0.101 0.318 0.184l5.481 5.481c0.084 0.091 0.147 0.2 0.184 0.318 0.039 0.122 0.050 0.25 0.033 0.377s-0.063 0.248-0.132 0.354c-0.070 0.107-0.163 0.197-0.272 0.263l-0.020 0.013-5.606 3.617c-0.186 0.12-0.318 0.306-0.369 0.521l-1.815 7.601c-0.009 0.030-0.024 0.057-0.045 0.079-0.023 0.023-0.051 0.040-0.082 0.050s-0.064 0.010-0.096 0.003c-0.027-0.006-0.053-0.018-0.075-0.036l-10.514-10.531c-0.020-0.021-0.033-0.047-0.040-0.075-0.007-0.029-0.007-0.060 0.002-0.089s0.024-0.055 0.046-0.076c0.021-0.020 0.046-0.034 0.074-0.042l7.686-1.712c0.215-0.048 0.404-0.177 0.526-0.36l3.703-5.537c0.007-0.010 0.014-0.021 0.020-0.032 0.066-0.109 0.156-0.202 0.263-0.272s0.228-0.115 0.354-0.133z' })\n);\n\nicons.trophy = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M7.571 0h10.286c0.473 0 0.857 0.384 0.857 0.857v0.857h5.143c0.473 0 0.857 0.384 0.857 0.857v1.714c0 1.591-0.632 3.117-1.757 4.243s-2.651 1.757-4.243 1.757h-0.062c-0.184 1.274-0.775 2.464-1.696 3.385s-2.111 1.512-3.386 1.696v6.919h3.429c0.473 0 0.857 0.384 0.857 0.857s-0.384 0.857-0.857 0.857h-8.571c-0.473 0-0.857-0.384-0.857-0.857s0.384-0.857 0.857-0.857h3.429v-6.919c-1.274-0.184-2.464-0.775-3.386-1.696s-1.512-2.111-1.696-3.386h-0.062c-1.591 0-3.117-0.632-4.243-1.757s-1.757-2.651-1.757-4.243v-1.714c0-0.473 0.384-0.857 0.857-0.857h5.143v-0.857c0-0.473 0.384-0.857 0.857-0.857zM18.714 3.429v5.143c1.137 0 2.227-0.452 3.030-1.255s1.255-1.894 1.255-3.030v-0.857h-4.286zM17 1.714h-8.571v7.714c0 1.137 0.452 2.227 1.255 3.030s1.894 1.255 3.030 1.255 2.227-0.451 3.030-1.255c0.804-0.804 1.255-1.894 1.255-3.030v-7.714zM6.714 8.571v-5.143h-4.286v0.857c0 1.137 0.452 2.227 1.255 3.030s1.894 1.255 3.030 1.255z' })\n);\n\nicons.view = wp.element.createElement(\n\t'svg',\n\t{ width: '25px', height: '24px', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg' },\n\twp.element.createElement('path', { d: 'M12.714 7.714c-2.367 0-4.286 1.919-4.286 4.286s1.919 4.286 4.286 4.286 4.286-1.919 4.286-4.286c0-2.367-1.919-4.286-4.286-4.286zM10.143 12c0-1.42 1.151-2.571 2.571-2.571s2.571 1.151 2.571 2.571c0 1.42-1.151 2.571-2.571 2.571s-2.571-1.151-2.571-2.571z' }),\n\twp.element.createElement('path', { d: 'M12.714 4.286c-2.615 0-4.996 1.029-6.921 2.264-1.93 1.238-3.459 2.721-4.387 3.719l-0.008 0.009c-0.426 0.473-0.662 1.086-0.662 1.723s0.236 1.25 0.662 1.723l0.008 0.009c0.927 0.998 2.457 2.481 4.387 3.719 1.925 1.235 4.307 2.264 6.921 2.264s4.996-1.029 6.921-2.264c1.93-1.238 3.459-2.721 4.386-3.719l0.008-0.009c0.426-0.472 0.663-1.086 0.663-1.723s-0.236-1.25-0.663-1.723l-0.008-0.009c-0.927-0.998-2.457-2.481-4.386-3.719-1.925-1.235-4.307-2.264-6.921-2.264zM2.45 12c0-0.21 0.077-0.413 0.217-0.57 0.873-0.939 2.29-2.307 4.051-3.437 1.769-1.135 3.828-1.992 5.996-1.992s4.227 0.857 5.996 1.992c1.761 1.13 3.178 2.499 4.052 3.437 0.14 0.157 0.217 0.36 0.217 0.57s-0.077 0.414-0.217 0.57c-0.873 0.939-2.29 2.307-4.051 3.438-1.769 1.135-3.828 1.992-5.996 1.992s-4.227-0.857-5.996-1.992c-1.761-1.13-3.179-2.499-4.051-3.438-0.14-0.157-0.217-0.36-0.217-0.57z' })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/icons.js?");

/***/ }),

/***/ "./src/blocks/icon/index.js":
/*!**********************************!*\
  !*** ./src/blocks/icon/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/icon/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/icon/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/icon/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/icon/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/icon/styles/style.scss\");\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/index.js?");

/***/ }),

/***/ "./src/blocks/icon/save.js":
/*!*********************************!*\
  !*** ./src/blocks/icon/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./src/blocks/icon/icons.js\");\n/**\n * External dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar useBlockProps = wp.blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar iconType = attributes.iconType,\n\t    iconSize = attributes.iconSize,\n\t    alignment = attributes.alignment;\n\n\n\tvar iconClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), iconType, iconSize, alignment, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: iconClasses\n\t});\n\n\tvar icon = iconType === 'quote' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].quote : iconType === 'attachment' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].attachment : iconType === 'baggage' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].baggage : iconType === 'bookmark' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bookmark : iconType === 'calendar' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calendar : iconType === 'clock' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clock : iconType === 'flash' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flash : iconType === 'heart' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].heart : iconType === 'pin' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pin : iconType === 'trophy' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].trophy : iconType === 'view' ? _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].view : _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].attachment;\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\ticon\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/save.js?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/multiple-buttons/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MultipleButtonsEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memize */ \"./node_modules/memize/index.js\");\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/times */ \"./node_modules/lodash/times.js\");\n/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * External dependencies\n */\n\n\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\n\n/**\n * Constants\n */\n\nvar ALLOWED_BLOCKS = ['ainoblocks/button'];\n\n/**\n * Returns the layouts configuration for a given number of items.\n *\n * @param {number} count Number of feature items.\n *\n * @return {Object[]} Columns layout configuration.\n */\nvar getCount = memize__WEBPACK_IMPORTED_MODULE_1___default()(function (count) {\n\treturn lodash_times__WEBPACK_IMPORTED_MODULE_2___default()(count, function () {\n\t\treturn ['ainoblocks/button'];\n\t});\n});\n\n/**\n * Block edit function\n */\nfunction MultipleButtonsEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected;\n\tvar align = attributes.align,\n\t    items = attributes.items,\n\t    flexDirection = attributes.flexDirection,\n\t    fullWidth = attributes.fullWidth;\n\n\n\tvar flexDirectionOptions = [{ value: \"direction__row\", label: __('row', 'ainoblocks') }, { value: \"direction__rowrev\", label: __('row-reverse', 'ainoblocks') }, { value: \"direction__col\", label: __('column', 'ainoblocks') }, { value: \"direction__colrev\", label: __('column-reverse', 'ainoblocks') }];\n\n\tvar buttonsClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, flexDirection, 'align' + align, {});\n\n\tvar innerClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-multiple-buttons__inner', {\n\t\t'stretch': fullWidth ? fullWidth : undefined\n\t});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: buttonsClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Buttons settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __(\"Flex Direction\", \"ainoblocks\"),\n\t\t\t\t\tvalue: flexDirection,\n\t\t\t\t\toptions: flexDirectionOptions,\n\t\t\t\t\tonChange: function onChange(flexDirection) {\n\t\t\t\t\t\treturn setAttributes({ flexDirection: flexDirection });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Inner buttons 100% width', 'ainoblocks'),\n\t\t\t\t\tchecked: !!fullWidth,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ fullWidth: !fullWidth });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!fullWidth ? __('Inner buttons are 100% width.', 'ainoblocks') : __('Toggle for inner buttons with 100% width.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: innerClasses },\n\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\tallowedBlocks: ALLOWED_BLOCKS,\n\t\t\t\t\ttemplate: getCount(items),\n\t\t\t\t\ttemplateLock: false,\n\t\t\t\t\ttemplateInsertUpdatesSelection: false\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/edit.js?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/icon.js":
/*!*********************************************!*\
  !*** ./src/blocks/multiple-buttons/icon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#ce99ff\", d: \"M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12z\" }),\n  wp.element.createElement(\"path\", { fill: \"#ad55ff\", d: \"M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8s8 3.582 8 8z\" }),\n  wp.element.createElement(\"path\", { fill: \"#6a00cc\", d: \"M16 12c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/icon.js?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/multiple-buttons/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/multiple-buttons/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/multiple-buttons/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/multiple-buttons/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/multiple-buttons/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/multiple-buttons/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/multiple-buttons/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('A row of buttons.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('button', 'ainoblocks'), __('buttons', 'ainoblocks'), __('link', 'ainoblocks'), __('cta', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\tsupports: {\n\t\talign: ['left', 'right', 'center']\n\t},\n\texample: {\n\t\tinnerBlocks: [{\n\t\t\tname: 'ainoblocks/button',\n\t\t\tattributes: {\n\t\t\t\tclassName: 'is-style-primary',\n\t\t\t\tlabel: __('Sign up', 'ainoblocks'),\n\t\t\t\tborderRadius: 'radius-circular',\n\t\t\t\tsize: 'size__l'\n\t\t\t}\n\t\t}, {\n\t\t\tname: 'ainoblocks/button',\n\t\t\tattributes: {\n\t\t\t\tclassName: 'is-style-outline',\n\t\t\t\tlabel: __('Learn more', 'ainoblocks'),\n\t\t\t\tborderRadius: 'radius-circular',\n\t\t\t\tsize: 'size__l'\n\t\t\t}\n\t\t}]\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/index.js?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/multiple-buttons/save.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies.\n */\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes,\n\t    className = _ref.className;\n\tvar align = attributes.align,\n\t    items = attributes.items,\n\t    flexDirection = attributes.flexDirection,\n\t    fullWidth = attributes.fullWidth;\n\n\n\tvar innerClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-ainoblocks-multiple-buttons__inner', {\n\t\t'has-margins': items > 1,\n\t\t'stretch': fullWidth ? fullWidth : undefined\n\t});\n\n\tvar buttonsClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), flexDirection, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: buttonsClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: innerClasses },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/save.js?");

/***/ }),

/***/ "./src/blocks/profile-image/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/profile-image/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProfileImageEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"./src/blocks/profile-image/icons.js\");\n\n/**\n * External dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl;\n\n/**\n * Block edit function\n */\n\nfunction ProfileImageEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected;\n\tvar imgID = attributes.imgID,\n\t    imgURL = attributes.imgURL,\n\t    imgAlt = attributes.imgAlt,\n\t    imgSize = attributes.imgSize,\n\t    imgRadius = attributes.imgRadius,\n\t    borderWidth = attributes.borderWidth;\n\n\n\tvar onSelectImage = function onSelectImage(img) {\n\t\tsetAttributes({\n\t\t\timgID: img.id,\n\t\t\timgURL: img.url,\n\t\t\timgAlt: img.alt\n\t\t});\n\t};\n\tvar onRemoveImage = function onRemoveImage() {\n\t\tsetAttributes({\n\t\t\timgID: null,\n\t\t\timgURL: null,\n\t\t\timgAlt: null\n\t\t});\n\t};\n\n\tvar imgSizeOptions = [{ value: 'img-s', label: __('small', 'ainoblocks') }, { value: 'img-l', label: __('large', 'ainoblocks') }];\n\n\tvar profileImageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, imgSize, {});\n\n\tvar profileImageSmallStyles = {\n\t\twidth: 'calc(40px + ' + borderWidth + 'px * 2)',\n\t\tpadding: borderWidth ? borderWidth + 'px' : undefined,\n\t\tborderRadius: imgRadius + '%'\n\t};\n\n\tvar profileImageLargeStyles = {\n\t\twidth: 'calc(144px + ' + borderWidth + 'px * 2)',\n\t\tpadding: borderWidth ? borderWidth + 'px' : undefined,\n\t\tborderRadius: imgRadius + '%'\n\t};\n\n\tvar isImgSizeLarge = 'img-l' === imgSize;\n\n\tvar profileImageStyles = isImgSizeLarge ? profileImageLargeStyles : profileImageSmallStyles;\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: profileImageClasses,\n\t\tstyle: profileImageStyles\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Profile Image Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Image Radius', 'ainoblocks'),\n\t\t\t\t\tvalue: imgRadius,\n\t\t\t\t\tonChange: function onChange(imgRadius) {\n\t\t\t\t\t\treturn setAttributes({ imgRadius: imgRadius });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Image Size', 'ainoblocks'),\n\t\t\t\t\tvalue: imgSize,\n\t\t\t\t\toptions: imgSizeOptions,\n\t\t\t\t\tonChange: function onChange(imgSize) {\n\t\t\t\t\t\treturn setAttributes({ imgSize: imgSize });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width', 'ainoblocks'),\n\t\t\t\t\tvalue: borderWidth,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tallowReset: false,\n\t\t\t\t\tonChange: function onChange(borderWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderWidth: borderWidth });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\t!imgID ? wp.element.createElement(\n\t\t\tMediaUploadCheck,\n\t\t\tnull,\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onSelectImage,\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: imgID,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: \"button button-large\",\n\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t},\n\t\t\t\t\t\t_icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"].upload,\n\t\t\t\t\t\t__(' Upload Image', 'ainoblocks')\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t})\n\t\t) : wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement('img', (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, blockProps, {\n\t\t\t\tsrc: imgURL,\n\t\t\t\talt: imgAlt\n\t\t\t})),\n\t\t\tisSelected ? wp.element.createElement(\n\t\t\t\tButton,\n\t\t\t\t{\n\t\t\t\t\tclassName: 'remove-image',\n\t\t\t\t\tonClick: onRemoveImage\n\t\t\t\t},\n\t\t\t\t_icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove\n\t\t\t) : null\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/edit.js?");

/***/ }),

/***/ "./src/blocks/profile-image/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/profile-image/icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#cfb092\", d: \"M2 6h20v10h-20z\" }),\n  wp.element.createElement(\"path\", { fill: \"#725232\", d: \"M17 6c0 2.761-2.239 5-5 5s-5-2.239-5-5c0-2.761 2.239-5 5-5s5 2.239 5 5z\" }),\n  wp.element.createElement(\"path\", { fill: \"#44311e\", d: \"M22 23c0-5.523-4.477-10-10-10s-10 4.477-10 10h20z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/icon.js?");

/***/ }),

/***/ "./src/blocks/profile-image/icons.js":
/*!*******************************************!*\
  !*** ./src/blocks/profile-image/icons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar icons = {};\n\nicons.upload = wp.element.createElement(\n    'svg',\n    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement('path', { d: 'm77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z'\n    }),\n    wp.element.createElement('path', { d: 'm16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z'\n    }),\n    wp.element.createElement('path', { d: 'm28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z'\n    }),\n    wp.element.createElement('path', { d: 'm84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z'\n    })\n);\n\nicons.swap = wp.element.createElement(\n    'svg',\n    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement('path', { d: 'm39.66 76.422h36.762v-36.781h-36.762zm4.6211-32.141h27.5v27.5h-27.5z'\n    }),\n    wp.element.createElement('path', { d: 'm36.801 55.719h-8.582v-27.5h27.5v9.2031h4.6406v-13.844h-36.781v36.762h13.223z'\n    }),\n    wp.element.createElement('path', { d: 'm90.18 42.781c-3-16.801-16.02-29.922-33-32.961-2.3789-0.42187-4.7812-0.64062-7.1797-0.64062v4.6211c2.1211 0 4.2617 0.17969 6.3594 0.55859 14.781 2.6406 26.18 13.898 29.121 28.398l-5.6602 0.003907 8.0781 14 8.0781-14h-5.7969z'\n    }),\n    wp.element.createElement('path', { d: 'm14.52 57.219h5.6602l-8.0781-13.98-8.0781 14h5.8008c3 16.801 16.039 29.941 33 32.961 2.375 0.40234 4.7773 0.64062 7.1758 0.64062v-4.6406c-2.1016 0-4.2617-0.19922-6.3594-0.57812-14.781-2.6406-26.18-13.883-29.121-28.402z'\n    })\n);\n\nicons.remove = wp.element.createElement(\n    'svg',\n    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement('path', { d: 'm50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z'\n    })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/icons.js?");

/***/ }),

/***/ "./src/blocks/profile-image/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/profile-image/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/profile-image/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/profile-image/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/profile-image/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/profile-image/save.js\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/profile-image/styles/editor.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/profile-image/styles/style.scss\");\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/index.js?");

/***/ }),

/***/ "./src/blocks/profile-image/save.js":
/*!******************************************!*\
  !*** ./src/blocks/profile-image/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar useBlockProps = wp.blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar imgURL = attributes.imgURL,\n\t    imgAlt = attributes.imgAlt,\n\t    imgSize = attributes.imgSize,\n\t    imgRadius = attributes.imgRadius,\n\t    borderWidth = attributes.borderWidth;\n\n\n\tvar profileImageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((classnames__WEBPACK_IMPORTED_MODULE_1___default()), imgSize, {});\n\n\tvar profileImageSmallStyles = {\n\t\twidth: 'calc(40px + ' + borderWidth + 'px * 2)',\n\t\tpadding: borderWidth ? borderWidth + 'px' : undefined,\n\t\tborderRadius: imgRadius + '%'\n\t};\n\n\tvar profileImageLargeStyles = {\n\t\twidth: 'calc(144px + ' + borderWidth + 'px * 2)',\n\t\tpadding: borderWidth ? borderWidth + 'px' : undefined,\n\t\tborderRadius: imgRadius + '%'\n\t};\n\n\tvar isImgSizeLarge = 'img-l' === imgSize;\n\n\tvar profileImageStyles = isImgSizeLarge ? profileImageLargeStyles : profileImageSmallStyles;\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: profileImageClasses,\n\t\tstyle: profileImageStyles\n\t});\n\n\treturn wp.element.createElement('img', (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, blockProps, {\n\t\tsrc: imgURL,\n\t\talt: imgAlt\n\t}));\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/save.js?");

/***/ }),

/***/ "./src/blocks/sticker/edit.js":
/*!************************************!*\
  !*** ./src/blocks/sticker/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ stickerEdit)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/babel-runtime/helpers/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"./src/blocks/sticker/icons.js\");\n\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment,\n    useCallback = _wp$element.useCallback,\n    useState = _wp$element.useState;\nvar _wp$compose = wp.compose,\n    compose = _wp$compose.compose,\n    withInstanceId = _wp$compose.withInstanceId;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    ToolbarGroup = _wp$components.ToolbarGroup,\n    ToolbarButton = _wp$components.ToolbarButton,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl,\n    __experimentalNumberControl = _wp$components.__experimentalNumberControl,\n    Popover = _wp$components.Popover,\n    TabPanel = _wp$components.TabPanel;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    BlockIcon = _wp$blockEditor.BlockIcon,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    withColors = _wp$blockEditor.withColors,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    ColorPalette = _wp$blockEditor.ColorPalette,\n    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls;\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Constants\n */\nvar NEW_TAB_REL = 'noreferrer noopener';\n\n/**\n * Block edit function\n */\nfunction stickerEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className,\n\t    isSelected = _ref.isSelected,\n\t    opensInNewTab = _ref.opensInNewTab;\n\tvar label = attributes.label,\n\t    url = attributes.url,\n\t    linkTarget = attributes.linkTarget,\n\t    rel = attributes.rel,\n\t    stickerSize = attributes.stickerSize,\n\t    fontSize = attributes.fontSize,\n\t    borderRadius = attributes.borderRadius,\n\t    borderWidth = attributes.borderWidth,\n\t    uppercase = attributes.uppercase,\n\t    backgroundColor = attributes.backgroundColor,\n\t    textColor = attributes.textColor,\n\t    borderColor = attributes.borderColor,\n\t    rotate = attributes.rotate,\n\t    rotateStart = attributes.rotateStart;\n\n\n\tvar fontSizeOptions = [{ value: 'font__ssx', label: __('SSX', 'ainoblocks') }, { value: 'font__sx', label: __('SX', 'ainoblocks') }, { value: 'font__s', label: __('S', 'ainoblocks') }, { value: 'font__m', label: __('M', 'ainoblocks') }, { value: 'font__l', label: __('L', 'ainoblocks') }, { value: 'font__xl', label: __('XL', 'ainoblocks') }, { value: 'font__xxl', label: __('XXL', 'ainoblocks') }, { value: 'font__xxxl', label: __('3XL', 'ainoblocks') }, { value: 'font__xxxxl', label: __('4XL', 'ainoblocks') }];\n\n\tvar rotateOptions = [{ value: 'rotate__none', label: __('none', 'ainoblocks') }, { value: 'rotate__infinite', label: __('infinite', 'ainoblocks') }, { value: 'rotate__hover', label: __('on hover', 'ainoblocks') }];\n\n\tvar styles = {\n\t\tbackgroundColor: backgroundColor,\n\t\tcolor: textColor,\n\t\tborderColor: borderColor,\n\t\tborderRadius: borderRadius ? borderRadius + '%' : undefined,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined,\n\t\ttransform: 'rotateZ(' + rotateStart + 'deg)'\n\t};\n\n\tvar onToggleOpenInNewTab = useCallback(function (value) {\n\t\tvar newLinkTarget = value ? '_blank' : undefined;\n\n\t\tvar updatedRel = rel;\n\t\tif (newLinkTarget && !rel) {\n\t\t\tupdatedRel = NEW_TAB_REL;\n\t\t} else if (!newLinkTarget && rel === NEW_TAB_REL) {\n\t\t\tupdatedRel = undefined;\n\t\t}\n\n\t\tsetAttributes({\n\t\t\tlinkTarget: newLinkTarget,\n\t\t\trel: updatedRel\n\t\t});\n\t}, [rel, setAttributes]);\n\n\tvar onSetLinkRel = useCallback(function (value) {\n\t\tsetAttributes({ rel: value });\n\t}, [setAttributes]);\n\n\tvar _useState = useState(false),\n\t    _useState2 = (0,babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n\t    isURLPickerOpen = _useState2[0],\n\t    setIsURLPickerOpen = _useState2[1];\n\n\tvar urlIsSet = !!url;\n\tvar urlIsSetandSelected = urlIsSet && isSelected;\n\n\tvar openLinkControl = function openLinkControl() {\n\t\tsetIsURLPickerOpen(true);\n\t\treturn false; // prevents default behaviour for event\n\t};\n\n\tvar unlinkButton = function unlinkButton() {\n\t\tsetAttributes({\n\t\t\turl: undefined,\n\t\t\tlinkTarget: undefined,\n\t\t\trel: undefined\n\t\t});\n\t\tsetIsURLPickerOpen(false);\n\t};\n\n\tvar linkControl = (isURLPickerOpen || urlIsSetandSelected) && wp.element.createElement(\n\t\tPopover,\n\t\t{\n\t\t\tposition: 'bottom center',\n\t\t\tonClose: function onClose() {\n\t\t\t\treturn setIsURLPickerOpen(false);\n\t\t\t}\n\t\t},\n\t\twp.element.createElement(__experimentalLinkControl, {\n\t\t\tclassName: 'wp-block-navigation-link__inline-link-input',\n\t\t\tvalue: { url: url, opensInNewTab: opensInNewTab },\n\t\t\tonChange: function onChange(_ref2) {\n\t\t\t\tvar _ref2$url = _ref2.url,\n\t\t\t\t    newURL = _ref2$url === undefined ? '' : _ref2$url,\n\t\t\t\t    newOpensInNewTab = _ref2.opensInNewTab;\n\n\t\t\t\tsetAttributes({ url: newURL });\n\n\t\t\t\tif (opensInNewTab !== newOpensInNewTab) {\n\t\t\t\t\tonToggleOpenInNewTab(newOpensInNewTab);\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t);\n\n\tvar stickerSizeTooltipContent = function stickerSizeTooltipContent(stickerSize) {\n\t\treturn 'size ' + stickerSize;\n\t};\n\tvar borderRadiusTooltipContent = function borderRadiusTooltipContent(borderRadius) {\n\t\treturn borderRadius + 'px';\n\t};\n\tvar borderWidthTooltipContent = function borderWidthTooltipContent(borderWidth) {\n\t\treturn borderWidth + 'px';\n\t};\n\tvar rotateStartTooltipContent = function rotateStartTooltipContent(rotateStart) {\n\t\treturn rotateStart + 'degrees';\n\t};\n\n\tvar stickerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {});\n\tvar blockProps = useBlockProps({\n\t\tclassName: stickerClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tToolbarGroup,\n\t\t\t\tnull,\n\t\t\t\t!urlIsSet && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link }),\n\t\t\t\t\ttitle: __('Link', 'ainoblocks'),\n\t\t\t\t\tonClick: openLinkControl\n\t\t\t\t}),\n\t\t\t\turlIsSetandSelected && wp.element.createElement(ToolbarButton, {\n\t\t\t\t\tname: 'link',\n\t\t\t\t\ticon: wp.element.createElement(BlockIcon, { icon: _icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].linkOff }),\n\t\t\t\t\ttitle: __('Unlink', 'ainoblocks'),\n\t\t\t\t\tonClick: unlinkButton,\n\t\t\t\t\tisActive: true\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\tlinkControl,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Sticker Settings', 'ainoblocks')\n\t\t\t\t},\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Sticker Size', 'ainoblocks'),\n\t\t\t\t\tvalue: stickerSize,\n\t\t\t\t\tonChange: function onChange(stickerSize) {\n\t\t\t\t\t\treturn setAttributes({ stickerSize: stickerSize });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: 9,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\tresetFallbackValue: 7,\n\t\t\t\t\trenderTooltipContent: stickerSizeTooltipContent\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Radius', 'ainoblocks'),\n\t\t\t\t\tvalue: borderRadius,\n\t\t\t\t\tonChange: function onChange(borderRadius) {\n\t\t\t\t\t\treturn setAttributes({ borderRadius: borderRadius });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 100,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\trenderTooltipContent: borderRadiusTooltipContent\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Border Width', 'ainoblocks'),\n\t\t\t\t\thelp: __('Do not forget to choose a border color in the Color settings.', 'ainoblocks'),\n\t\t\t\t\tvalue: borderWidth,\n\t\t\t\t\tonChange: function onChange(borderWidth) {\n\t\t\t\t\t\treturn setAttributes({ borderWidth: borderWidth });\n\t\t\t\t\t},\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 50,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\trenderTooltipContent: borderWidthTooltipContent\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Typography', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Font Size', 'ainoblocks'),\n\t\t\t\t\tvalue: fontSize,\n\t\t\t\t\toptions: fontSizeOptions,\n\t\t\t\t\tonChange: function onChange(fontSize) {\n\t\t\t\t\t\treturn setAttributes({ fontSize: fontSize });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Uppercase Text', 'ainoblocks'),\n\t\t\t\t\tchecked: !!uppercase,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ uppercase: !uppercase });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!uppercase ? __('Uppercase text is used.', 'ainoblocks') : __('Toggle for uppercase text.', 'ainoblocks')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color Settings', 'ainoblocks'),\n\t\t\t\tinitialOpen: false,\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: backgroundColor,\n\t\t\t\t\tonChange: function onChange(backgroundColor) {\n\t\t\t\t\t\tsetAttributes({ backgroundColor: backgroundColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Background Color', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: textColor,\n\t\t\t\t\tonChange: function onChange(textColor) {\n\t\t\t\t\t\tsetAttributes({ textColor: textColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Text Color', 'ainoblocks')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: borderColor,\n\t\t\t\t\tonChange: function onChange(borderColor) {\n\t\t\t\t\t\tsetAttributes({ borderColor: borderColor });\n\t\t\t\t\t},\n\t\t\t\t\tlabel: __('Border Color', 'ainoblocks')\n\t\t\t\t}]\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Animation', 'ainoblocks'),\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Rotate', 'ainoblocks'),\n\t\t\t\t\tvalue: rotate,\n\t\t\t\t\toptions: rotateOptions,\n\t\t\t\t\tonChange: function onChange(rotate) {\n\t\t\t\t\t\treturn setAttributes({ rotate: rotate });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Starting Position', 'ainoblocks'),\n\t\t\t\t\tvalue: rotateStart,\n\t\t\t\t\tonChange: function onChange(rotateStart) {\n\t\t\t\t\t\treturn setAttributes({ rotateStart: rotateStart });\n\t\t\t\t\t},\n\t\t\t\t\tmin: -360,\n\t\t\t\t\tmax: 360,\n\t\t\t\t\tinitialPosition: 0,\n\t\t\t\t\tallowReset: true,\n\t\t\t\t\trenderTooltipContent: rotateStartTooltipContent\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\tInspectorAdvancedControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tlabel: __('Link rel'),\n\t\t\t\tvalue: rel || '',\n\t\t\t\tonChange: onSetLinkRel\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tplaceholder: __(\"Add text…\", 'ainoblocks'),\n\t\t\t\tvalue: label,\n\t\t\t\ttagName: 'div',\n\t\t\t\tclassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-ainoblocks-sticker__content', fontSize, rotate, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n\t\t\t\t\t'has-custom-background': backgroundColor,\n\t\t\t\t\t'has-custom-text-color': textColor,\n\t\t\t\t\t'has-custom-border-color': borderColor,\n\t\t\t\t\t'is-uppercase': uppercase\n\t\t\t\t}, 'size__' + stickerSize, stickerSize ? stickerSize : undefined)),\n\t\t\t\tstyle: styles,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\tsetAttributes({ label: value });\n\t\t\t\t},\n\t\t\t\tformattingControls: ['bold', 'italic'],\n\t\t\t\trel: 'noopener noreferrer',\n\t\t\t\topensInNewTab: linkTarget === '_blank',\n\t\t\t\tonToggleOpenInNewTab: onToggleOpenInNewTab\n\t\t\t})\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/edit.js?");

/***/ }),

/***/ "./src/blocks/sticker/icon.js":
/*!************************************!*\
  !*** ./src/blocks/sticker/icon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#f7a12c\", d: \"M24 12.058c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12z\" }),\n  wp.element.createElement(\"path\", { fill: \"#fde5c5\", d: \"M12 18.058c4.418 0 8.418-2 12-6-3.582-4-7.582-6-12-6s-8.418 2-12 6c3.582 4 7.582 6 12 6z\" }),\n  wp.element.createElement(\"path\", { fill: \"#e08509\", d: \"M16 12c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/icon.js?");

/***/ }),

/***/ "./src/blocks/sticker/icons.js":
/*!*************************************!*\
  !*** ./src/blocks/sticker/icons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\nvar icons = {};\n\nicons.link = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z\" })\n);\n\nicons.linkOff = wp.element.createElement(\n\tSVG,\n\t{ xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(Path, { d: \"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z\" })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/icons.js?");

/***/ }),

/***/ "./src/blocks/sticker/index.js":
/*!*************************************!*\
  !*** ./src/blocks/sticker/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/sticker/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/sticker/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/sticker/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/sticker/save.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/sticker/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/sticker/styles/editor.scss\");\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x;\nvar registerBlockCollection = wp.blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\tdescription: __('A circle sticker with a text slogan to highlight featured elements.', 'ainoblocks'),\n\tcategory: typeof registerBlockCollection === 'function' ? 'design' : 'ainoblocks',\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tkeywords: [__('sticker', 'ainoblocks'), __('link', 'ainoblocks'), __('featured', 'ainoblocks'), __('sticker', 'ainoblocks'), __('aino blocks', 'ainoblocks')],\n\tsupports: {\n\t\t\"anchor\": true\n\t},\n\texample: {\n\t\tname: 'ainoblocks/sticker',\n\t\tattributes: {\n\t\t\tlabel: __('New', 'ainoblocks'),\n\t\t\tstickerSize: '4',\n\t\t\tfontSize: 'font__xxl',\n\t\t\tbackgroundColor: '#f7a12c',\n\t\t\ttextColor: '#121212',\n\t\t\trotateStart: '-30',\n\t\t\trotate: 'rotate__infinite'\n\t\t}\n\t},\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/index.js?");

/***/ }),

/***/ "./src/blocks/sticker/save.js":
/*!************************************!*\
  !*** ./src/blocks/sticker/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar _classnames;\n\n\tvar attributes = _ref.attributes;\n\tvar url = attributes.url,\n\t    label = attributes.label,\n\t    backgroundColor = attributes.backgroundColor,\n\t    textColor = attributes.textColor,\n\t    borderColor = attributes.borderColor,\n\t    linkTarget = attributes.linkTarget,\n\t    rel = attributes.rel,\n\t    stickerSize = attributes.stickerSize,\n\t    borderRadius = attributes.borderRadius,\n\t    borderWidth = attributes.borderWidth,\n\t    uppercase = attributes.uppercase,\n\t    fontSize = attributes.fontSize,\n\t    rotate = attributes.rotate,\n\t    rotateStart = attributes.rotateStart;\n\n\n\tvar textClass = getColorClassName('color', textColor);\n\tvar borderClass = getColorClassName('border-color', borderColor);\n\tvar backgroundClass = getColorClassName('background-color', backgroundColor);\n\n\tvar stickerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-ainoblocks-sticker__content', fontSize, rotate, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'size__' + stickerSize, stickerSize ? stickerSize : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'has-custom-background', backgroundColor), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'has-custom-text-color', textColor), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'has-custom-border-color', borderColor), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classnames, 'is-uppercase', uppercase), _classnames));\n\n\tvar styles = {\n\t\tbackgroundColor: backgroundColor,\n\t\tcolor: textColor,\n\t\tborderColor: borderColor,\n\t\tborderRadius: borderRadius ? borderRadius + '%' : undefined,\n\t\tborderWidth: borderWidth ? borderWidth + 'px' : undefined,\n\t\ttransform: 'rotateZ(' + rotateStart + 'deg)'\n\t};\n\n\tvar wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((classnames__WEBPACK_IMPORTED_MODULE_1___default()), {});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tuseBlockProps.save({ className: wrapperClasses }),\n\t\twp.element.createElement(RichText.Content, {\n\t\t\ttagName: 'a',\n\t\t\tclassName: stickerClasses,\n\t\t\tstyle: styles,\n\t\t\thref: url,\n\t\t\tvalue: label,\n\t\t\ttarget: linkTarget,\n\t\t\trel: rel\n\t\t})\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/save.js?");

/***/ }),

/***/ "./src/blocks/testimonial/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/testimonial/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TestimonialEdit)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n/**\n * Block edit function\n */\n\nfunction TestimonialEdit(_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar style = attributes.style;\n\n\n\tvar TEMPLATE = [['ainoblocks/card', {}, [['ainoblocks/icon'], ['core/group', {}, [['core/paragraph', { placeholder: 'Write testimonial text...' }], ['ainoblocks/author']]]]]];\n\n\tvar styleOptions = [{ value: 'indent-none', label: __('default', 'ainoblocks') }, { value: 'indent-l', label: __('indented left', 'ainoblocks') }, { value: 'indent-r', label: __('indented right', 'ainoblocks') }];\n\n\tvar testimonialClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, style, {});\n\n\tvar blockProps = useBlockProps({\n\t\tclassName: testimonialClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Testimonial Settings', 'ainoblocks') },\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Style', 'ainoblocks'),\n\t\t\t\t\tvalue: style,\n\t\t\t\t\toptions: styleOptions,\n\t\t\t\t\tonChange: function onChange(style) {\n\t\t\t\t\t\treturn setAttributes({ style: style });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: TEMPLATE\n\t\t\t})\n\t\t)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/edit.js?");

/***/ }),

/***/ "./src/blocks/testimonial/icon.js":
/*!****************************************!*\
  !*** ./src/blocks/testimonial/icon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wp.element.createElement(\n  SVG,\n  { className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { fill: \"#e58cf4\", d: \"M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12h24z\" }),\n  wp.element.createElement(\"path\", { fill: \"#d136ec\", d: \"M20.75 12c0-4.832-3.918-8.75-8.75-8.75s-8.75 3.918-8.75 8.75h17.5z\" }),\n  wp.element.createElement(\"path\", { fill: \"#820e96\", d: \"M20.75 12c0 2.551-1.092 4.847-2.833 6.446l-5.917 5.554v-3.25c-4.832 0-8.75-3.918-8.75-8.75h17.5z\" })\n));\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/icon.js?");

/***/ }),

/***/ "./src/blocks/testimonial/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/testimonial/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"metadata\": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/blocks/testimonial/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/blocks/testimonial/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/testimonial/block.json\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/blocks/testimonial/save.js\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/blocks/testimonial/styles/editor.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/blocks/testimonial/styles/style.scss\");\n/**\n* WordPress dependencies\n*/\nvar __ = wp.i18n.__;\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;\n\n\n\n\nvar settings = {\n\ticon: _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tsave: _save__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/index.js?");

/***/ }),

/***/ "./src/blocks/testimonial/save.js":
/*!****************************************!*\
  !*** ./src/blocks/testimonial/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n\n\nfunction save(_ref) {\n\tvar attributes = _ref.attributes;\n\tvar style = attributes.style;\n\n\n\tvar testimonialClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()((classnames__WEBPACK_IMPORTED_MODULE_0___default()), style, {});\n\n\tvar blockProps = useBlockProps.save({\n\t\tclassName: testimonialClasses\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tblockProps,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n}\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/save.js?");

/***/ }),

/***/ "./src/extensions/border-radius/index.js":
/*!***********************************************!*\
  !*** ./src/extensions/border-radius/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/extensions/border-radius/styles/editor.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/extensions/border-radius/styles/style.scss\");\n\n\n\n/**\n * External dependencies\n */\n\n\n\n/**\n * Internal Dependencies\n */\n\n\n\n/**\n * WordPress Dependencies\n */\nvar __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\n\n// Enable border-radius control on the following blocks\n\nvar enableBorderRadiusControlOnBlocks = ['core/image', 'core/code', 'core/preformatted', 'core/group', 'ainoblocks/card', 'ainoblocks/grid-item', 'ainoblocks/flexbox', 'ainoblocks/timeline-event-block'];\n\n/**\n * Add custom attributes to blocks.\n *\n * @param {Object} settings Settings for the block.\n *\n * @return {Object} settings customizes settings.\n */\nfunction borderRadiusAttributes(settings) {\n\n\t//check if object exists for old Gutenberg version compatibility\n\t//add enableBorderRadiusControlOnBlocks restriction\n\tif (typeof settings.attributes !== 'undefined' && enableBorderRadiusControlOnBlocks.includes(settings.name)) {\n\n\t\tsettings.attributes = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(settings.attributes, {\n\t\t\tborderRadius: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tborderTopLeft: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tborderTopRight: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tborderBottomLeft: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tborderBottomRight: {\n\t\t\t\ttype: 'string'\n\t\t\t}\n\t\t});\n\t}\n\n\treturn settings;\n}\n\n/**\n * Add settings with custom Control Panel.\n *\n * @param {function} BlockEdit Block edit component.\n *\n * @return {function} BlockEdit Modified block edit component.\n */\nfunction borderRadiusInspectorControls(BlockEdit) {\n\tvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n\t\treturn function (props) {\n\n\t\t\t// Do nothing if it's another block than our defined ones.\n\t\t\tif (!enableBorderRadiusControlOnBlocks.includes(props.name)) {\n\t\t\t\treturn wp.element.createElement(BlockEdit, props);\n\t\t\t}\n\n\t\t\tvar attributes = props.attributes,\n\t\t\t    setAttributes = props.setAttributes;\n\t\t\tvar borderRadius = attributes.borderRadius,\n\t\t\t    borderTopLeft = attributes.borderTopLeft,\n\t\t\t    borderTopRight = attributes.borderTopRight,\n\t\t\t    borderBottomLeft = attributes.borderBottomLeft,\n\t\t\t    borderBottomRight = attributes.borderBottomRight;\n\n\n\t\t\tvar borderRadiusOptions = [{ value: \"none\", label: __('Not set', 'ainoblocks') }, { value: \"xxs\", label: __('SSX', 'ainoblocks') }, { value: \"xs\", label: __('XS', 'ainoblocks') }, { value: \"s\", label: __('S', 'ainoblocks') }, { value: \"m\", label: __('M', 'ainoblocks') }, { value: \"l\", label: __('L', 'ainoblocks') }, { value: \"xl\", label: __('XL', 'ainoblocks') }, { value: \"xxl\", label: __('XXL', 'ainoblocks') }, { value: \"xxxl\", label: __('3XL', 'ainoblocks') }, { value: \"xxxxl\", label: __('4XL', 'ainoblocks') }, { value: \"rounded-full\", label: __('rounded full', 'ainoblocks') }];\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(BlockEdit, props),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tInspectorControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttitle: __('Border Radius', 'ainoblocks'),\n\t\t\t\t\t\t\tinitialOpen: false\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Border Radius (all)', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: borderRadius,\n\t\t\t\t\t\t\toptions: borderRadiusOptions,\n\t\t\t\t\t\t\tonChange: function onChange(borderRadius) {\n\t\t\t\t\t\t\t\treturn setAttributes({ borderRadius: borderRadius });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t(borderRadius === 'none' || borderRadius === undefined) && wp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Border Top Left', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: borderTopLeft,\n\t\t\t\t\t\t\toptions: borderRadiusOptions,\n\t\t\t\t\t\t\tonChange: function onChange(borderTopLeft) {\n\t\t\t\t\t\t\t\treturn setAttributes({ borderTopLeft: borderTopLeft });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t(borderRadius === 'none' || borderRadius === undefined) && wp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Border Top Right', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: borderTopRight,\n\t\t\t\t\t\t\toptions: borderRadiusOptions,\n\t\t\t\t\t\t\tonChange: function onChange(borderTopRight) {\n\t\t\t\t\t\t\t\treturn setAttributes({ borderTopRight: borderTopRight });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t(borderRadius === 'none' || borderRadius === undefined) && wp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Border Bottom Right', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: borderBottomRight,\n\t\t\t\t\t\t\toptions: borderRadiusOptions,\n\t\t\t\t\t\t\tonChange: function onChange(borderBottomRight) {\n\t\t\t\t\t\t\t\treturn setAttributes({ borderBottomRight: borderBottomRight });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t(borderRadius === 'none' || borderRadius === undefined) && wp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Border Bottom Left', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: borderBottomLeft,\n\t\t\t\t\t\t\toptions: borderRadiusOptions,\n\t\t\t\t\t\t\tonChange: function onChange(borderBottomLeft) {\n\t\t\t\t\t\t\t\treturn setAttributes({ borderBottomLeft: borderBottomLeft });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\t});\n\treturn withInspectorControls(BlockEdit);\n}\n\n/**\n * Override the default block element to add wrapper props.\n *\n * @param  {Function} BlockListBlock Original component\n * @return {Function} Wrapped component\n */\n\nvar withBorderRadiusClassName = createHigherOrderComponent(function (BlockListBlock) {\n\n\treturn function (props) {\n\t\tvar _classnames;\n\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className;\n\t\tvar borderRadius = attributes.borderRadius,\n\t\t    borderTopLeft = attributes.borderTopLeft,\n\t\t    borderTopRight = attributes.borderTopRight,\n\t\t    borderBottomLeft = attributes.borderBottomLeft,\n\t\t    borderBottomRight = attributes.borderBottomRight;\n\n\n\t\tvar classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'btl__' + borderTopLeft, borderTopLeft ? borderTopLeft : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'btr__' + borderTopRight, borderTopRight ? borderTopRight : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'bbl__' + borderBottomLeft, borderBottomLeft ? borderBottomLeft : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'bbr__' + borderBottomRight, borderBottomRight ? borderBottomRight : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'br-all__' + borderRadius, borderRadius ? borderRadius : undefined), _classnames));\n\n\t\treturn wp.element.createElement(BlockListBlock, (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, { className: classNames }));\n\t};\n}, 'withBorderRadiusClassName');\n\n/**\n * Add custom element class in save element.\n *\n * @param {Object} el         Block element.\n * @param {Object} block      Blocks object.\n * @param {Object} attributes attributes.\n *\n * @return {Object} el Modified block element.\n */\nfunction modifyBorderRadiusSaveSettings(el, block, attributes) {\n\n\tif (enableBorderRadiusControlOnBlocks.includes(block.name)) {\n\t\tvar borderRadius = attributes.borderRadius,\n\t\t    borderTopLeft = attributes.borderTopLeft,\n\t\t    borderTopRight = attributes.borderTopRight,\n\t\t    borderBottomLeft = attributes.borderBottomLeft,\n\t\t    borderBottomRight = attributes.borderBottomRight;\n\n\n\t\tif (borderTopLeft) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'btl__' + borderTopLeft);\n\t\t}\n\n\t\tif (borderTopRight) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'btr__' + borderTopRight);\n\t\t}\n\n\t\tif (borderBottomLeft) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'bbl__' + borderBottomLeft);\n\t\t}\n\n\t\tif (borderBottomRight) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'bbr__' + borderBottomRight);\n\t\t}\n\n\t\tif (borderRadius) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'br-all__' + borderRadius);\n\t\t}\n\t}\n\n\treturn el;\n}\n\n// Add Filters.\naddFilter('blocks.registerBlockType', 'ainoblocks/border-radius-attributes', borderRadiusAttributes);\n\naddFilter('editor.BlockEdit', 'ainoblocks/border-radius-inspector-controls', borderRadiusInspectorControls);\n\naddFilter('blocks.getSaveElement', 'ainoblocks/modify-border-radius-save-settings', modifyBorderRadiusSaveSettings);\n\naddFilter('editor.BlockListBlock', 'ainoblocks/modify-border-radius-save-settings', withBorderRadiusClassName);\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/border-radius/index.js?");

/***/ }),

/***/ "./src/extensions/spacing/index.js":
/*!*****************************************!*\
  !*** ./src/extensions/spacing/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/extensions/spacing/styles/style.scss\");\n/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ \"./src/extensions/spacing/styles/editor.scss\");\n\n\n\n/**\n * External dependencies\n */\n\n\n/**\n * Internal Dependencies\n */\n\n\n\n/**\n * WordPress Dependencies\n */\nvar __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\n\n// Enable spacing control on the following blocks\n\nvar enableSpacingControlOnBlocks = ['core/cover', 'core/group', 'core/columns', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery', 'core/quote', 'core/list', 'core/spacer', 'ainoblocks/multiple-buttons', 'ainoblocks/divider', 'ainoblocks/grid-container', 'ainoblocks/grid-item', 'ainoblocks/flexbox', 'ainoblocks/flex-item', 'ainoblocks/testimonial', 'ainoblocks/timeline-block', 'ainoblocks/timeline-event-block'];\n\n/**\n * Add custom attributes to blocks.\n *\n * @param {Object} settings Settings for the block.\n *\n * @return {Object} settings customizes settings.\n */\nfunction spacingAttributes(settings) {\n\n\t//check if object exists for old Gutenberg version compatibility\n\t//add enableSpacingControlOnBlocks restriction\n\tif (typeof settings.attributes !== 'undefined' && enableSpacingControlOnBlocks.includes(settings.name)) {\n\n\t\tsettings.attributes = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(settings.attributes, {\n\t\t\tpaddingTop: {\n\t\t\t\ttype: 'number'\n\t\t\t},\n\t\t\tpaddingBottom: {\n\t\t\t\ttype: 'number'\n\t\t\t},\n\t\t\tpaddingLeft: {\n\t\t\t\ttype: 'number'\n\t\t\t},\n\t\t\tpaddingRight: {\n\t\t\t\ttype: 'number'\n\t\t\t}\n\t\t});\n\t}\n\n\treturn settings;\n}\n\n/**\n * Add settings with custom Control Panel.\n *\n * @param {function} BlockEdit Block edit component.\n *\n * @return {function} BlockEdit Modified block edit component.\n */\nfunction spacingInspectorControls(BlockEdit) {\n\tvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n\t\treturn function (props) {\n\n\t\t\t// Do nothing if it's another block than our defined ones.\n\t\t\tif (!enableSpacingControlOnBlocks.includes(props.name)) {\n\t\t\t\treturn wp.element.createElement(BlockEdit, props);\n\t\t\t}\n\n\t\t\tvar attributes = props.attributes,\n\t\t\t    setAttributes = props.setAttributes;\n\t\t\tvar paddingTop = attributes.paddingTop,\n\t\t\t    paddingBottom = attributes.paddingBottom,\n\t\t\t    paddingLeft = attributes.paddingLeft,\n\t\t\t    paddingRight = attributes.paddingRight;\n\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(BlockEdit, props),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tInspectorControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttitle: __('Spacing', 'ainoblocks'),\n\t\t\t\t\t\t\tinitialOpen: true\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Padding Top', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: paddingTop,\n\t\t\t\t\t\t\tonChange: function onChange(paddingTop) {\n\t\t\t\t\t\t\t\treturn setAttributes({ paddingTop: paddingTop });\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tmin: 0,\n\t\t\t\t\t\t\tmax: 19,\n\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Padding Bottom', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: paddingBottom,\n\t\t\t\t\t\t\tonChange: function onChange(paddingBottom) {\n\t\t\t\t\t\t\t\treturn setAttributes({ paddingBottom: paddingBottom });\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tmin: 0,\n\t\t\t\t\t\t\tmax: 19,\n\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Padding Left', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: paddingLeft,\n\t\t\t\t\t\t\tonChange: function onChange(paddingLeft) {\n\t\t\t\t\t\t\t\treturn setAttributes({ paddingLeft: paddingLeft });\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tmin: 0,\n\t\t\t\t\t\t\tmax: 19,\n\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Padding Right', 'ainoblocks'),\n\t\t\t\t\t\t\tvalue: paddingRight,\n\t\t\t\t\t\t\tonChange: function onChange(paddingRight) {\n\t\t\t\t\t\t\t\treturn setAttributes({ paddingRight: paddingRight });\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tmin: 0,\n\t\t\t\t\t\t\tmax: 19,\n\t\t\t\t\t\t\tallowReset: true,\n\t\t\t\t\t\t\tresetFallbackValue: 0\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\t});\n\treturn withInspectorControls(BlockEdit);\n}\n\n/**\n * Override the default block element to add wrapper props.\n *\n * @param  {Function} BlockListBlock Original component\n * @return {Function} Wrapped component\n */\n\nvar withSpacingClassName = createHigherOrderComponent(function (BlockListBlock) {\n\n\treturn function (props) {\n\t\tvar _classnames;\n\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className;\n\t\tvar paddingTop = attributes.paddingTop,\n\t\t    paddingBottom = attributes.paddingBottom,\n\t\t    paddingLeft = attributes.paddingLeft,\n\t\t    paddingRight = attributes.paddingRight;\n\n\n\t\tvar classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classnames = {}, (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'pt__' + paddingTop, paddingTop ? paddingTop : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'pb__' + paddingBottom, paddingBottom ? paddingBottom : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'pl__' + paddingLeft, paddingLeft ? paddingLeft : undefined), (0,babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classnames, 'pr__' + paddingRight, paddingRight ? paddingRight : undefined), _classnames));\n\n\t\treturn wp.element.createElement(BlockListBlock, (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, { className: classNames }));\n\t};\n}, 'withSpacingClassName');\n\n/**\n * Add custom element class in save element.\n *\n * @param {Object} el         Block element.\n * @param {Object} block      Blocks object.\n * @param {Object} attributes attributes.\n *\n * @return {Object} el Modified block element.\n */\nfunction modifySpacingSaveSettings(el, block, attributes) {\n\n\tif (enableSpacingControlOnBlocks.includes(block.name)) {\n\t\tvar paddingTop = attributes.paddingTop,\n\t\t    paddingBottom = attributes.paddingBottom,\n\t\t    paddingLeft = attributes.paddingLeft,\n\t\t    paddingRight = attributes.paddingRight;\n\n\n\t\tif (paddingTop) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'pt__' + paddingTop);\n\t\t}\n\n\t\tif (paddingBottom) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'pb__' + paddingBottom);\n\t\t}\n\n\t\tif (paddingLeft) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'pl__' + paddingLeft);\n\t\t}\n\n\t\tif (paddingRight) {\n\t\t\tel.props.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(el.props.className, 'pr__' + paddingRight);\n\t\t}\n\t}\n\n\treturn el;\n}\n\n// Add Filters.\naddFilter('blocks.registerBlockType', 'ainoblocks/spacing-attributes', spacingAttributes);\n\naddFilter('editor.BlockEdit', 'ainoblocks/spacing-inspector-controls', spacingInspectorControls);\n\naddFilter('blocks.getSaveElement', 'ainoblocks/modify-spacing-save-settings', modifySpacingSaveSettings);\n\naddFilter('editor.BlockListBlock', 'ainoblocks/modify-spacing-save-settings', withSpacingClassName);\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/spacing/index.js?");

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/***/ (() => {

eval("wp.i18n.setLocaleData({ '': {} }, 'ainoblocks');\n\n//# sourceURL=webpack://ainoblocks/./src/i18n.js?");

/***/ }),

/***/ "./src/utils/block-category.js":
/*!*************************************!*\
  !*** ./src/utils/block-category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/babel-runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./src/utils/icons.js\");\n\n/**\n * WordPress dependencies\n */\nvar _wp$blocks = wp.blocks,\n    getCategories = _wp$blocks.getCategories,\n    setCategories = _wp$blocks.setCategories,\n    registerBlockCollection = _wp$blocks.registerBlockCollection;\n\n/**\n * Internal dependencies\n */\n\n\n\nif (typeof registerBlockCollection === 'function') {\n\tregisterBlockCollection('ainoblocks', {\n\n\t\ttitle: 'Aino Blocks',\n\t\ticon: _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].categoryIcon\n\t});\n} else {\n\t// This can be removed once G 7.3 is shipped in the Core version.\n\tsetCategories([].concat((0,babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getCategories().filter(function (_ref) {\n\t\tvar slug = _ref.slug;\n\t\treturn slug !== 'ainoblocks';\n\t})), [\n\t// Add a Aino Blocks block category\n\t{\n\t\tslug: 'ainoblocks',\n\t\ttitle: 'Aino Blocks',\n\t\ticon: _icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].categoryIcon\n\t}]));\n}\n\n//# sourceURL=webpack://ainoblocks/./src/utils/block-category.js?");

/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Custom icons\n */\nvar icons = {};\n\nicons.categoryIcon = wp.element.createElement(\n\t\"svg\",\n\t{ className: \"components-ainoblocks-logo-icon components-ainoblocks-svg\", xmlns: \"http://www.w3.org/2000/svg\", width: \"20\", height: \"20\", viewBox: \"0 0 20 20\" },\n\twp.element.createElement(\"path\", { fill: \"#f46019\", d: \"M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.523 0-10-4.477-10-10s4.477-10 10-10z\" }),\n\twp.element.createElement(\"path\", { fill: \"#fff\", d: \"M8.507 5.727l0.018 0.026 6.475 9.247h-1.705l-2.648-3.782-2.14 3.055c-0.453 0.624-1.243 0.865-1.945 0.649-0.713-0.219-1.233-0.877-1.246-1.658l-0-6.5c0-0.794 0.525-1.466 1.246-1.687 0.702-0.216 1.492 0.025 1.945 0.649zM7.087 6.397h-0.017l-0.019 0.001-0.013 0.001-0.017 0.002-0.014 0.003-0.019 0.004-0.015 0.004-0.016 0.005-0.016 0.006-0.016 0.007-0.015 0.007-0.009 0.005-0.008 0.005-0.014 0.008-0.016 0.011c-0.088 0.063-0.147 0.165-0.152 0.28v6.507c0.005 0.109 0.058 0.205 0.138 0.269l0.014 0.011 0.016 0.011 0.014 0.008 0.008 0.005 0.009 0.005 0.015 0.007 0.016 0.007 0.016 0.006 0.016 0.005 0.015 0.004 0.019 0.004 0.014 0.003 0.017 0.002 0.013 0.001 0.019 0.001h0.017l0.019-0.001c0.094-0.007 0.185-0.050 0.251-0.125l0.013-0.015 0.011-0.015 2.413-3.446-2.424-3.461c-0.066-0.085-0.163-0.133-0.263-0.14l-0.019-0.001zM13.294 5c0.589 0 1.066 0.477 1.066 1.066s-0.477 1.066-1.066 1.066c-0.589 0-1.066-0.477-1.066-1.066s0.477-1.066 1.066-1.066z\" })\n);\n\nicons.icon = wp.element.createElement(\n\t\"svg\",\n\t{ className: \"components-ainoblocks-svg\", \"aria-hidden\": true, role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n\twp.element.createElement(\"path\", { fill: \"#000000\", d: \"M44 0v20h-44v-20h44zM34.62 7.594c-0.532 0-1.010 0.089-1.435 0.266s-0.784 0.429-1.078 0.756c-0.294 0.327-0.52 0.723-0.679 1.19s-0.238 0.989-0.238 1.568c0 0.579 0.079 1.101 0.238 1.568s0.385 0.863 0.679 1.19c0.294 0.327 0.653 0.579 1.078 0.756s0.903 0.266 1.435 0.266c0.532 0 1.010-0.089 1.435-0.266s0.784-0.429 1.078-0.756c0.294-0.327 0.52-0.723 0.679-1.19s0.238-0.989 0.238-1.568c0-0.579-0.079-1.101-0.238-1.568s-0.385-0.863-0.679-1.19c-0.294-0.327-0.653-0.579-1.078-0.756s-0.903-0.266-1.435-0.266zM26.878 7.594c-0.299 0-0.56 0.037-0.784 0.112s-0.42 0.175-0.588 0.301c-0.168 0.126-0.31 0.275-0.427 0.448l-0.11 0.175-0.096 0.18-0.082 0.184h-0.070v-1.232h-1.526v7.224h1.526v-4.9l0.008-0.15c0.017-0.145 0.058-0.277 0.125-0.396 0.089-0.159 0.208-0.289 0.357-0.392s0.317-0.18 0.504-0.231c0.187-0.051 0.378-0.077 0.574-0.077 0.888 0 1.381 0.454 1.48 1.361l0.014 0.175 0.005 0.186v4.424h1.526v-4.648l-0.006-0.234c-0.037-0.764-0.259-1.363-0.666-1.796-0.448-0.476-1.036-0.714-1.764-0.714zM10.498 5.214h-2.142l-2.856 9.772h1.596l0.742-2.604h3.108l0.742 2.604h1.666l-2.856-9.772zM19.024 7.762h-3.99v1.232h2.464v4.76h-2.464v1.232h6.3v-1.232h-2.31v-5.992zM34.62 8.798c0.56 0 1.006 0.17 1.337 0.511 0.258 0.265 0.415 0.63 0.472 1.096l0.018 0.206 0.006 0.218v1.092l-0.006 0.218c-0.033 0.565-0.196 0.998-0.491 1.301-0.331 0.341-0.777 0.511-1.337 0.511s-1.006-0.17-1.337-0.511c-0.258-0.265-0.415-0.63-0.472-1.096l-0.018-0.206-0.006-0.218v-1.092l0.006-0.218c0.033-0.565 0.196-0.998 0.491-1.301 0.331-0.341 0.777-0.511 1.337-0.511zM9.448 6.796l1.204 4.284h-2.52l1.204-4.284h0.112zM18.254 4.5c-0.383 0-0.651 0.079-0.805 0.238-0.123 0.127-0.197 0.278-0.222 0.452l-0.009 0.136v0.294c0 0.233 0.077 0.429 0.231 0.588s0.427 0.238 0.819 0.238c0.383 0 0.651-0.079 0.805-0.238 0.123-0.127 0.197-0.278 0.222-0.452l0.009-0.136v-0.294c0-0.233-0.077-0.429-0.231-0.588s-0.427-0.238-0.819-0.238z\" })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n//# sourceURL=webpack://ainoblocks/./src/utils/icons.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/array/from */ \"./node_modules/core-js/library/fn/array/from.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/is-iterable */ \"./node_modules/core-js/library/fn/is-iterable.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports[\"default\"] = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (obj, key, value) {\n  if (key in obj) {\n    (0, _defineProperty2.default)(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _assign = __webpack_require__(/*! ../core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = _assign2.default || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/babel-runtime/core-js/is-iterable.js\");\n\nvar _isIterable3 = _interopRequireDefault(_isIterable2);\n\nvar _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function () {\n  function sliceIterator(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n\n    try {\n      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n        _arr.push(_s.value);\n\n        if (i && _arr.length === i) break;\n      }\n    } catch (err) {\n      _d = true;\n      _e = err;\n    } finally {\n      try {\n        if (!_n && _i[\"return\"]) _i[\"return\"]();\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n\n    return _arr;\n  }\n\n  return function (arr, i) {\n    if (Array.isArray(arr)) {\n      return arr;\n    } else if ((0, _isIterable3.default)(Object(arr))) {\n      return sliceIterator(arr, i);\n    } else {\n      throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n    }\n  };\n}();\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return (0, _from2.default)(arr);\n  }\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack://ainoblocks/./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2018 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString === Object.prototype.toString) {\n\t\t\t\t\tfor (var key in arg) {\n\t\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es6.array.from */ \"./node_modules/core-js/library/modules/es6.array.from.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Array.from;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.is-iterable */ \"./node_modules/core-js/library/modules/core.is-iterable.js\");\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").isIterable = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/core.is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/library/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ \"./node_modules/lodash/_trimmedEndIndex.js\");\n\n/** Used to match leading whitespace. */\nvar reTrimStart = /^\\s+/;\n\n/**\n * The base implementation of `_.trim`.\n *\n * @private\n * @param {string} string The string to trim.\n * @returns {string} Returns the trimmed string.\n */\nfunction baseTrim(string) {\n  return string\n    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')\n    : string;\n}\n\nmodule.exports = baseTrim;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_baseTrim.js?");

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * Casts `value` to `identity` if it's not a function.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Function} Returns cast function.\n */\nfunction castFunction(value) {\n  return typeof value == 'function' ? value : identity;\n}\n\nmodule.exports = castFunction;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_castFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/** Used to match a single whitespace character. */\nvar reWhitespace = /\\s/;\n\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace\n * character of `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the index of the last non-whitespace character.\n */\nfunction trimmedEndIndex(string) {\n  var index = string.length;\n\n  while (index-- && reWhitespace.test(string.charAt(index))) {}\n  return index;\n}\n\nmodule.exports = trimmedEndIndex;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/_trimmedEndIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

eval("/**\n * This method returns `undefined`.\n *\n * @static\n * @memberOf _\n * @since 2.3.0\n * @category Util\n * @example\n *\n * _.times(2, _.noop);\n * // => [undefined, undefined]\n */\nfunction noop() {\n  // No operation performed.\n}\n\nmodule.exports = noop;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/noop.js?");

/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    castFunction = __webpack_require__(/*! ./_castFunction */ \"./node_modules/lodash/_castFunction.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\");\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used as references for the maximum length and index of an array. */\nvar MAX_ARRAY_LENGTH = 4294967295;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMin = Math.min;\n\n/**\n * Invokes the iteratee `n` times, returning an array of the results of\n * each invocation. The iteratee is invoked with one argument; (index).\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n * @example\n *\n * _.times(3, String);\n * // => ['0', '1', '2']\n *\n *  _.times(4, _.constant(0));\n * // => [0, 0, 0, 0]\n */\nfunction times(n, iteratee) {\n  n = toInteger(n);\n  if (n < 1 || n > MAX_SAFE_INTEGER) {\n    return [];\n  }\n  var index = MAX_ARRAY_LENGTH,\n      length = nativeMin(n, MAX_ARRAY_LENGTH);\n\n  iteratee = castFunction(iteratee);\n  n -= MAX_ARRAY_LENGTH;\n\n  var result = baseTimes(length, iteratee);\n  while (++index < n) {\n    iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = times;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/times.js?");

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/toFinite.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toFinite = __webpack_require__(/*! ./toFinite */ \"./node_modules/lodash/toFinite.js\");\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\nmodule.exports = toInteger;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTrim = __webpack_require__(/*! ./_baseTrim */ \"./node_modules/lodash/_baseTrim.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = baseTrim(value);\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/**\n * Memize options object.\n *\n * @typedef MemizeOptions\n *\n * @property {number} [maxSize] Maximum size of the cache.\n */\n\n/**\n * Internal cache entry.\n *\n * @typedef MemizeCacheNode\n *\n * @property {?MemizeCacheNode|undefined} [prev] Previous node.\n * @property {?MemizeCacheNode|undefined} [next] Next node.\n * @property {Array<*>}                   args   Function arguments for cache\n *                                               entry.\n * @property {*}                          val    Function result.\n */\n\n/**\n * Properties of the enhanced function for controlling cache.\n *\n * @typedef MemizeMemoizedFunction\n *\n * @property {()=>void} clear Clear the cache.\n */\n\n/**\n * Accepts a function to be memoized, and returns a new memoized function, with\n * optional options.\n *\n * @template {Function} F\n *\n * @param {F}             fn        Function to memoize.\n * @param {MemizeOptions} [options] Options object.\n *\n * @return {F & MemizeMemoizedFunction} Memoized function.\n */\nfunction memize( fn, options ) {\n\tvar size = 0;\n\n\t/** @type {?MemizeCacheNode|undefined} */\n\tvar head;\n\n\t/** @type {?MemizeCacheNode|undefined} */\n\tvar tail;\n\n\toptions = options || {};\n\n\tfunction memoized( /* ...args */ ) {\n\t\tvar node = head,\n\t\t\tlen = arguments.length,\n\t\t\targs, i;\n\n\t\tsearchCache: while ( node ) {\n\t\t\t// Perform a shallow equality test to confirm that whether the node\n\t\t\t// under test is a candidate for the arguments passed. Two arrays\n\t\t\t// are shallowly equal if their length matches and each entry is\n\t\t\t// strictly equal between the two sets. Avoid abstracting to a\n\t\t\t// function which could incur an arguments leaking deoptimization.\n\n\t\t\t// Check whether node arguments match arguments length\n\t\t\tif ( node.args.length !== arguments.length ) {\n\t\t\t\tnode = node.next;\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// Check whether node arguments match arguments values\n\t\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\t\tif ( node.args[ i ] !== arguments[ i ] ) {\n\t\t\t\t\tnode = node.next;\n\t\t\t\t\tcontinue searchCache;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// At this point we can assume we've found a match\n\n\t\t\t// Surface matched node to head if not already\n\t\t\tif ( node !== head ) {\n\t\t\t\t// As tail, shift to previous. Must only shift if not also\n\t\t\t\t// head, since if both head and tail, there is no previous.\n\t\t\t\tif ( node === tail ) {\n\t\t\t\t\ttail = node.prev;\n\t\t\t\t}\n\n\t\t\t\t// Adjust siblings to point to each other. If node was tail,\n\t\t\t\t// this also handles new tail's empty `next` assignment.\n\t\t\t\t/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;\n\t\t\t\tif ( node.next ) {\n\t\t\t\t\tnode.next.prev = node.prev;\n\t\t\t\t}\n\n\t\t\t\tnode.next = head;\n\t\t\t\tnode.prev = null;\n\t\t\t\t/** @type {MemizeCacheNode} */ ( head ).prev = node;\n\t\t\t\thead = node;\n\t\t\t}\n\n\t\t\t// Return immediately\n\t\t\treturn node.val;\n\t\t}\n\n\t\t// No cached value found. Continue to insertion phase:\n\n\t\t// Create a copy of arguments (avoid leaking deoptimization)\n\t\targs = new Array( len );\n\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\targs[ i ] = arguments[ i ];\n\t\t}\n\n\t\tnode = {\n\t\t\targs: args,\n\n\t\t\t// Generate the result from original function\n\t\t\tval: fn.apply( null, args ),\n\t\t};\n\n\t\t// Don't need to check whether node is already head, since it would\n\t\t// have been returned above already if it was\n\n\t\t// Shift existing head down list\n\t\tif ( head ) {\n\t\t\thead.prev = node;\n\t\t\tnode.next = head;\n\t\t} else {\n\t\t\t// If no head, follows that there's no tail (at initial or reset)\n\t\t\ttail = node;\n\t\t}\n\n\t\t// Trim tail if we're reached max size and are pending cache insertion\n\t\tif ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {\n\t\t\ttail = /** @type {MemizeCacheNode} */ ( tail ).prev;\n\t\t\t/** @type {MemizeCacheNode} */ ( tail ).next = null;\n\t\t} else {\n\t\t\tsize++;\n\t\t}\n\n\t\thead = node;\n\n\t\treturn node.val;\n\t}\n\n\tmemoized.clear = function() {\n\t\thead = null;\n\t\ttail = null;\n\t\tsize = 0;\n\t};\n\n\tif ( false ) {}\n\n\t// Ignore reason: There's not a clear solution to create an intersection of\n\t// the function with additional properties, where the goal is to retain the\n\t// function signature of the incoming argument and add control properties\n\t// on the return value.\n\n\t// @ts-ignore\n\treturn memoized;\n}\n\nmodule.exports = memize;\n\n\n//# sourceURL=webpack://ainoblocks/./node_modules/memize/index.js?");

/***/ }),

/***/ "./src/blocks/arrow-button/styles/editor.scss":
/*!****************************************************!*\
  !*** ./src/blocks/arrow-button/styles/editor.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/arrow-button/styles/style.scss":
/*!***************************************************!*\
  !*** ./src/blocks/arrow-button/styles/style.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/author/styles/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/author/styles/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/badge/styles/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/badge/styles/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/badge/styles/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/badge/styles/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/button/styles/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/button/styles/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/button/styles/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/button/styles/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/card/styles/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/card/styles/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/card/styles/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/card/styles/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/divider/styles/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/divider/styles/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/divider/styles/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/divider/styles/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/flex-item/styles/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/flex-item/styles/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/flex-item/styles/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/flex-item/styles/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/flexbox/styles/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/flexbox/styles/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/flexbox/styles/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/flexbox/styles/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/grid-container/styles/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/grid-container/styles/editor.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/grid-container/styles/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/grid-container/styles/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/grid-item/styles/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/grid-item/styles/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/grid-item/styles/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/grid-item/styles/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/hero/styles/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/hero/styles/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/hero/styles/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/hero/styles/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/icon/styles/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/icon/styles/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/styles/editor.scss":
/*!********************************************************!*\
  !*** ./src/blocks/multiple-buttons/styles/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/styles/style.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/multiple-buttons/styles/style.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/profile-image/styles/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/profile-image/styles/editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/profile-image/styles/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/profile-image/styles/style.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/sticker/styles/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/sticker/styles/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/sticker/styles/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/sticker/styles/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/styles/style.scss?");

/***/ }),

/***/ "./src/blocks/testimonial/styles/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/testimonial/styles/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/styles/editor.scss?");

/***/ }),

/***/ "./src/blocks/testimonial/styles/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial/styles/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/styles/style.scss?");

/***/ }),

/***/ "./src/extensions/border-radius/styles/editor.scss":
/*!*********************************************************!*\
  !*** ./src/extensions/border-radius/styles/editor.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/border-radius/styles/editor.scss?");

/***/ }),

/***/ "./src/extensions/border-radius/styles/style.scss":
/*!********************************************************!*\
  !*** ./src/extensions/border-radius/styles/style.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/border-radius/styles/style.scss?");

/***/ }),

/***/ "./src/extensions/spacing/styles/editor.scss":
/*!***************************************************!*\
  !*** ./src/extensions/spacing/styles/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/spacing/styles/editor.scss?");

/***/ }),

/***/ "./src/extensions/spacing/styles/style.scss":
/*!**************************************************!*\
  !*** ./src/extensions/spacing/styles/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ainoblocks/./src/extensions/spacing/styles/style.scss?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = lodash;

/***/ }),

/***/ "./src/blocks/arrow-button/block.json":
/*!********************************************!*\
  !*** ./src/blocks/arrow-button/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/arrow-button\",\"title\":\"Icon Button\",\"category\":\"design\",\"attributes\":{\"url\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"href\"},\"link\":{\"type\":\"string\"},\"title\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"title\"},\"text\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"a\"},\"linkTarget\":{\"type\":\"string\",\"default\":\"_self\"},\"rel\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"rel\"},\"placeholder\":{\"type\":\"string\"},\"size\":{\"type\":\"string\",\"default\":\"size__m\"},\"uppercase\":{\"type\":\"boolean\",\"default\":false},\"iconPositionAfter\":{\"type\":\"boolean\",\"default\":false},\"iconRotation\":{\"type\":\"number\",\"default\":0},\"textColor\":{\"type\":\"string\"},\"iconColor\":{\"type\":\"string\"},\"underlineColor\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"lineHeight\":{\"type\":\"number\",\"default\":1.5}},\"supports\":{\"align\":[\"wide\",\"full\"]}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/arrow-button/block.json?");

/***/ }),

/***/ "./src/blocks/author/block.json":
/*!**************************************!*\
  !*** ./src/blocks/author/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/author\",\"title\":\"Author\",\"category\":\"design\",\"description\":\"Show a name, a short description text and avatar profile image.\",\"keywords\":[\"ainoblocks\",\"author\",\"profile\",\"avatar\",\"name\"],\"attributes\":{\"name\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"},\"infoTextColor\":{\"type\":\"string\"},\"nameTextColor\":{\"type\":\"string\"},\"alignment\":{\"type\":\"string\"},\"layout\":{\"type\":\"string\"}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/author/block.json?");

/***/ }),

/***/ "./src/blocks/badge/block.json":
/*!*************************************!*\
  !*** ./src/blocks/badge/block.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/badge\",\"title\":\"Badge\",\"attributes\":{\"content\":{\"type\":\"string\"},\"size\":{\"type\":\"string\",\"default\":\"size__m\"},\"placeholder\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"borderColor\":{\"type\":\"string\"},\"alignment\":{\"type\":\"string\"},\"borderRadius\":{\"type\":\"number\"}},\"supports\":{\"color\":{\"gradients\":true,\"text\":true,\"__experimentalDefaultControls\":{\"background\":true,\"text\":true}},\"__experimentalBorder\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true,\"__experimentalDefaultControls\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true}}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/badge/block.json?");

/***/ }),

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/button\",\"title\":\"Button\",\"attributes\":{\"url\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"href\"},\"title\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"title\"},\"text\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"a\"},\"linkTarget\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"target\"},\"rel\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"rel\"},\"placeholder\":{\"type\":\"string\"},\"size\":{\"type\":\"string\",\"default\":\"size__m\"},\"borderRadius\":{\"type\":\"number\",\"default\":0},\"borderWidth\":{\"type\":\"number\"},\"uppercase\":{\"type\":\"boolean\",\"default\":false},\"gradient\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"}},\"supports\":{\"color\":{\"gradients\":true,\"__experimentalDefaultControls\":{\"background\":true,\"text\":true}},\"__experimentalBorder\":{\"color\":true,\"style\":true,\"radius\":false,\"width\":false},\"spacing\":{\"margin\":true,\"__experimentalDefaultControls\":{\"margin\":true}}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/button/block.json?");

/***/ }),

/***/ "./src/blocks/card/block.json":
/*!************************************!*\
  !*** ./src/blocks/card/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/card\",\"title\":\"Card\",\"attributes\":{\"align\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"borderColor\":{\"type\":\"string\"},\"borderRadius\":{\"type\":\"number\",\"default\":0},\"shadowName\":{\"type\":\"string\",\"default\":\"shadow-none\"},\"paddingTop\":{\"type\":\"number\",\"default\":7},\"paddingBottom\":{\"type\":\"number\",\"default\":7},\"paddingLeft\":{\"type\":\"number\",\"default\":7},\"paddingRight\":{\"type\":\"number\",\"default\":7},\"borderTopWidth\":{\"type\":\"number\",\"default\":0},\"borderRightWidth\":{\"type\":\"number\",\"default\":0},\"borderBottomWidth\":{\"type\":\"number\",\"default\":0},\"borderLeftWidth\":{\"type\":\"number\",\"default\":0}},\"supports\":{\"spacing\":{\"margin\":false,\"padding\":false},\"color\":{\"gradients\":true,\"text\":false},\"__experimentalBorder\":{\"color\":true,\"radius\":false,\"style\":true,\"width\":false},\"align\":[\"wide\",\"full\"]}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/card/block.json?");

/***/ }),

/***/ "./src/blocks/divider/block.json":
/*!***************************************!*\
  !*** ./src/blocks/divider/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/divider\",\"title\":\"Divider\",\"attributes\":{\"backgroundColor\":{\"type\":\"string\"},\"borderColor\":{\"type\":\"string\"},\"iconColor\":{\"type\":\"string\"},\"borderWidth\":{\"type\":\"number\"}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/divider/block.json?");

/***/ }),

/***/ "./src/blocks/flex-item/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/flex-item/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/flex-item\",\"title\":\"Flex Item\",\"description\":\"Child block inside Flexbox container block.\",\"keywords\":[\"flexbox\",\"flex\",\"flex item\",\"child\",\"box\",\"ainoblocks\"],\"textdomain\":\"ainoblocks\",\"parent\":[\"ainoblocks/flexbox\"],\"supports\":{\"anchor\":true,\"color\":{\"text\":false,\"background\":true},\"__experimentalBorder\":{\"radius\":true}},\"attributes\":{\"flexOrder\":{\"type\":\"number\"},\"flexBasis\":{\"type\":\"number\"},\"flexGrow\":{\"type\":\"number\"},\"flexShrink\":{\"type\":\"boolean\",\"default\":false},\"alignSelfDesktop\":{\"type\":\"string\",\"default\":\"auto\"},\"alignSelfTablet\":{\"type\":\"string\",\"default\":\"auto\"},\"alignSelfMobile\":{\"type\":\"string\",\"default\":\"auto\"}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flex-item/block.json?");

/***/ }),

/***/ "./src/blocks/flexbox/block.json":
/*!***************************************!*\
  !*** ./src/blocks/flexbox/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/flexbox\",\"title\":\"Flexbox\",\"description\":\"Flexbox container. Use the Flex Item block as child blocks.\",\"keywords\":[\"flexbox\",\"flex\",\"container\",\"wrapper\",\"box\",\"ainoblocks\"],\"textdomain\":\"ainoblocks\",\"supports\":{\"anchor\":true,\"align\":[\"wide\",\"full\"],\"color\":{\"text\":false,\"gradients\":true}},\"attributes\":{\"align\":{\"type\":\"string\"},\"flexDirectionDesktop\":{\"type\":\"string\",\"default\":\"direction__row__d\"},\"flexDirectionTablet\":{\"type\":\"string\",\"default\":\"direction__row__t\"},\"flexDirectionMobile\":{\"type\":\"string\",\"default\":\"direction__row__m\"},\"flexWrapDesktop\":{\"type\":\"string\",\"default\":\"nowrap__d\"},\"flexWrapTablet\":{\"type\":\"string\",\"default\":\"nowrap_t\"},\"flexWrapMobile\":{\"type\":\"string\",\"default\":\"nowrap_m\"},\"justifyContentDesktop\":{\"type\":\"string\",\"default\":\"justify__flexstart__d\"},\"justifyContentTablet\":{\"type\":\"string\",\"default\":\"justify__flexstart__t\"},\"justifyContentMobile\":{\"type\":\"string\",\"default\":\"justify__flexstart__m\"},\"alignItemsDesktop\":{\"type\":\"string\",\"default\":\"align-items__stretch__d\"},\"alignItemsTablet\":{\"type\":\"string\",\"default\":\"align-items__stretch__t\"},\"alignItemsMobile\":{\"type\":\"string\",\"default\":\"align-itms__stretch__m\"},\"alignContentDesktop\":{\"type\":\"string\",\"default\":\"align-cont__stretch__d\"},\"alignContentTablet\":{\"type\":\"string\",\"default\":\"align-cont__stretch__t\"},\"alignContentMobile\":{\"type\":\"string\",\"default\":\"align-cont__stretch__m\"},\"shadowName\":{\"type\":\"string\",\"default\":\"shadow-none\"},\"position\":{\"type\":\"string\"}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/flexbox/block.json?");

/***/ }),

/***/ "./src/blocks/grid-container/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/grid-container/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"ainoblocks/grid-container\",\"apiVersion\":2,\"title\":\"Grid\",\"description\":\"A responsive grid container. Arrange multiple grid items on the grid to build flexible layouts.\",\"keywords\":[\"grid\",\"container\",\"columns\",\"layout\",\"aino\",\"ainoblocks\"],\"textdomain\":\"ainoblocks\",\"attributes\":{\"align\":{\"type\":\"string\",\"default\":\"wide\"},\"backgroundColor\":{\"type\":\"string\"},\"items\":{\"type\":\"number\",\"default\":\"1\"},\"columnGap\":{\"type\":\"string\"}},\"supports\":{\"align\":[\"wide\",\"full\"],\"anchor\":true,\"html\":true,\"color\":{\"gradients\":true,\"text\":false}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-container/block.json?");

/***/ }),

/***/ "./src/blocks/grid-item/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/grid-item/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"ainoblocks/grid-item\",\"apiVersion\":2,\"title\":\"Grid Item\",\"description\":\"A grid item in a grid container block.\",\"keywords\":[\"grid\",\"container\",\"columns\",\"layout\",\"aino\",\"ainoblocks\"],\"textdomain\":\"ainoblocks\",\"attributes\":{\"gridColumnStartDesktop\":{\"type\":\"number\",\"default\":\"1\"},\"gridColumnEndDesktop\":{\"type\":\"number\",\"default\":\"7\"},\"gridColumnStartTablet\":{\"type\":\"number\",\"default\":\"1\"},\"gridColumnEndTablet\":{\"type\":\"number\",\"default\":\"7\"},\"gridColumnStartMobile\":{\"type\":\"number\",\"default\":\"1\"},\"gridColumnEndMobile\":{\"type\":\"number\",\"default\":\"7\"},\"alignItem\":{\"type\":\"string\",\"default\":\"start\"},\"justifyItem\":{\"type\":\"string\",\"default\":\"start\"},\"stackOrder\":{\"type\":\"number\"},\"stacking\":{\"type\":\"boolean\",\"default\":false},\"gutter\":{\"type\":\"boolean\",\"default\":true},\"overlapLeft\":{\"type\":\"boolean\",\"default\":false},\"overlapRight\":{\"type\":\"boolean\",\"default\":false},\"marginTopDesktop\":{\"type\":\"number\"},\"marginRightDesktop\":{\"type\":\"number\"},\"marginBottomDesktop\":{\"type\":\"number\"},\"marginLeftDesktop\":{\"type\":\"number\"},\"marginTopTablet\":{\"type\":\"number\"},\"marginRightTablet\":{\"type\":\"number\"},\"marginBottomTablet\":{\"type\":\"number\"},\"marginLeftTablet\":{\"type\":\"number\"},\"marginTopMobile\":{\"type\":\"number\"},\"marginRightMobile\":{\"type\":\"number\"},\"marginBottomMobile\":{\"type\":\"number\"},\"marginLeftMobile\":{\"type\":\"number\"}},\"supports\":{\"color\":{\"gradients\":true,\"text\":false,\"__experimentalDefaultControls\":{\"background\":true}},\"__experimentalBorder\":{\"color\":true,\"width\":true,\"style\":false,\"radius\":false}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/grid-item/block.json?");

/***/ }),

/***/ "./src/blocks/hero/block.json":
/*!************************************!*\
  !*** ./src/blocks/hero/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/hero\",\"title\":\"Hero\",\"attributes\":{\"align\":{\"type\":\"string\",\"default\":\"full\"},\"backgroundColor\":{\"type\":\"string\"},\"customBackgroundColor\":{\"type\":\"string\"},\"mediaAlt\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"figure img\",\"attribute\":\"alt\",\"default\":\"\"},\"mediaPosition\":{\"type\":\"string\"},\"mediaHeight\":{\"type\":\"boolean\",\"default\":false},\"mediaId\":{\"type\":\"number\"},\"mediaUrl\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"figure video,figure img\",\"attribute\":\"src\"},\"mediaType\":{\"type\":\"string\"},\"mediaWidth\":{\"type\":\"number\",\"default\":\"50\"},\"verticalContentAlignment\":{\"type\":\"string\"},\"imageFill\":{\"type\":\"boolean\"},\"contentGridColumnStart\":{\"type\":\"number\"},\"contentGridColumnEnd\":{\"type\":\"number\"},\"mediaGridColumnStart\":{\"type\":\"number\"},\"mediaGridColumnEnd\":{\"type\":\"number\"}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/hero/block.json?");

/***/ }),

/***/ "./src/blocks/icon/block.json":
/*!************************************!*\
  !*** ./src/blocks/icon/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/icon\",\"title\":\"Icon\",\"category\":\"design\",\"description\":\"An icon block.\",\"keywords\":[\"ainoblocks\",\"icon\",\"svg\",\"image\"],\"attributes\":{\"iconType\":{\"type\":\"string\"},\"iconSize\":{\"type\":\"string\"},\"alignment\":{\"type\":\"string\"}},\"supports\":{\"color\":{\"gradients\":true,\"__experimentalDefaultControls\":{\"background\":true,\"text\":true}},\"spacing\":{\"padding\":true,\"__experimentalDefaultControls\":{\"padding\":true}},\"__experimentalBorder\":{\"radius\":true,\"__experimentalDefaultControls\":{\"radius\":true}}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/icon/block.json?");

/***/ }),

/***/ "./src/blocks/multiple-buttons/block.json":
/*!************************************************!*\
  !*** ./src/blocks/multiple-buttons/block.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/multiple-buttons\",\"title\":\"Buttons\",\"attributes\":{\"align\":{\"type\":\"string\"},\"items\":{\"type\":\"number\",\"default\":\"1\"},\"flexDirection\":{\"type\":\"string\"},\"fullWidth\":{\"type\":\"boolean\",\"default\":false}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/multiple-buttons/block.json?");

/***/ }),

/***/ "./src/blocks/profile-image/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/profile-image/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/profile-image\",\"title\":\"Profile Image\",\"category\":\"design\",\"parent\":[\"ainoblocks/author\"],\"description\":\"Show a name, a short description text and avatar profile image.\",\"keywords\":[\"ainoblocks\",\"author\",\"profile\",\"avatar\",\"image\"],\"attributes\":{\"imgURL\":{\"type\":\"string\",\"source\":\"attribute\",\"attribute\":\"src\",\"selector\":\"img\"},\"imgID\":{\"type\":\"number\"},\"imgAlt\":{\"type\":\"string\",\"source\":\"attribute\",\"attribute\":\"alt\",\"selector\":\"img\"},\"imgSize\":{\"type\":\"string\"},\"imgRadius\":{\"type\":\"number\",\"default\":0},\"borderWidth\":{\"type\":\"number\",\"default\":0},\"borderColor\":{\"type\":\"string\"}},\"supports\":{\"color\":{\"gradients\":true,\"text\":false}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/profile-image/block.json?");

/***/ }),

/***/ "./src/blocks/sticker/block.json":
/*!***************************************!*\
  !*** ./src/blocks/sticker/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/sticker\",\"title\":\"Sticker\",\"attributes\":{\"url\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"href\"},\"title\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"title\"},\"text\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"a\"},\"linkTarget\":{\"type\":\"string\",\"default\":\"_self\"},\"rel\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"rel\"},\"placeholder\":{\"type\":\"string\"},\"stickerSize\":{\"type\":\"number\",\"default\":7},\"fontSize\":{\"type\":\"string\",\"default\":\"font__m\"},\"borderRadius\":{\"type\":\"number\",\"default\":100},\"borderWidth\":{\"type\":\"number\"},\"uppercase\":{\"type\":\"boolean\",\"default\":false},\"backgroundColor\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"borderColor\":{\"type\":\"string\"},\"gradient\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"opensInNewTab\":{\"type\":\"boolean\"},\"rotate\":{\"type\":\"string\"},\"rotateStart\":{\"type\":\"number\",\"default\":0}}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/sticker/block.json?");

/***/ }),

/***/ "./src/blocks/testimonial/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/testimonial/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"apiVersion\":2,\"name\":\"ainoblocks/testimonial\",\"title\":\"Testimonial\",\"category\":\"design\",\"description\":\"Insert a testimonial or review with the option to add author information.\",\"keywords\":[\"ainoblocks\",\"testimonial\",\"quote\",\"feedback\"],\"attributes\":{\"style\":{\"type\":\"string\"}},\"supports\":{\"align\":[\"wide\",\"full\"]}}');\n\n//# sourceURL=webpack://ainoblocks/./src/blocks/testimonial/block.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/blocks.js");
/******/ 	
/******/ })()
;