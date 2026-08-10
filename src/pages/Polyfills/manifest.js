import { lazy } from "react";

export const polyfillItems = [
	{
		slug: "custom-map",
		title: "Custom Map",
		description: "Recreate Array.prototype.map from scratch.",
		Component: lazy(() => import("./CustomMap")),
	},
	{
		slug: "custom-filter",
		title: "Custom Filter",
		description: "Recreate Array.prototype.filter from scratch.",
		Component: lazy(() => import("./CustomFilter")),
	},
	{
		slug: "custom-reduce",
		title: "Custom Reduce",
		description: "Recreate Array.prototype.reduce from scratch.",
		Component: lazy(() => import("./CustomReduce")),
	},
	{
		slug: "custom-call",
		title: "Custom Call",
		description: "Recreate Function.prototype.call from scratch.",
		Component: lazy(() => import("./CustomCall")),
	},
	{
		slug: "custom-apply",
		title: "Custom Apply",
		description: "Recreate Function.prototype.apply from scratch.",
		Component: lazy(() => import("./CustomApply")),
	},
	{
		slug: "custom-bind",
		title: "Custom Bind",
		description: "Recreate Function.prototype.bind from scratch.",
		Component: lazy(() => import("./CustomBind")),
	},
	{
		slug: "flatten-array",
		title: "Flatten Array",
		description: "Flatten deeply nested arrays into a single-level array.",
		Component: lazy(() => import("./FlattenArray")),
	},
	{
		slug: "flatten-object",
		title: "Flatten Object",
		description: "Turn a nested object into a flat object with dotted keys.",
		Component: lazy(() => import("./FlattenObject")),
	},
	{
		slug: "deep-clone",
		title: "Deep Clone",
		description: "Deeply clone complex objects, arrays and dates safely.",
		Component: lazy(() => import("./DeepClone")),
	},
	{
		slug: "is-equal",
		title: "isEqual",
		description: "Check deep equality between complex objects and arrays.",
		Component: lazy(() => import("./isEqual")),
	},
	{
		slug: "event-emitter",
		title: "Event Emitter",
		description:
			"Implement a small event emitter with subscribe and unsubscribe.",
		Component: lazy(() => import("./EventEmitter")),
	},
	{
		slug: "set-timeout",
		title: "setTimout",
		description:
			"Polyfill setTimeout/clearTimeout using requestAnimationFrame.",
		Component: lazy(() => import("./SetTimeout")),
	},
	{
		slug: "promise",
		title: "Promise",
		description:
			"we implment our custom Promise using setTimeout and a simple executor.",
		Component: lazy(() => import("./Promise")),
	},
];
