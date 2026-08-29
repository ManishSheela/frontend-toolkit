import { lazy, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";
import { Button } from "@/components/ui/button";

// #region implementation

const EMOJI = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🥑"];

function shuffleArray(array) {
	return [...array].sort(() => Math.random() - 0.5);
}

function createCards() {
	const symbols = [...EMOJI, ...EMOJI];
	return shuffleArray(symbols).map((value, index) => ({
		id: index,
		value,
		isFlipped: false,
		isMatched: false,
	}));
}

const MemoryGame = () => {
	const [cards, setCards] = useState(() => createCards());
	const [flippedCards, setFlippedCards] = useState([]);
	const [isChecking, setIsChecking] = useState(false);
	const [moves, setMoves] = useState(0);

	const handleCardClick = (card) => {
		// Prevent interaction if checking, already flipped, or already matched
		if (isChecking || card.isFlipped || card.isMatched) return;
		if (flippedCards.length === 2) return;

		// Flip the clicked card
		setCards((prevCards) =>
			prevCards.map((item) =>
				item.id === card.id ? { ...item, isFlipped: true } : item
			)
		);

		const newFlippedCards = [...flippedCards, card];
		setFlippedCards(newFlippedCards);

		// When 2 cards are flipped, check for match
		if (newFlippedCards.length === 2) {
			setIsChecking(true);
			setMoves((prev) => prev + 1);

			const [first, second] = newFlippedCards;

			if (first.value === second.value) {
				setCards((prevCards) =>
					prevCards.map((item) =>
						item.id === first.id || item.id === second.id
							? { ...item, isMatched: true }
							: item
					)
				);
				setFlippedCards([]);
				setIsChecking(false);
			} else {
				setTimeout(() => {
					setCards((prevCards) =>
						prevCards.map((item) =>
							item.id === first.id || item.id === second.id
								? { ...item, isFlipped: false }
								: item
						)
					);
					setFlippedCards([]);
					setIsChecking(false);
				}, 800);
			}
		}
	};

	const handleRestart = () => {
		setCards(createCards());
		setMoves(0);
		setFlippedCards([]);
		setIsChecking(false);
	};

	const isGameWon = cards.length > 0 && cards.every((card) => card.isMatched);

	return (
		<>
			<LearningBox className={"gap-4"}>
				<div className="flex flex-col items-center gap-4">
					<div className="flex items-center justify-between w-full max-w-2xl px-2">
						<span className="text-sm font-medium">Moves: {moves}</span>
						<Button size="sm" onClick={handleRestart}>
							Restart
						</Button>
					</div>

					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(4, 1fr)`,
						}}
						className="gap-2 max-w-2xl mx-auto"
					>
						{cards.map((card) => (
							<Button
								key={card.id}
								className="w-16 h-16 text-2xl flex items-center justify-center"
								onClick={() => handleCardClick(card)}
							>

								{card.isFlipped || card.isMatched ? card.value : "?"}
							</Button>
						))}
					</div>

					{isGameWon && (
						<h2 className="text-xl font-semibold text-green-600">You won!</h2>
					)}
				</div>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};
// #endregion implementation

export default MemoryGame;