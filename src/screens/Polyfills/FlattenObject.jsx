import CodeDisplay from "@/src/components/CodeDisplay";

const exampleCode = `
const obj = { a: 1, b: 2, c: { d: 1, e: 2 } };

const flattenObj = (obj, parentKey = '', result = {}) => {
  for (const key in obj) {
    const value = obj[key];
    const fullKey = parentKey ? \`\${parentKey}.\${key}\` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObj(value, fullKey, result); 
    } else {
      result[fullKey] = value;
    }
  }
  return result;
};

console.log(flattenObj(obj)); // { a: 1, b: 2, 'c.d': 1, 'c.e': 2 }
`.trim();

const FlattenObject = () => {
	return (
		<>
			<div className="h-[500px] flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs"></div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default FlattenObject;
