/* eslint-disable react/no-unescaped-entities */
import CodeDisplay from "@/src/components/CodeDisplay";

const exampleCode = `
function deepClone(value, weakMap = new WeakMap()){
  if(value === null || typeof value !== 'object') return value;

  // handle circular reference
  if(weakMap.has(value)) return weakMap.get(value);

  // handle Date
  if(value instanceof Date) return new Date(value.getTime());

  // handle Array
  if(Array.isArray(value)){
    const result = [];
    for(let i = 0; i < value.length; i++){
      result[i] = deepClone(value[i], weakMap);
    }
    return result;
  }

  // handle Object
  if(value instanceof Object){
    const result = {};
    weakMap.set(value, result);
    for(const key in value){
      if(value.hasOwnProperty(key)){
        result[key] = deepClone(value[key], weakMap);
      }
    }
    return result;
  }

  return value;
}
`.trim();

const DeepClone = () => {
	return (
		<>
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>deepClone(value, weakMap)</code> is a recursive function to
						deeply clone any value.
					</li>
					<li>
						If the value is a **primitive** (like number, string, boolean), it's
						returned directly.
					</li>
					<li>
						To prevent **infinite loops**, it uses <code>WeakMap</code> to track
						circular references.
					</li>
					<li>
						If the value is a <code>Date</code>, it returns a new{" "}
						<code>Date</code> object with the same timestamp.
					</li>
					<li>
						If it's an <code>Array</code>, it clones each element recursively
						and builds a new array.
					</li>
					<li>
						If it's a plain <code>Object</code>:
						<ul className="list-disc pl-5">
							<li>It creates a new object.</li>
							<li>
								Tracks it in <code>weakMap</code>.
							</li>
							<li>
								Clones each key-value pair recursively (only if the key is an
								own property).
							</li>
						</ul>
					</li>
					<li>
						This function ensures that the resulting clone is fully independent
						and handles complex nested structures.
					</li>
				</ul>
			</div>

			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default DeepClone;
