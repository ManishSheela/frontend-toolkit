import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";

const useKeyPress = (targetKey) => {
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		const down = (e) => e.key === targetKey && setPressed(true);
		const up = (e) => e.key === targetKey && setPressed(false);

		window.addEventListener("keydown", down);
		window.addEventListener("keyup", up);

		return () => {
			window.removeEventListener("keydown", down);
			window.removeEventListener("keyup", up);
		};
	}, [targetKey]);

	return pressed;
};

const UseKeyPressHook = () => {
	const eKey = useKeyPress("e");
	const upKey = useKeyPress("ArrowUp");
	return (
		<>
			<LearningBox>
				<p className="text-white">{eKey ? "e is pressed" : "Press e"}</p>
				<p className="text-white">
					{upKey ? "ArrowUp is pressed" : "Press ArrowUp"}
				</p>
			</LearningBox>
			<CodeDisplay
				codeString={`
  const useKeyPress = (targetKey) => {
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		const down = (e) => e.key === targetKey && setPressed(true);
		const up = (e) => e.key === targetKey && setPressed(false);

		window.addEventListener("keydown", down);
		window.addEventListener("keyup", up);

		return () => {
			window.removeEventListener("keydown", down);
			window.removeEventListener("keyup", up);
		};
	}, []);

	return pressed;
}; 
  `}
			/>
		</>
	);
};

export default UseKeyPressHook;
