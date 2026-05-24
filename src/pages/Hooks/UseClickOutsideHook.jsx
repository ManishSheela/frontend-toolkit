import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef } from "react";

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
					className="flex justify-center items-center w-[150px] h-[150px] p-5 bg-white cursor-pointer"
				>
					<p>clickOutsideHook</p>
				</div>
			</LearningBox>
			<CodeDisplay
				codeString={`

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
					`}
			/>
		</>
	);
};

export default UseClickOutsideHook;
