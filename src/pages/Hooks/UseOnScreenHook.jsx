import LearningBox from "@/src/components/organisms/LearningBox";
import { useRef } from "react";

// const useOnScreen = (ref)=> {
//   const [isIntersecting , setIsIntersecting] = useState(false);

// }

const UseOnScreenHook = () => {
	const ref = useRef(null);

	// const isVisible = useOnScreen(ref);
	return (
		<>
			<LearningBox ref={ref}>Coming soon...</LearningBox>
		</>
	);
};

export default UseOnScreenHook;
