import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = (callback, Threshold = 20) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleScroll = useCallback(
		(e) => {
			const { scrollHeight, scrollTop, clientHeight } = e.target;
			const remainingArea = scrollHeight - (scrollTop + clientHeight);

			if (remainingArea < Threshold) {
				callbackRef.current();
			}
		},
		[Threshold],
	);

	return handleScroll;
};

const useInfiniteScrollHook = () => {
	const [data, setData] = useState([...new Array(40)]);
	const handleScroll = useInfiniteScroll(() => {
		setData((prev) => [...prev, ...new Array(10)]);
	});
	return (
		<>
			<LearningBox>
				<div
					onScroll={handleScroll}
					className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs"
				>
					{data.map((item, index) => (
						<div key={index} className="bg-slate-100 rounded-sm p-2 text-black">
							{index + 1}
						</div>
					))}
				</div>
			</LearningBox>
			<CodeDisplay
				codeString={`
  export const useInfiniteScroll = (callback, Threshold = 20) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleScroll = useCallback(
		(e) => {
			const { scrollHeight, scrollTop, clientHeight } = e.target;
			const remainingArea = scrollHeight - (scrollTop + clientHeight);

			if (remainingArea < Threshold) {
				callbackRef.current();
			}
		},
		[Threshold],
	);

	return handleScroll;
};`}
			/>
		</>
	);
};

export default useInfiniteScrollHook;
