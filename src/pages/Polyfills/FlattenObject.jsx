import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
const obj = { a: 1, b: 2, c: { d: 1, e: 2 } };

const flattenObj = (obj, parentKey = '', result = {}) => {
  for (const key in obj) {
    const value = obj[key];
    const fullKey = parentKey ? \`\${parentKey}.\${key}\` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObj(value, fullKey, result); 
    } else {
      result[fullKey] = value;
    }
  }
  return result;
};

console.log(flattenObj(obj)); // { a: 1, b: 2, 'c.d': 1, 'c.e': 2 }
`.trim();

const FlattenObject = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>flattenObj(obj, parentKey, result)</code> is a recursive
						function used to flatten a nested object into a single-level object.
					</li>
					<li>
						It takes three parameters:
						<ul className="list-disc pl-5">
							<li>
								<code>obj</code> → the input object that may contain nested
								objects
							</li>
							<li>
								<code>parentKey</code> → keeps track of the parent key path
								(defaults to an empty string)
							</li>
							<li>
								<code>result</code> → an object used to collect the flattened
								key-value pairs (defaults to an empty object)
							</li>
						</ul>
					</li>
					<li>
						A <code>for...in</code> loop iterates through each key in the
						object.
					</li>
					<li>
						For each iteration:
						<ul className="list-disc pl-5">
							<li>
								The current value is stored in <code>value</code>.
							</li>
							<li>
								A new key called <code>fullKey</code> is created.
							</li>
							<li>
								If a <code>parentKey</code> exists, the new key becomes
								<code>parentKey.key</code> (dot notation).
							</li>
							<li>If there is no parent key, the key remains the same.</li>
						</ul>
					</li>
					<li>
						The function checks whether the value is a nested object using:
						<ul className="list-disc pl-5">
							<li>
								<code>typeof value === &quot;object&quot;</code>
							</li>
							<li>
								<code>value !== null</code>
							</li>
							<li>
								<code>!Array.isArray(value)</code>
							</li>
						</ul>
					</li>
					<li>
						If the value is a nested object, the function calls itself
						recursively with the updated <code>fullKey</code>.
					</li>
					<li>
						If the value is not an object, it is directly assigned to the{" "}
						<code>result</code> object using <code>fullKey</code> as the key.
					</li>
					<li>
						This recursive process continues until all nested objects are
						traversed.
					</li>
					<li>
						Finally, the function returns the <code>result</code> object
						containing all values in a flattened dot-notation structure.
					</li>
				</ul>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default FlattenObject;
