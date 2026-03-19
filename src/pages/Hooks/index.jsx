import { lazy } from "react";
import { useParams } from "react-router-dom";

const HooksComponents = {
	"use-previous": lazy(() => import("./UsePreviousHook")),
	"use-first-render": lazy(() => import("./UseFirstRenderHook")),
	"use-is-idle": lazy(() => import("./UseIsIdleHook")),
	'use-async': lazy(() => import("./UseAsyncHook")),
};

const Hooks = () => {
	const { title } = useParams();
	const Component = HooksComponents[title];
	return Component && <Component />;
};

export default Hooks;
