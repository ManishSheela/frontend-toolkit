import CodeDisplay from "@/src/components/CodeDisplay";

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
			<div className="h-[500px] flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs"></div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomReduce;
