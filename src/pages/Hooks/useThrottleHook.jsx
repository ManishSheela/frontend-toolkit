// import React, { useEffect, useRef, useState } from "react";

// const exampleCode = `
// const useDebounce = (value, delay) => {
// 	const [debouncedValue, setDebouncedValue] = useState(value);

// 	useEffect(() => {
// 		const handler = setTimeout(() => {
// 			setDebouncedValue(value);
// 		}, delay);
// 		return () => clearTimeout(handler);
// 	}, [delay, value]);

// 	return debouncedValue;
// };

// const UseDebounceHook = () => {
// 	const [inputValue, setInputValue] = useState("");

// 	const debouncedValue = useDebounce(inputValue, 2000);

// 	return (
// 		<>
// 			<input
// 				autoFocus
// 				type="text"
// 				value={inputValue}
// 				onChange={(e) => setInputValue(e.target.value)}
// 				className="p-2  text-black rounded-md border border-gray-300 focus:outline-none text-sm w-1/2 mx-auto block"
// 				/>
// 				<p>Input Value: {inputValue}</p>
// 				<p>Debounced Value: {debouncedValue}</p>	
// 		</>
// 	);
// };

// export default UseDebounceHook;

// `.trim();


// const useThrottle = (value, delay) => {
// 	const [throttleValue, setThrottleValue] = useState(null);
// 	const lastExecuted = useRef(Date.now());

// 	useEffect(() => {
// 		if (Date.now - lastExecuted.current >= delay) {
// 			setThrottleValue(value);
// 			lastExecuted.current = Date.now();
// 		}
// 	}, [value, delay]);

// 	return throttleValue;
// };

const UseThrottleHook = () => {
	return <div>coming soon...</div>;
};

export default UseThrottleHook;
