import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
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
		<>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={50} minSize={0}>
				<div className="relative w-full h-full min-h-0 overflow-auto rounded-sm shadow-xs">
					<button
						onClick={handleCopy}
						title="Copy to clipboard"
						className="absolute top-3 right-3 z-10 h-9 w-9 p-2 rounded bg-black/40 text-white hover:bg-black/70"
					>
						{copied ? (
							<LucideCheck className="text-green-400" />
						) : (
							<LucideCopy />
						)}
					</button>

					<SyntaxHighlighter
						language="jsx"
						style={prism}
						showLineNumbers
						wrapLines
						wrapLongLines
						customStyle={{ margin: 0 }}
					>
						{codeString}
					</SyntaxHighlighter>
				</div>
			</ResizablePanel>
		</>
	);
};

export default CodeDisplay;
