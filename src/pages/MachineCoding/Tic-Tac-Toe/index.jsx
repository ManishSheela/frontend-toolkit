import { Button } from "@/components/ui/button";
import { lazy, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";

// #region implementation
const TicTacToe = () => {
	const [board, setBoard] = useState(() => new Array(9).fill(null));
	const [xTurn, setXTurn] = useState(true);

	const calculateWinner = () => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const [a, b, c] of lines) {
			if (board[a] && board[a] === board[b] && board[b] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	const onCardClick = (idx) => {
		if (board[idx] || calculateWinner()) return;

		const newBoard = [...board];
		newBoard[idx] = xTurn ? "X" : "O";

		setBoard(newBoard);
		setXTurn(!xTurn);
	};

	const reset = () => {
		setBoard(new Array(9).fill(null));
		setXTurn(true);
	};

	const winner = calculateWinner();

	return (
		<>
			<LearningBox className="gap-4">
				<h1>Tic Tac Toe</h1>
				{winner ? (
					<div>Winner is : {winner}</div>
				) : (
					<div>Next Turn: {xTurn ? "X" : "O"}</div>
				)}
				<Button onClick={reset} className="w-52">
					Reset
				</Button>
				<div className="grid grid-cols-3 grid-rows-3 gap-1">
					{board.map((item, index) => (
						<div
							key={index}
							onClick={() => onCardClick(index)}
							className="flex items-center justify-center border p-12 text-2xl font-semibold cursor-pointer"
						>
							{item}
						</div>
					))}
				</div>
			</LearningBox>

			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};
// #endregion implementation

export default TicTacToe;
