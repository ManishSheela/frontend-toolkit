import LearningBox from "@/src/components/organisms/LearningBox";
import { useRef, useState } from "react";

const useOnScreen = (ref)=> {
  const [isIntersecting , setIsIntersecting] = useState(false);
    
}

const UseOnScreenHook = () => {
	const ref = useRef(null);

	const isVisible = useOnScreen(ref);
	return (
		<>
			<LearningBox ref={ref}>dfkajdkjfa;</LearningBox>
		</>
	);
};

export default UseOnScreenHook;
