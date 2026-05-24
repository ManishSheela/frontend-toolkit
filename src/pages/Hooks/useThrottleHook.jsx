import { Button } from "@/components/ui/button";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useCallback, useEffect, useRef, useState } from "react";

export const useThrottleValue = (value, delay = 500) => {
	const [throttledValue, setThrottledValue] = useState(value);
	const lastExecuted = useRef(Date.now());

	useEffect(() => {
		const now = Date.now();
		if (now - lastExecuted.current >= delay) {
			setThrottledValue(value);
			lastExecuted.current = now;
		} else {
			const timer = setTimeout(
				() => {
					setThrottledValue(value);
					lastExecuted.current = now;
				},
				delay - (now - lastExecuted.current),
			);

			return () => clearTimeout(timer);
		}
	}, [value, delay]);

	return throttledValue;
};

export const useThrottle = (callback, delay = 500) => {
	const lastExecuted = useRef(0);

	const throttleFn = useCallback(
		(...args) => {
			const now = Date.now();

			if (now - lastExecuted.current >= delay) {
				callback(...args);
				lastExecuted.current = now;
			}
		},
		[callback, delay],
	);

	return throttleFn;
};

const useThrottleHook = () => {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const throttledValue = useThrottleValue(inputValue, 5000);
	const buttonClick = useThrottle(() => {
		setCount((prev) => prev + 1);
		console.log("throttled click");
	}, 1000);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		console.log("throttled input");
	};

	return (
		<>
			<LearningBox>
				<p className="text-white">{count}</p>
				<Button onClick={buttonClick} className="bg-white w-[150px]">
					Click Fast 🚀
				</Button>

				<input
					className="p-2 mt-3 rounded-md"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<p className="text-white">Throttled Value: {throttledValue}</p>
			</LearningBox>
			<CodeDisplay
				codeString="
	export const useThrottle = (callback, delay = 500) => {
	const lastExecuted = useRef(0);

	const throttleFn = useCallback(
		(...args) => {
			const now = Date.now();

			if (now - lastExecuted.current >= delay) {
				callback(...args);
				lastExecuted.current = now;
			}
		},
		[callback, delay],
	);

	return throttleFn;
};
"
			/>
		</>
	);
};

export default useThrottleHook;
