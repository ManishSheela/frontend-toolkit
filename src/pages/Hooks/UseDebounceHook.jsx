import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./UseDebounceHook.jsx?raw";

// #region implementation
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(handler);
	}, [delay, value]);

	return debouncedValue;
};
// #endregion implementation

const UseDebounceHook = () => {
	const [inputValue, setInputValue] = useState("");

	const debouncedValue = useDebounce(inputValue, 2000);

	return (
		<>
			<LearningBox className="text-white gap-4">
				<input
					
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="p-2 bg-white text-black rounded-md border border-gray-300 focus:outline-none text-sm w-1/2 mx-auto block"
				/>
				<p>Input Value: {inputValue}</p>
				<p>Debounced Value: {debouncedValue}</p>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default UseDebounceHook;
