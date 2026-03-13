import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

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
			<LearningBox>Lorem*1000</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomMap;
