/* eslint-disable react/no-unescaped-entities */
import { lazy } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

const exampleCode = `
const isEqual = (a, b, visited = new WeakMap()) => {
  if (a === b) return true;

  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false;

  // Check circular references
  if (visited.has(a)) return visited.get(a) === b;
  visited.set(a, b);
  
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  // Check if both are arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i], visited)) return false;
    }
    return true;
  }

  for (const key of aKeys) {
    if (!b.hasOwnProperty(key)) return false;
    if (!isEqual(a[key], b[key], visited)) return false;
  }

  return true;
};


const obj1 = { name: "John", age: 30, nested: { x: [1, 2, 3] } };
const obj2 = { name: "John", age: 30, nested: { x: [1, 2, 3] } };

console.log(isEqual(obj1, obj2)); // true

`.trim();

const isEqual = () => {
	return (
		<>
			<LearningBox className="gap-2 shadow-xs text-white text-sm text-left">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>isEqual(a, b, visited)</code> is a recursive function that
						deeply compares two values to determine if they are structurally
						equal.
					</li>
					<li>
						If both values are strictly equal using <code>===</code>, it returns{" "}
						<code>true</code> immediately.
					</li>
					<li>
						If either value is <code>null</code> or not of type{" "}
						<code>'object'</code>, they are not deeply equal — returns{" "}
						<code>false</code>.
					</li>
					<li>
						To prevent infinite recursion from{" "}
						<strong>circular references</strong>, it uses a <code>WeakMap</code>{" "}
						to track visited objects.
					</li>
					<li>
						If one is an <code>Array</code> and the other is not, the function
						returns <code>false</code>.
					</li>
					<li>
						It compares the number of keys in both objects. If the lengths
						differ, it returns <code>false</code>.
					</li>
					<li>
						If both values are arrays, it compares each element recursively for
						deep equality.
					</li>
					<li>
						For plain objects, it compares each key-value pair recursively.
						<ul className="list-disc pl-5">
							<li>
								Skips inherited properties using <code>Object.keys()</code>.
							</li>
							<li>
								Uses <code>hasOwnProperty</code> check to ensure both objects
								share the same keys.
							</li>
							<li>Recursively checks values of each key.</li>
						</ul>
					</li>
					<li>
						Returns <code>true</code> only if all corresponding properties and
						nested values are deeply equal.
					</li>
				</ul>
			</LearningBox>

			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default isEqual;
