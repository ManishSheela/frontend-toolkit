// InfiniteScroll.jsx
import { lazy, useState } from "react";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

const Threshold = 20;

const exampleCode = `
import { useState } from "react";

const Threshold = 20;

const InfiniteScroll = () => {
  const [data, setData] = useState([...new Array(40)]);

  const loadMore = () => {
    setData((prev) => [...prev, ...new Array(10)]);
  };

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const remainingArea = scrollHeight - (scrollTop + clientHeight);

    if (remainingArea < Threshold) {
      loadMore();
    }
  };

  return (
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
  );
};

export default InfiniteScroll;
`.trim();

const InfiniteScroll = () => {
	const [data, setData] = useState([...new Array(40)]);

	const loadMore = () => {
		setData((prev) => [...prev, ...new Array(10)]);
	};

	const handleScroll = (e) => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		const remainingArea = scrollHeight - (scrollTop + clientHeight);

		if (remainingArea < Threshold) {
			loadMore();
		}
	};

	return (
		<>
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
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default InfiniteScroll;
