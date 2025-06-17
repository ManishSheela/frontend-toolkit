/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import CustomMap from "../screens/Polyfills/CustomMap";
import CustomFilter from "../screens/Polyfills/CustomFilter";
import CustomReduce from "../screens/Polyfills/CustomReduce";
import NotFound from "./NotFound";
import FlattenArray from "../screens/Polyfills/FlattenArray";
import FlattenObject from "../screens/Polyfills/FlattenObject";
import EventEmitter from "../screens/Polyfills/EventEmitter";
import DeepClone from "../screens/Polyfills/DeepClone";
import isEqual from "../screens/Polyfills/isEqual";
import SetTimeout from "../screens/Polyfills/SetTimeout";

const polyfillComponents = {
	"custom-map": CustomMap,
	"custom-filter": CustomFilter,
	"custom-reduce": CustomReduce,
	"flatten-array": FlattenArray,
	"flatten-object": FlattenObject,
	"deep-clone": DeepClone,
	"is-equal": isEqual,
	"event-emitter": EventEmitter,
	"set-timeout": SetTimeout,
};

const PolyfillsComponent = () => {
	const { title } = useParams();
	const Component = polyfillComponents[title];
	return Component ? <Component /> : <NotFound />;
};

export default PolyfillsComponent;
