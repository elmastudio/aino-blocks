const attributes = {
	url: {
		"type": "string",
		"source": "attribute",
		"selector": "a",
		"attribute": "href"
	},
	title: {
		"type": "string",
		"source": "attribute",
		"selector": "a",
		attribute": "title"
	},
	text: {
		type: "string",
		source: "html",
		selector": "a"
	},
	linkTarget: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "target"
	},
	rel: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "rel"
	},
	placeholder: {
		type: "string"
	}
	size: {
		type: 'string',
		default: 'size-m'
	},
	borderRadius: {
		type: 'string',
		default: 'rounded'
	},
	uppercase: {
		type: 'boolean',
		default: false,
	},
	fullwidth: {
		type: 'boolean',
		default: false,
	},
	backgroundColor: {
		type: "string"
	},
	textColor: {
		type: "string"
	},
	borderColor: {
		type: "string"
	},
	backgroundHoverColor: {
		type: "string"
	},
	textHoverColor: {
		type: "string"
	},
};
export default attributes;
