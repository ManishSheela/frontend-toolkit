// InfiniteScroll.jsx
import { lazy, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useInfiniteScroll } from "../../Hooks/UseInfiniteScrollHook";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";

// #region implementation
const InfiniteScroll = () => {
	const [data, setData] = useState([...new Array(40)]);
	const handleScroll = useInfiniteScroll(() =>
		setData((prev) => [...prev, ...new Array(10)]),
	);

	return (
		<>
			<LearningBox
				onScroll={handleScroll}
				className="gap-2 overflow-auto shadow-xs"
			>
				{data.map((item, index) => (
					<div key={index} className="bg-slate-100 rounded-sm p-2 text-black">
						{index + 1}
					</div>
				))}
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};
// #endregion implementation

export default InfiniteScroll;
