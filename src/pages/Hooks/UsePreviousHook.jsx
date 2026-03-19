import { Button } from "@/components/ui/button";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef, useState } from "react";

const exampleCode = `
const usePrevious = ({ value }) => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

const UsePreviousHook = () => {
	const [count, setCount] = useState(0);
	const prevCount = usePrevious(count);

	return (
		<>
			<h2>Current Count: {count}</h2>
			<h2>Previous Count: {prevCount}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	);
};
`.trim();

const usePrevious = (value) => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

const UsePreviousHook = () => {
	const [count, setCount] = useState(0);
	const prevCount = usePrevious(count);

	return (
		<>
			<LearningBox className="text-white gap-4 ">
				<h2>Previous Count: {prevCount}</h2>
				<h2>Current Count: {count}</h2>
				<Button
					onClick={() => setCount((prev) => prev + 1)}
					className="bg-blue-500 hover:bg-blue-600 w-1/2 mx-auto"
				>
					Increment
				</Button>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default UsePreviousHook;
