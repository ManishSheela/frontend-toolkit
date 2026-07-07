import { useParams } from "react-router-dom";
import { hookItems } from "./manifest";

const Hooks = () => {
	const { title } = useParams();
	const Component = hookItems.find((item) => item.slug === title)?.Component;
	return Component && <Component />;
};

export default Hooks;
