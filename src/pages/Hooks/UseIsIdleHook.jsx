import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef, useState } from "react";

const exampleCode = `
const MOUSE_EVENTS = ["mousemove", "mousedown", "touch", "scroll", "keydown"];

const useIdle = (timeout = 3000) => {
	const [isIdle, setIsIdle] = useState(false);
	const timerRef = useRef();

	const resetIdle = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		setIsIdle(false);
		timerRef.current = setTimeout(() => setIsIdle(true), timeout);
	};

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		resetIdle();

		MOUSE_EVENTS.forEach((event) => window.addEventListener(event, resetIdle));

		return () =>
			MOUSE_EVENTS.forEach((event) =>
				window.removeEventListener(event, resetIdle),
			);
	}, [timeout]);

	return isIdle;
};

const UseIsIdleHook = () => {
	const isIdle = useIdle(2000);

	return (
	  <h2 className="text-white">Is user idle? {isIdle ? "Yes" : "No"}</h2>
	);
};
export default UseIsIdleHook;
`.trim();

const MOUSE_EVENTS = ["mousemove", "mousedown", "touch", "scroll", "keydown"];

const useIdle = (timeout = 3000) => {
	const [isIdle, setIsIdle] = useState(false);
	const timerRef = useRef();

	const resetIdle = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		setIsIdle(false);
		timerRef.current = setTimeout(() => setIsIdle(true), timeout);
	};

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		resetIdle();

		MOUSE_EVENTS.forEach((event) => window.addEventListener(event, resetIdle));

		return () =>
			MOUSE_EVENTS.forEach((event) =>
				window.removeEventListener(event, resetIdle),
			);
	}, [timeout]);

	return isIdle;
};

const UseIsIdleHook = () => {
	const isIdle = useIdle(2000);

	return (
		<>
			<LearningBox>
				<h2 className="text-white">Is user idle? {isIdle ? "Yes" : "No"}</h2>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default UseIsIdleHook;
