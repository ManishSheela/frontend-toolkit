import { lazy, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
const MouseHoldCounterApp = () => {
	const [count, setCount] = useState(0);
	const intervalRef = useRef(null);

	const handleButton = (action) => {
		if (action === "inc") {
			setCount((prev) => prev + 1);
		} else if (action === "dec") {
			setCount((prev) => (prev > 0 ? prev - 1 : 0));
		}
	};

	const handleMouseDown = (action) => {
		if (intervalRef.current) return;

		intervalRef.current = setInterval(() => {
			if (action === "inc") {
				setCount((prev) => prev + 1);
			} else if (action === "dec") {
				setCount((prev) => (prev > 0 ? prev - 1 : 0));
			}
		}, 50);
	};

	const clearMouseHold = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	};

	return (

			<div className="h-fit flex flex-row justify-center items-center gap-4 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs">
				<Button
					onMouseDown={() => handleMouseDown("dec")}
					onMouseUp={clearMouseHold}
					onMouseLeave={clearMouseHold}
					onClick={() => handleButton("dec")}
				>
					-
				</Button>
				<input
					value={count}
					className="p-2 rounded-sm w-16 text-center text-black"
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<Button
					onMouseDown={() => handleMouseDown("inc")}
					onMouseUp={clearMouseHold}
					onMouseLeave={clearMouseHold}
					onClick={() => handleButton("inc")}
				>
					+
				</Button>
			</div>

	);
};

export default MouseHoldCounterApp;
`.trim();

const MouseHoldCounterApp = () => {
	const [count, setCount] = useState(0);
	const intervalRef = useRef(null);

	const handleButton = (action) => {
		if (action === "inc") {
			setCount((prev) => prev + 1);
		} else if (action === "dec") {
			setCount((prev) => (prev > 0 ? prev - 1 : 0));
		}
	};

	const handleMouseDown = (action) => {
		if (intervalRef.current) return;

		intervalRef.current = setInterval(() => {
			if (action === "inc") {
				setCount((prev) => prev + 1);
			} else if (action === "dec") {
				setCount((prev) => (prev > 0 ? prev - 1 : 0));
			}
		}, 50);
	};

	const clearMouseHold = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	};

	return (
		<>
			<LearningBox className="flex flex-row justify-center items-center gap-4 ">
				<Button
					onMouseDown={() => handleMouseDown("dec")}
					onMouseUp={clearMouseHold}
					onMouseLeave={clearMouseHold}
					onClick={() => handleButton("dec")}
				>
					-
				</Button>
				<input
					value={count}
					className="p-2 rounded-sm w-16 text-center text-black"
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<Button
					onMouseDown={() => handleMouseDown("inc")}
					onMouseUp={clearMouseHold}
					onMouseLeave={clearMouseHold}
					onClick={() => handleButton("inc")}
				>
					+
				</Button>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default MouseHoldCounterApp;
