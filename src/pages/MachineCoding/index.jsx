import { useParams } from "react-router-dom";
import { machineCodingItems } from "./manifest";

const MachineCoding = () => {
	const { title } = useParams();
	const Component = machineCodingItems.find((item) => item.slug === title)
		?.Component;
	return Component && <Component />;
};

export default MachineCoding;
