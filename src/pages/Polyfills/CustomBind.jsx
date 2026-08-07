/* eslint-disable react/no-unescaped-entities */
import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./CustomBind.jsx?raw";

// #region implementation

Function.prototype.myBind = function (obj, ...boundArgs) {
	if (typeof this !== "function") {
		throw new Error("myBind must be called on a function");
	}

	const fn = this;

	return function (...callArgs) {
		return fn.apply(obj, [...boundArgs, ...callArgs]);
	};
};

const person = { name: "Manish" };

function greet(city, country) {
	return `Hi, I am ${this.name} from ${city}, ${country}`;
}

const greetFromChuru = greet.myBind(person, "Churu");
const output = greetFromChuru("India");

// #endregion implementation

const CustomBind = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Function.prototype.myBind(obj, ...boundArgs)</code> is a
						custom implementation of the JavaScript <code>bind()</code>{" "}
						method.
					</li>
					<li>
						Unlike <code>call</code>/<code>apply</code>, it does{" "}
						<strong>not</strong> run the function right away. Instead it{" "}
						<strong>returns a new function</strong> that runs the original one
						later, whenever it's called.
					</li>
					<li>
						It throws an error if <code>myBind</code> is used on something that
						isn't a function.
					</li>
					<li>
						<code>fn</code> keeps a reference to the original function via{" "}
						<code>this</code>, so the returned function can still call it.
					</li>
					<li>
						<code>boundArgs</code> are the arguments passed to{" "}
						<code>myBind</code> up front. They get "locked in" and prepended to
						any arguments passed later when the bound function is finally
						called.
					</li>
					<li>
						When the returned function runs, it calls{" "}
						<code>fn.apply(obj, [...boundArgs, ...callArgs])</code> — merging
						the preset arguments with the new ones, and setting{" "}
						<code>this</code> to <code>obj</code>.
					</li>
					<li>
						This lets you create a reusable, pre-configured version of a
						function, which is <code>bind</code>'s main use case.
					</li>
				</ul>
				<p>
					<strong>Live example:</strong>
				</p>
				<p>greet.myBind(person, "Churu") returns a new function.</p>
				<p>Calling it with "India" later: {output}</p>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default CustomBind;
