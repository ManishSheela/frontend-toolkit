import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useState } from "react";

export const useUndoRedo = (initialValues) => {
	const [history, setHistory] = useState({
		past: [],
		present: initialValues,
		future: [],
	});

	console.log({ history });

	const set = (value) => {
		setHistory((prev) => ({
			past: [...prev.past, prev.present],
			present: value,
			future: [],
		}));
	};

	const undo = () => {
		setHistory((prev) => {
			if (prev.past.length === 0) return prev;

			const previous = prev.past[prev.past.length - 1];

			return {
				past: prev.past.slice(0, -1),
				present: previous,
				future: [prev.present, ...prev.future],
			};
		});
	};

	const redo = () => {
		setHistory((prev) => {
			if (prev.future.length === 0) return prev;

			const next = prev.future[0];

			return {
				past: [...prev.past, prev.present],
				present: next,
				future: prev.future.slice(1),
			};
		});
	};

	return { set, history, undo, redo };
};

const UseUndoRedoHook = () => {
	const { set, history, undo, redo } = useUndoRedo("");
	return (
		<>
			<LearningBox>
				<input
					type="text"
					value={history.present}
					onChange={(e) => set(e.target.value)}
					className="p-2 rounded-md"
				/>
				<div className="flex flex-row mt-2 gap-2">
					<button onClick={undo} className="bg-primary w-[120px]  text-white">
						Undo
					</button>
					<button onClick={redo} className="bg-primary w-[120px] text-white">
						Redo
					</button>
				</div>
				<p className="text-white">{history.past.join("<")}</p>
				<p className="text-white">{history.present}</p>
				<p className="text-white">{history.future.join(">")}</p>
			</LearningBox>
			<CodeDisplay
				codeString={`
  export const useUndoRedo = (initialValues) => {
	const [history, setHistory] = useState({
		past: [],
		present: initialValues,
		future: [],
	});

	const set = (value) => {
		setHistory((prev) => ({
			past: [...prev.past, prev.present],
			present: value,
			future: [],
		}));
	};

	const undo = () => {
		setHistory((prev) => {
			if (prev.past.length === 0) return prev;

			const previous = prev.past[prev.past.length - 1];

			return {
				past: prev.past.slice(0, -1),
				present: previous,
				future: [prev.present, ...prev.future],
			};
		});
	};

	const redo = () => {
		setHistory((prev) => {
			if (prev.future.length === 0) return prev;

			const next = prev.future[0];

			return {
				past: [...prev.past, prev.present],
				present: next,
				future: prev.future.slice(1),
			};
		});
	};

	return { set, history, undo, redo };
};`}
			/>
		</>
	);
};

export default UseUndoRedoHook;
