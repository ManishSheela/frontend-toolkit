import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./FlattenArray.jsx?raw";

const inputArray = ["a", "b", ["c", "d"], "e", ["f", "g"]];

// #region implementation
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
// #endregion implementation

const outputArray = flattenArray(inputArray);

const FlattenArray = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>flattenArray(arr, result)</code> is a recursive function used
						to flatten a nested array into a single-level array.
					</li>
					<li>
						It takes two parameters:
						<ul className="list-disc pl-5">
							<li>
								<code>arr</code> → the input array that may contain nested
								arrays
							</li>
							<li>
								<code>result</code> → an array used to collect the flattened
								values (defaults to an empty array)
							</li>
						</ul>
					</li>
					<li>
						The function first checks whether the current value is an{" "}
						<code>Array</code> using <code>Array.isArray()</code>.
					</li>
					<li>
						If the value is an array:
						<ul className="list-disc pl-5">
							<li>
								A <code>for...of</code> loop iterates through each element.
							</li>
							<li>
								The function calls itself recursively for every element to
								handle deeper nested arrays.
							</li>
						</ul>
					</li>
					<li>
						If the value is <strong>not an array</strong>, it means the element
						is a primitive value (like string, number, etc.).
					</li>
					<li>
						The element is then pushed into the <code>result</code> array.
					</li>
					<li>
						This recursive process continues until all nested arrays are
						traversed.
					</li>
					<li>
						Finally, the function returns the <code>result</code> array
						containing all elements in a single flattened structure.
					</li>
					<li>
						This ensures that arrays with any level of nesting are converted
						into a flat array.
					</li>
				</ul>
							<p>
					<strong>Live example:</strong>
				</p>
				<p>Input: {JSON.stringify(inputArray)}</p>
				<p>Output: {JSON.stringify(outputArray)}</p>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default FlattenArray;
