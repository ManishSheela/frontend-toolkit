import CodeDisplay from "@/src/components/CodeDisplay";

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
			<div className="h-[500px] flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs"></div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default CustomFilter;
