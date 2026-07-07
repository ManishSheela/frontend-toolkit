import { useParams } from "react-router-dom";
import { polyfillItems } from "./manifest";

const Polyfills = () => {
	const { title } = useParams();
	const Component = polyfillItems.find((item) => item.slug === title)
		?.Component;
	return Component && <Component />;
};

export default Polyfills;
