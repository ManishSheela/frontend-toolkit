import { lazy } from "react";
import { useParams } from "react-router-dom";
const MultiStepForm = lazy(() =>
	import("../screens/MachineCoding/MultiStepForm")
);
const OverlappingCircles = lazy(() =>
	import("../screens/MachineCoding/OverlappingCircles")
);
const InfiniteScroll = lazy(() =>
	import("../screens/MachineCoding/InfiniteScroll")
);
const MouseHoldCounterApp = lazy(() =>
	import("../screens/MachineCoding/MouseHoldCounterApp")
);
const Pagination = lazy(() => import("../screens/MachineCoding/Pagination"));
const NestedComments = lazy(() =>
	import("../screens/MachineCoding/NestedComments")
);

const machineCodingComponents = {
	"multi-step-form": MultiStepForm,
	"overlapping-circles": OverlappingCircles,
	"nested-comments": NestedComments,
	"infinite-scroll": InfiniteScroll,
	"mouse-hold-counter-app": MouseHoldCounterApp,
	pagination: Pagination,
};

const MachineCodingComponent = () => {
	const { title } = useParams();
	const Component = machineCodingComponents[title];
	return Component ? <Component /> : <div>Not Found</div>;
};

export default MachineCodingComponent;
