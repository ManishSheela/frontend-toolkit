import { Button } from "@/components/ui/button";
import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy, useEffect, useState } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `

const formatTime = (ms) => {
	const minute = Math.floor(ms / 60000);
	const second = Math.floor((ms % 60000) / 1000);
	const mili = Math.floor(ms % 1000);

	return (
		String(minute).padStart(2, "0") +
		":" +
		String(second).padStart(2, "0") +
		"." +
		String(mili).padStart(3, "0")
	);
};

const Stopwatch = () => {
	const [timer, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const reset = () => {
		setTimer(0);
		setIsRunning(false);
	};
	const handleStartPause = () => {
		setIsRunning(!isRunning);
	};

	useEffect(() => {
		let timerId;
		if (isRunning) {
			timerId = setInterval(() => {
				setTimer((prev) => prev + 10);
			}, 10);
		}

		return () => clearInterval(timerId);
	}, [isRunning]);
	return (
		<>
			<div className="h-auto flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-gray-50 text-center justify-center">
				<h1 className="text-2xl font-bold">Stopwatch</h1>
				<h3>{formatTime(timer)}</h3>
				<div className="flex flex-row items-center gap-2">
					<button onClick={handleStartPause}>
						{isRunning ? "Pause" : "Start"}
					</button>
					<button onClick={reset}>Reset</button>
				</div>
			</div>
		</>
	);
};

export default Stopwatch;

`.trim();

const formatTime = (ms) => {
	const minute = Math.floor(ms / 60000);
	const second = Math.floor((ms % 60000) / 1000);
	const mili = Math.floor(ms % 1000);

	return (
		String(minute).padStart(2, "0") +
		":" +
		String(second).padStart(2, "0") +
		"." +
		String(mili).padStart(3, "0")
	);
};

const Stopwatch = () => {
	const [timer, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const reset = () => {
		setTimer(0);
		setIsRunning(false);
	};
	const handleStartPause = () => {
		setIsRunning(!isRunning);
	};

	useEffect(() => {
		let timerId;
		if (isRunning) {
			timerId = setInterval(() => {
				setTimer((prev) => prev + 10);
			}, 10);
		}

		return () => clearInterval(timerId);
	}, [isRunning]);
	return (
		<>
			<LearningBox className="gap-4">
				<h1 className="text-2xl font-bold">Stopwatch</h1>
				<h3>{formatTime(timer)}</h3>
				<div className="flex flex-row items-center gap-2 justify-center">
					<Button onClick={handleStartPause} className="text-black">
						{isRunning ? "Pause" : "Start"}
					</Button>
					<Button onClick={reset} className="text-black">
						Reset
					</Button>
				</div>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default Stopwatch;
