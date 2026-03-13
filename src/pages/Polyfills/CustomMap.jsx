import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
 Array.prototype.myMap = function(callback){ 
	 const result = [];
	 for(let i = 0; i < this.length; i++){
	 		result.push(callback(this[i], i, this));
	 	}
	return result;
 }

 const arr = [1,2,3,4];
 const result = arr.myMap((item)=> item * 2);

 console.log({result});
`.trim();

const CustomMap = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Array.prototype.myMap(callback)</code> is a custom
						implementation of the JavaScript <code>map()</code> method.
					</li>
					<li>
						It extends the <code>Array prototype</code>, which allows all arrays
						to use the <code>myMap</code> method.
					</li>
					<li>
						A new empty array <code>result</code> is created to store the
						transformed values.
					</li>
					<li>
						A <code>for</code> loop iterates through each element of the array.
					</li>
					<li>
						Inside the loop, the <code>callback</code> function is executed for
						every element.
					</li>
					<li>
						The callback receives three arguments:
						<ul className="list-disc pl-5">
							<li>
								<code>this[i]</code> → the current element
							</li>
							<li>
								<code>i</code> → the index of the element
							</li>
							<li>
								<code>this</code> → the original array
							</li>
						</ul>
					</li>
					<li>
						The value returned from the callback is pushed into the{" "}
						<code>result</code> array.
					</li>
					<li>
						After iterating through all elements, the function returns the new{" "}
						<code>result</code> array.
					</li>
					<li>
						This ensures that the original array remains unchanged while
						producing a new array with transformed values.
					</li>
				</ul>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomMap;
