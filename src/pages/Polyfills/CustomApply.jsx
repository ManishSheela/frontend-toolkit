/* eslint-disable react/no-unescaped-entities */
import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import pageSource from "./CustomApply.jsx?raw";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";

// #region implementation

Function.prototype.myApply = function(obj, args){

	if(typeof this !== 'function'){
		throw new Error('myApply must be call on the function');
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

const output = greet.myApply(person, ['Churu', 'India']);

// #endregion implementation


const CustomApply = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Function.prototype.myApply(obj, args)</code> is a custom
						implementation of the JavaScript <code>apply()</code> method.
					</li>
					<li>
						It calls the function immediately (unlike <code>bind</code>), but
						lets you choose what <code>this</code> should be inside it via{" "}
						<code>obj</code>.
					</li>
					<li>
						Arguments are passed as a <strong>single array</strong>,{" "}
						<code>args</code> — that's the one difference from{" "}
						<code>call</code>, which takes them one by one.
					</li>
					<li>
						It throws an error if <code>myApply</code> is used on something
						that isn't a function.
					</li>
					<li>
						If <code>obj</code> is <code>null</code>, <code>this</code> falls
						back to <code>globalThis</code>; otherwise it's converted to an
						object with <code>Object(obj)</code>.
					</li>
					<li>
						A unique <code>Symbol()</code> key is used to temporarily attach
						the function (<code>this</code>) onto <code>obj</code>. This is
						what makes <code>obj.method()</code> style invocation set{" "}
						<code>this</code> to <code>obj</code> automatically.
					</li>
					<li>
						The function is then called as <code>obj[key](...args)</code>,
						spreading the array out into individual arguments, and the temp
						key is deleted right after so it never leaks onto{" "}
						<code>obj</code>.
					</li>
					<li>Finally, the function's return value is passed back to the caller.</li>
				</ul>
				<p>
					<strong>Live example:</strong>
				</p>
				<p>greet.myApply(person, ['Churu', 'India'])</p>
				<p>Output: {output}</p>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default CustomApply;
