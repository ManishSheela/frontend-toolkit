/* eslint-disable react/no-unescaped-entities */
import { lazy } from "react";
import { useParams } from "react-router-dom";
const CustomMap = lazy(() => import("./CustomMap"));
const CustomFilter = lazy(() => import("./CustomFilter"));
const CustomReduce = lazy(() => import("./CustomReduce"));
const FlattenArray = lazy(() => import("./FlattenArray"));
const FlattenObject = lazy(() => import("./FlattenObject"));
const EventEmitter = lazy(() => import("./EventEmitter"));
const DeepClone = lazy(() => import("./DeepClone"));
const IsEqual = lazy(() => import("./isEqual"));
const SetTimeoutPolyfill = lazy(() => import("./SetTimeout"));

const polyfillComponents = {
	"custom-map": CustomMap,
	"custom-filter": CustomFilter,
	"custom-reduce": CustomReduce,
	"flatten-array": FlattenArray,
	"flatten-object": FlattenObject,
	"deep-clone": DeepClone,
	"is-equal": IsEqual,
	"event-emitter": EventEmitter,
	"set-timeout": SetTimeoutPolyfill,
};

const Polyfills = () => {
	const { title } = useParams();
	const Component = polyfillComponents[title];
	return Component && <Component />;
};

export default Polyfills;
