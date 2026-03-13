import { lazy, useState } from "react";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

const exampleCode = `
const AutoComplete = ({
	suggestions = [
		"Apple",
		"Banana",
		"Orange",
		"Mango",
		"Grapes",
		"Peach",
		"Plum",
		"Pear",
		"Strawberry",
		"Blueberry",
	],
	onChange = () => {},
}) => {
	const [query, setQuery] = useState("");
	const [showSuggestion, setShowSuggestion] = useState(false);

	const handleChangeQuery = (e) => {
		const value = e.target.value;
		setQuery(value);
		setShowSuggestion(true);
		onChange(value);
	};

	const onClickSuggestion = (value) => {
		setQuery(value);
		setShowSuggestion(false);
	};

	const filteredSuggestion = suggestions.filter((sugg) =>
		sugg.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<div className="h-auto flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-gray-50 text-center justify-center">
				<div className="flex flex-row gap-2 items-center justify-center">
					<input
						value={query}
						onChange={handleChangeQuery}
						className="text-black p-2 rounded-sm"
						placeholder="Search for a fruit…"
					/>
					<button
						className="text-black p-2 rounded-md"
						onClick={() => setQuery("")}
					>
						Clear
					</button>
				</div>

				{query.length > 0 && showSuggestion && (
					<ul className="list-none bg-black text-gray-50 flex flex-col gap-1 p-2">
						{filteredSuggestion.map((suggestion) => (
							<li
								key={suggestion}
								className="p-2 bg-gray-50 text-black rounded-sm cursor-pointer"
								onClick={() => onClickSuggestion(suggestion)}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default AutoComplete;
`.trim();

const AutoComplete = ({
	suggestions = [
		"Apple",
		"Banana",
		"Orange",
		"Mango",
		"Grapes",
		"Peach",
		"Plum",
		"Pear",
		"Strawberry",
		"Blueberry",
	],
	onChange = () => {},
}) => {
	const [query, setQuery] = useState("");
	const [showSuggestion, setShowSuggestion] = useState(false);

	const handleChangeQuery = (e) => {
		const value = e.target.value;
		setQuery(value);
		setShowSuggestion(true);
		onChange(value);
	};

	const onClickSuggestion = (value) => {
		setQuery(value);
		setShowSuggestion(false);
	};

	const filteredSuggestion = suggestions.filter((sugg) =>
		sugg.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<div className="h-auto flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-gray-50 text-center justify-center">
				<div className="flex flex-row gap-2 items-center justify-center">
					<input
						value={query}
						onChange={handleChangeQuery}
						className="text-black p-2 rounded-sm"
						placeholder="Search for a fruit…"
					/>
					<button
						className="text-black p-2 rounded-md"
						onClick={() => setQuery("")}
					>
						Clear
					</button>
				</div>

				{query.length > 0 && showSuggestion && (
					<ul className="list-none bg-black text-gray-50 flex flex-col gap-1 p-2">
						{filteredSuggestion.map((suggestion) => (
							<li
								key={suggestion}
								className="p-2 bg-gray-50 text-black rounded-sm cursor-pointer"
								onClick={() => onClickSuggestion(suggestion)}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
			</div>

			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default AutoComplete;
