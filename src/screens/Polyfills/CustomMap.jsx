import CodeDisplay from "@/src/components/CodeDisplay";

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
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs">
			
			
			
			</div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomMap;
