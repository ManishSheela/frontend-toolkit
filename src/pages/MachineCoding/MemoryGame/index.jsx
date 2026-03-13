import { lazy, useEffect, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

const exampleCode = `
function Shuffle(data) {
	const newArr = [...data];
	for (let i = newArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); 
		[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
	}

	return newArr;
}

const generateCards = (N) => {
	const nPairs = (N * N) / 2;
	const symbols = Array.from({ length: nPairs }, (_, i) => i + 1);
	const totalSymbols = [...symbols, ...symbols];
	const shuffledSymbols = Shuffle(totalSymbols);

	return shuffledSymbols.map((symbol, index) => ({
		id: index,
		symbol,
		isFlipped: false,
		isMatched: false,
	}));
};

const Card = ({ symbol, isFlipped, isMatched, onClick }) => (
	<div
		onClick={onClick}
		className={\`w-16 h-16 bg-gray-200 flex items-center justify-center text-2xl font-semibold cursor-pointer rounded \${isFlipped || isMatched ? "bg-blue-500 text-gray-50" : "bg-gray-600 text-gray-50"}\`}
	>
		{isFlipped || isMatched ? symbol : "?"}
	</div>
);

const MemoryGame = () => {
	const [inputN, setInputN] = useState(0);
	const [cards, setCards] = useState([]);
	const [isStarted, setIsStarted] = useState(false);
	const [flipIndexs, setFlipIndexs] = useState([]);

	const handleStart = () => {
		const n = parseInt(inputN);
		if (n > 0 && n % 2 === 0) {
			setCards(generateCards(n));
			setIsStarted(true);
		} else alert("Please enter even number.");
	};

	const handleCardClick = (index) => {
		if (flipIndexs.length === 2) return;
		if (cards[index].isFlipped || cards[index].isMatched) return;

		const newCards = [...cards];
		newCards[index].isFlipped = true;
		setCards(newCards);
		setFlipIndexs((prev) => [...prev, index]);
	};

	useEffect(() => {
		if (flipIndexs.length === 2) {
			const [first, second] = flipIndexs;

			if (cards[first].symbol === cards[second].symbol) {
				setCards((prev) => {
					const newCards = [...prev];
					newCards[first].isMatched = true;
					newCards[second].isMatched = true;
					return newCards;
				});
				setFlipIndexs([]);
			} else {
				const timer = setTimeout(() => {
					setCards((prev) => {
						const newCards = [...prev];
						newCards[first].isFlipped = false;
						newCards[second].isFlipped = false;
						return newCards;
					});
					setFlipIndexs([]);
				}, 1000);

				return () => clearTimeout(timer);
			}
		}
	}, [flipIndexs, cards]);

	return ({isStarted ? (
					<div className="flex flex-col items-center gap-4">
						<div
							style={{ gridTemplateColumns: \`repeat(\${inputN}, 1fr)\` }}
							className="grid gap-2 max-w-2xl mx-auto"
						>
							{cards.map((card, index) => (
								<Card
									key={card.id}
									symbol={card.symbol}
									isFlipped={card.isFlipped}
									isMatched={card.isMatched}
									onClick={() => handleCardClick(index)}
								/>
							))}
						</div>
						{cards.length > 0 && cards.every((card) => card.isMatched) && (
							<h2 className="text-xl font-semibold text-green-600">You won!</h2>
						)}
					</div>
				) : (
					<>
						<h1 className="text-2xl font-semibold">Memory Card Game</h1>
						<div className="flex flex-col items-center gap-4">
							<input
								type="number"
								value={inputN}
								onChange={(e) => setInputN(e.target.value)}
								placeholder="Enter grid size N (even number)"
								className="border p-2 rounded text-black"
							/>
							<button
								onClick={handleStart}
								className="bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-600"
							>
								Start Game
							</button>
						</div>
					</>
				)}
	);
};
export default MemoryGame;
`.trim();

function Suffle(data) {
	const newArr = [...data];
	for (let i = newArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i + 1);
		[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
	}

	return newArr;
}

const generateCards = (N) => {
	const nPairs = (N * N) / 2;
	const symbols = Array.from({ length: nPairs }, (_, i) => i + 1);
	const totalSymbols = [...symbols, ...symbols];

	const suffledSymbols = Suffle(totalSymbols);

	return suffledSymbols.map((symbol, index) => ({
		id: index,
		symbol,
		isFlipped: false,
		isMatched: false,
	}));
};

const Card = ({ symbol, isFlipped, isMatched, onClick }) => (
	<div
		onClick={onClick}
		className={`w-16 h-16 bg-gray-200 flex items-center justify-center text-2xl font-bold cursor-pointer rounded ${
			isFlipped || isMatched
				? "bg-primary text-white"
				: "bg-gray-600 text-white"
		}`}
	>
		{isFlipped || isMatched ? symbol : "?"}
	</div>
);

const MemoryGame = () => {
	const [inputN, setInputN] = useState(null);
	const [cards, setCards] = useState([]);
	const [isStarted, setIsStarted] = useState(false);
	const [flipIndexs, setFlipIndexs] = useState([]);

	const handleStart = () => {
		const n = parseInt(inputN);
		if (n > 0 && n % 2 === 0) {
			setCards(generateCards(n));
			setIsStarted(true);
		} else alert("Please enter even number");
	};

	const handleCardClick = (index) => {
		if (flipIndexs.length === 2) return;
		if (cards[index].isFlipped || cards[index].isMatched) return;
		const newCards = [...cards];
		newCards[index].isFlipped = true;
		setCards(newCards);
		setFlipIndexs((prev) => [...prev, index]);
	};

	useEffect(() => {
		if (flipIndexs.length === 2) {
			const [first, second] = flipIndexs;

			if (cards[first].symbol === cards[second].symbol) {
				setCards((prev) => {
					const newCards = [...prev];
					newCards[first].isMatched = true;
					newCards[second].isMatched = true;
					return newCards;
				});
				setFlipIndexs([]);
			} else {
				const timer = setTimeout(() => {
					setCards((prev) => {
						const newCards = [...prev];
						newCards[first].isFlipped = false;
						newCards[second].isFlipped = false;
						return newCards;
					});
					setFlipIndexs([]);
				}, 1000);

				return () => clearTimeout(timer);
			}
		}
	}, [flipIndexs, cards]);

	return (
		<>
			<LearningBox className={"gap-4"}>
				{isStarted ? (
					<div className="flex flex-col items-center gap-4">
						<div
							style={{
								display: "grid",
								gridTemplateColumns: `repeat(${inputN}, 1fr)`,
							}}
							className="gap-2 max-w-2xl mx-auto"
						>
							{cards.map((card, index) => (
								<Card
									key={card.id}
									symbol={card.symbol}
									isFlipped={card.isFlipped}
									isMatched={card.isMatched}
									onClick={() => handleCardClick(index)}
								/>
							))}
						</div>
						{cards.length > 0 && cards.every((card) => card.isMatched) && (
							<h2 className="text-xl font-semibold text-green-600">You won!</h2>
						)}
					</div>
				) : (
					<>
						<h1 className="text-2xl font-bold">Memory Card Game</h1>
						<div className="flex flex-col items-center gap-4">
							<input
								type="number"
								value={inputN}
								onChange={(e) => setInputN(e.target.value)}
								placeholder="Enter grid size N (even)"
								className="border p-2 rounded text-black"
							/>
							<button
								onClick={handleStart}
								className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
							>
								Start Game
							</button>
						</div>
					</>
				)}
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default MemoryGame;
