/* eslint-disable react/no-unescaped-entities */
import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./DeepClone.jsx?raw";

// #region implementation
function deepClone(value, cache = new WeakMap()) {
  // Primitive values
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Circular references
  if (cache.has(value)) {
    return cache.get(value);
  }

  // Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // RegExp
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // Array
  if (Array.isArray(value)) {
    const result = [];
    cache.set(value, result);

    for (let i = 0; i < value.length; i++) {
      result[i] = deepClone(value[i], cache);
    }

    return result;
  }

  // Object
  const result = {};
  cache.set(value, result);

  for (const key of Object.keys(value)) {
    result[key] = deepClone(value[key], cache);
  }

  return result;
}

const original = { name: "John", nested: { tags: ["a", "b"] } };
const cloned = deepClone(original);
// #endregion implementation
cloned.nested.tags.push("c");

const DeepClone = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>deepClone(value, weakMap)</code> is a recursive function to
						deeply clone any value.
					</li>
					<li>
						If the value is a **primitive** (like number, string, boolean), it's
						returned directly.
					</li>
					<li>
						To prevent **infinite loops**, it uses <code>WeakMap</code> to track
						circular references.
					</li>
					<li>
						If the value is a <code>Date</code>, it returns a new{" "}
						<code>Date</code> object with the same timestamp.
					</li>
					<li>
						If the value is a <code>RegExp</code>, it returns a new{" "}
						<code>RegExp</code> with the same source and flags.
					</li>
					<li>
						If it's an <code>Array</code>, it clones each element recursively
						and builds a new array.
					</li>
					<li>
						If it's a plain <code>Object</code>:
						<ul className="list-disc pl-5">
							<li>It creates a new object.</li>
							<li>
								Tracks it in <code>weakMap</code>.
							</li>
							<li>
								Clones each key-value pair recursively (only if the key is an
								own property).
							</li>
						</ul>
					</li>
					<li>
						This function ensures that the resulting clone is fully independent
						and handles complex nested structures.
					</li>
				</ul>
				<p>
					<strong>Live example:</strong>
				</p>
				<p>Original: {JSON.stringify(original)}</p>
				<p>Cloned (after mutating clone's nested array): {JSON.stringify(cloned)}</p>
			</LearningBox>

			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default DeepClone;
