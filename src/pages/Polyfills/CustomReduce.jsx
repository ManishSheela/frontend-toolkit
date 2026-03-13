import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
 Array.prototype.myReduce = function(callback, initialValue = this[0]){ 
	 let acc = initialValue;
	 for(let i = 0; i < this.length; i++){
	    acc  = callback(acc, this[i], i);
	 	}
	return acc;
 }

 const arr = [1,2,3,4];
 const result = arr.myReduce((acc, curr)=> acc + curr, 0);

 console.log({result});
`.trim();

const CustomReduce = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>Array.prototype.myReduce(callback, initialValue)</code> is a
						custom implementation of the JavaScript <code>reduce()</code>{" "}
						method.
					</li>
					<li>
						It extends the <code>Array prototype</code>, allowing all arrays to
						use the
						<code>myReduce</code> method.
					</li>
					<li>
						The function takes two arguments:
						<ul className="list-disc pl-5">
							<li>
								<code>callback</code> → a function used to accumulate values
							</li>
							<li>
								<code>initialValue</code> → the starting value of the
								accumulator
							</li>
						</ul>
					</li>
					<li>
						The accumulator variable <code>acc</code> is initialized with{" "}
						<code>initialValue</code>. If no value is provided, it defaults to
						the first element of the array.
					</li>
					<li>
						A <code>for</code> loop iterates through each element of the array.
					</li>
					<li>
						During each iteration, the <code>callback</code> function is
						executed and receives the following arguments:
						<ul className="list-disc pl-5">
							<li>
								<code>acc</code> → the accumulated value from the previous
								iteration
							</li>
							<li>
								<code>this[i]</code> → the current element
							</li>
							<li>
								<code>i</code> → the index of the current element
							</li>
						</ul>
					</li>
					<li>
						The result returned from the callback updates the accumulator{" "}
						<code>acc</code>.
					</li>
					<li>
						This process continues until all elements in the array are
						processed.
					</li>
					<li>
						Finally, the function returns the accumulated value <code>acc</code>
						.
					</li>
					<li>
						This allows multiple array values to be combined into a single
						result, such as calculating sums, products, or building objects.
					</li>
				</ul>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomReduce;
