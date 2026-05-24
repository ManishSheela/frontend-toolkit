import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";

const useWindowSize = () => {
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleSize = () => {
			setSize(() => ({ width: window.innerWidth, height: window.innerHeight }));
		};

		window.addEventListener("resize", handleSize);

		return () => window.removeEventListener("resize", handleSize);
	}, []);

	return size;
};

const UseWindowSizeHook = () => {
	const { width, height } = useWindowSize();
	return (
		<>
			<LearningBox>
				<p className="text-white "> width : {width}</p>
				<p className="text-white "> height : {height}</p>
			</LearningBox>
			<CodeDisplay
				codeString='
  const useWindowSize = () => {
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleSize = () => {
			setSize(() => ({ width: window.innerWidth, height: window.innerHeight }));
		};

		window.addEventListener("resize", handleSize);

		return ()=>  window.removeEventListener("resize", handleSize);
	}, []);
	return size;
};'
			/>
		</>
	);
};

export default UseWindowSizeHook;
