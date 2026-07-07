import { lazy } from "react";

export const hookItems = [
	{
		slug: "use-previous",
		title: "usePrevious",
		description:
			"Custom hook to store the previous value of a state variable.",
		Component: lazy(() => import("./UsePreviousHook")),
	},
	{
		slug: "use-first-render",
		title: "useFirstRender",
		description:
			"Custom hook to determine if the current render is the first render of the component.",
		Component: lazy(() => import("./UseFirstRenderHook")),
	},
	{
		slug: "use-debounce",
		title: "useDebounce",
		description:
			"Custom hook to debounce a function call and delay its execution.",
		Component: lazy(() => import("./UseDebounceHook")),
	},
	{
		slug: "use-throttle",
		title: "useThrottle",
		description:
			"Custom hook to throttle a function call to limit its execution rate.",
		Component: lazy(() => import("./UseThrottleHook")),
	},
	{
		slug: "use-is-idle",
		title: "useIsIdle",
		description:
			"Custom hook to detect if the user is idle (no mouse or keyboard activity) for a specified timeout period.",
		Component: lazy(() => import("./UseIsIdleHook")),
	},
	{
		slug: "use-async",
		title: "useAsync",
		description:
			"Custom hook to handle asynchronous operations with loading and error states.",
		Component: lazy(() => import("./UseAsyncHook")),
	},
	{
		slug: "use-responsive",
		title: "useResponsive",
		description:
			"Custom hook to handle responsive design logic based on screen size.",
		Component: lazy(() => import("./UseResponsiveHook")),
	},
	{
		slug: "use-click-outside",
		title: "useClickOutside",
		description: "Custom hook to detect clicks outside of a specified element.",
		Component: lazy(() => import("./UseClickOutsideHook")),
	},
	{
		slug: "use-window-size",
		title: "useWindowSize",
		description: "Custom hook to get window size.",
		Component: lazy(() => import("./UseWindowSizeHook")),
	},
	{
		slug: "use-key-press",
		title: "useKeyPress",
		description: "Custom hook to detect key press.",
		Component: lazy(() => import("./UseKeyPressHook")),
	},
	{
		slug: "use-undo-redo",
		title: "useUndoRedo",
		description:
			"Custom hook to keep track of the previous values of a state variable and allows you to undo or redo the state.",
		Component: lazy(() => import("./UseUndoRedoHook")),
	},
	{
		slug: "use-infinite-scroll",
		title: "useInfiniteScroll",
		description:
			"Custom hook to implement an infinite scroll using event handlers.",
		Component: lazy(() => import("./UseInfiniteScrollHook")),
	},
	{
		slug: "use-lazy-image",
		title: "useLazyImage",
		description: "Custom hook to implement lazy loading for images.",
		Component: lazy(() => import("./UseLazyImageHook")),
	},
];
