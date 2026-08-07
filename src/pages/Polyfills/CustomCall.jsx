/* eslint-disable react/no-unescaped-entities */
import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import pageSource from "./CustomCall.jsx?raw";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";

// #region implementation

Function.prototype.myCall = function(obj, ...args){

	if(typeof this !== 'function'){
		throw new Error('myCall must be call on the function');
	}

    obj = obj === null ? globalThis : Object(obj);

	const key = Symbol();

	obj[key] = this;

	const result = obj[key](...args);

	delete obj[key];

	return result;
}

const person = { name: 'Manish' };

function greet(city, country) {
  return `Hi, I am ${this.name} from ${city}, ${country}`;
}

const output = greet.myCall(person, 'Churu', 'India');

// #endregion implementation


const CustomCall = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Function.prototype.myCall(obj, ...args)</code> is a custom
						implementation of the JavaScript <code>call()</code> method.
					</li>
					<li>
						It calls the function <strong>immediately</strong>, but lets you
						choose what <code>this</code> should be inside it via{" "}
						<code>obj</code>.
					</li>
					<li>
						Extra arguments are passed <strong>one by one</strong> —{" "}
						<code>...args</code> collects them — that's the difference from{" "}
						<code>apply</code>, which takes them as a single array.
					</li>
					<li>
						It throws an error if <code>myCall</code> is used on something
						that isn't a function.
					</li>
					<li>
						If <code>obj</code> is <code>null</code>, <code>this</code> falls
						back to <code>globalThis</code>; otherwise it's converted to an
						object with <code>Object(obj)</code>.
					</li>
					<li>
						A unique <code>Symbol()</code> key temporarily attaches the
						function (<code>this</code>) onto <code>obj</code>, so calling it
						as <code>obj[key](...)</code> automatically sets <code>this</code>{" "}
						to <code>obj</code>.
					</li>
					<li>
						The function runs as <code>obj[key](...args)</code>, and the
						temporary key is deleted right after so nothing leaks onto{" "}
						<code>obj</code>.
					</li>
					<li>Finally, the function's return value is passed back to the caller.</li>
				</ul>
				<p>
					<strong>Live example:</strong>
				</p>
				<p>greet.myCall(person, "Churu", "India")</p>
				<p>Output: {output}</p>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default CustomCall;
