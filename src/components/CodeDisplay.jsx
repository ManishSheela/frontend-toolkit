import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ codeString }) => (
	<div className="w-full md:w-auto h-[500px] overflow-auto shadow-xs">
		<SyntaxHighlighter language="jsx" style={prism}>
			{codeString}
		</SyntaxHighlighter>
	</div>
);

export default CodeDisplay;
