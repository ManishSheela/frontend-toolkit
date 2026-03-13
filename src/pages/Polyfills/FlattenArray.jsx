import { lazy } from "react";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

const exampleCode = `
const arr = ['a', 'b', ['c', 'd'], 'e', ['f', 'g']];

const flattenArray = (arr, result = []) => {
  if (Array.isArray(arr)) {
    for (const key of arr) {
      flattenArray(key, result);
    }
  } else {
    result.push(arr);
  }
  return result;
};

console.log(flattenArray(arr)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
`.trim();

const FlattenArray = () => {
	return (
		<>
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs"></div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default FlattenArray;
