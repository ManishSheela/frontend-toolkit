import { LucideCheck, LucideCopy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ codeString }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(codeString);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy code:", err);
		}
	};

	return (
		<div className="w-full md:w-auto h-full overflow-auto shadow-xs relative">
			<button
				onClick={handleCopy}
				title="Copy to clipboard"
				className="absolute top-4 right-2 z-10 h-10 w-10 p-2 rounded bg-black bg-opacity-40 text-white hover:bg-opacity-70"
			>
				{copied ? <LucideCheck className="text-green-400" /> : <LucideCopy />}
			</button>
			<SyntaxHighlighter
				language="jsx"
				style={prism}
				showLineNumbers={true}
				wrapLines={true}
				wrapLongLines={true}
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeDisplay;
