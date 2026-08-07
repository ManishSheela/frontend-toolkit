import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef } from "react";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./UseClickOutsideHook.jsx?raw";

// #region implementation
const useClickOutside = (ref, handler) => {
	useEffect(() => {
		const listner = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				handler();
			}
		};
		document.addEventListener("mousedown", listner);

		return () => document.removeEventListener("mousedown", listner);
	}, [ref]);
};
// #endregion implementation

const UseClickOutsideHook = () => {
	const containerRef = useRef(null);

	useClickOutside(containerRef, () => {
		console.log("Clicked outside");
	});

	return (
		<>
			<LearningBox>
				<div
					ref={containerRef}
					className="flex justify-center items-center w-[150px] h-[150px] p-5 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 cursor-pointer"
				>
					<p>clickOutsideHook</p>
				</div>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default UseClickOutsideHook;
