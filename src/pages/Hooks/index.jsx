import { lazy } from "react";
import { useParams } from "react-router-dom";

const HooksComponents = {
	"use-previous": lazy(() => import("./UsePreviousHook")),
	"use-first-render": lazy(() => import("./UseFirstRenderHook")),
	"use-is-idle": lazy(() => import("./UseIsIdleHook")),
	"use-async": lazy(() => import("./UseAsyncHook")),
	"use-debounce": lazy(() => import("./UseDebounceHook")),
	"use-responsive": lazy(() => import("./UseResponsiveHook")),
	"use-click-outside": lazy(() => import("./UseClickOutsideHook")),
	"use-window-size": lazy(() => import("./UseWindowSizeHook")),
	"use-key-press": lazy(() => import("./UseKeyPressHook")),
	"use-throttle": lazy(() => import("./UseThrottleHook")),
	"use-undo-redo": lazy(() => import("./UseUndoRedoHook")),
	"use-infinite-scroll": lazy(() => import("./UseInfiniteScrollHook")),
};

const Hooks = () => {
	const { title } = useParams();
	const Component = HooksComponents[title];
	return Component && <Component />;
};

export default Hooks;
