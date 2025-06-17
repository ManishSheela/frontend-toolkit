import { Button } from "@/components/ui/button";
import CodeDisplay from "@/src/components/CodeDisplay";
import { useState } from "react";

const exampleCode = `
const TicTacToe = () => {

//  Array.from({length : 9}, (_, i)=> i);
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
	
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-white text-center">
				<h1>Tic Tac Toe</h1>
				{winner ? (
					<div>Winner is : {winner}</div>
				) : (
					<div>Next Turn: {xTurn ? "X" : "O"}</div>
				)}
				<Button onClick={reset} className="text-black w-52 m-auto">
					Reset
				</Button>
				<div className="grid grid-cols-3 grid-rows-3 gap-1 mt-4">
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
			</div>

	);
};

export default TicTacToe;
`.trim();

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
			<div className="h-auto flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-white text-center">
				<h1>Tic Tac Toe</h1>
				{winner ? (
					<div>Winner is : {winner}</div>
				) : (
					<div>Next Turn: {xTurn ? "X" : "O"}</div>
				)}
				<Button onClick={reset} className="text-black w-52 m-auto">
					Reset
				</Button>
				<div className="grid grid-cols-3 grid-rows-3 gap-1 mt-4">
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
			</div>

			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default TicTacToe;
