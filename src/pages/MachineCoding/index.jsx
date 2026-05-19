import { lazy } from "react";
import { useParams } from "react-router-dom";

const MultiStepForm = lazy(() => import("./MultiStepForm"));
const OverlappingCircles = lazy(() => import("./OverlappingCircles"));
const InfiniteScroll = lazy(() => import("./InfiniteScroll"));
const MouseHoldCounterApp = lazy(() => import("./MouseHoldCounterApp"));
const Pagination = lazy(() => import("./Pagination"));
const NestedComments = lazy(() => import("./NestedComments"));
const TicTacToe = lazy(() => import("./Tic-Tac-Toe"));
const AutoComplete = lazy(() => import("./AutoComplete"));
const MemoryGame = lazy(() => import("./MemoryGame"));
const Stopwatch = lazy(() => import("./Stopwatch"));
const TrafficLight = lazy(() => import("./TrafficLight"));

const machineCodingComponents = {
	"multi-step-form": MultiStepForm,
	"overlapping-circles": OverlappingCircles,
	"nested-comments": NestedComments,
	"infinite-scroll": InfiniteScroll,
	"mouse-hold-counter-app": MouseHoldCounterApp,
	pagination: Pagination,
	"tic-tac-toe": TicTacToe,
	"auto-complete": AutoComplete,
	"memory-game": MemoryGame,
	"stop-watch": Stopwatch,
	"traffic-light": TrafficLight,
};

const MachineCoding = () => {
	const { title } = useParams();
	const Component = machineCodingComponents[title];
	return Component && <Component />;
};

export default MachineCoding;
