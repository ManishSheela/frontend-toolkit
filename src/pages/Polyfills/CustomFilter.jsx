import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
 Array.prototype.myFilter = function(callback){ 
	 const result = [];
	 for(let i = 0; i < this.length; i++){
	    const res = callback(this[i], i, this);
	     if(!!res){
	 			result.push(this[i]);
			 }
	 	}
	return result;
 }

 const arr = [1,2,3,4];
 const result = arr.myFilter((item)=> item % 2 === 0);

 console.log({result});
`.trim();

const CustomFilter = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Array.prototype.myFilter(callback)</code> is a custom
						implementation of the JavaScript <code>filter()</code> method.
					</li>
					<li>
						It extends the <code>Array prototype</code>, which allows all arrays
						to use the <code>myFilter</code> method.
					</li>
					<li>
						A new empty array <code>result</code> is created to store elements
						that pass the filtering condition.
					</li>
					<li>
						A <code>for</code> loop iterates through each element of the array.
					</li>
					<li>
						For every iteration, the <code>callback</code> function is executed
						with three arguments:
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
						The value returned by the callback is stored in <code>res</code>.
					</li>
					<li>
						The condition <code>!!res</code> converts the callback result into a
						boolean value (<code>true</code> or <code>false</code>).
					</li>
					<li>
						If the result is <code>true</code>, the current element{" "}
						<code>this[i]</code> is pushed into the <code>result</code> array.
					</li>
					<li>
						If the result is <code>false</code>, the element is skipped.
					</li>
					<li>
						After iterating through all elements, the function returns the{" "}
						<code>result</code> array containing only the elements that satisfy
						the condition.
					</li>
					<li>
						This ensures that the original array remains unchanged while
						returning a new filtered array.
					</li>
				</ul>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomFilter;
