import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";

const CIRCLE_SIZE = 100;

const addCircles = (e) => {
	const clientX = e.clientX;
	const clientY = e.clientY;

	return {
		top: clientY - CIRCLE_SIZE / 2,
		left: clientX - CIRCLE_SIZE / 2,
		right: clientX - CIRCLE_SIZE / 2 + CIRCLE_SIZE,
		bottom: clientY - CIRCLE_SIZE / 2 + CIRCLE_SIZE,
		background: "red",
	};
};

const isCircleOverlapping = (circle1, circle2) => {
	return (
		circle1.left < circle2.right &&
		circle1.right > circle2.left &&
		circle1.top < circle2.bottom &&
		circle1.bottom > circle2.top
	);
};

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
};

const Circle = ({ top, left, background }) => {
	return (
		<div
			style={{
				position: "absolute",
				width: CIRCLE_SIZE,
				height: CIRCLE_SIZE,
				borderRadius: "50%",
				opacity: 0.5,
				background,
				top,
				left,
			}}
		/>
	);
};

const OverlappingCircles = () => {
	const [circles, setCircles] = useState([]);
	const [history, setHistory] = useState([]);

	const drawCircle = (e) => {
		const circle = addCircles(e);
		console.log("drawing", circle);
		// Clear redo history on new action
		setHistory([]);

		setCircles((prev) => {
			const isOverlapping = prev.some((prevCircle) =>
				isCircleOverlapping(circle, prevCircle),
			);

			if (isOverlapping) {
				circle.background = getRandomColor();
			}

			return [...prev, circle];
		});
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			const isUndo =
				(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !e.shiftKey;

			const isRedo =
				((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") ||
				((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "z");

			if (isUndo) {
				e.preventDefault();

				setCircles((prevCircles) => {
					if (!prevCircles.length) return prevCircles;

					const lastCircle = prevCircles.at(-1);

					setHistory((prevHistory) => [...prevHistory, lastCircle]);

					return prevCircles.slice(0, -1);
				});
			}

			if (isRedo) {
				e.preventDefault();

				setHistory((prevHistory) => {
					if (!prevHistory.length) return prevHistory;

					const lastCircle = prevHistory.at(-1);

					setCircles((prevCircles) => [...prevCircles, lastCircle]);

					return prevHistory.slice(0, -1);
				});
			}
		};

		window.addEventListener("click", drawCircle);
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("click", drawCircle);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			<LearningBox className="gap-4">
				{circles.map((circle, index) => (
					<Circle key={index} {...circle} />
				))}
			</LearningBox>

			<CodeDisplay codeString={codeString} />
		</>
	);
};

export default OverlappingCircles;

const codeString = `
const CIRCLE_SIZE = 100;

const addCircles = (e) => {
	const clientX = e.clientX;
	const clientY = e.clientY;

	return {
		top: clientY - CIRCLE_SIZE / 2,
		left: clientX - CIRCLE_SIZE / 2,
		right: clientX - CIRCLE_SIZE / 2 + CIRCLE_SIZE,
		bottom: clientY - CIRCLE_SIZE / 2 + CIRCLE_SIZE,
		background: "red",
	};
};

const isCircleOverlapping = (circle1, circle2) => {
	return (
		circle1.left < circle2.right &&
		circle1.right > circle2.left &&
		circle1.top < circle2.bottom &&
		circle1.bottom > circle2.top
	);
};

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
};

const Circle = ({ top, left, background }) => {
	return (
		<div
			style={{
				position: "absolute",
				width: CIRCLE_SIZE,
				height: CIRCLE_SIZE,
				borderRadius: "50%",
				opacity: 0.5,
				background,
				top,
				left,
			}}
		/>
	);
};

const OverlappingCircles = () => {
	const [circles, setCircles] = useState([]);
	const [history, setHistory] = useState([]);

	const drawCircle = (e) => {
		const circle = addCircles(e);
		
		setHistory([]);

		setCircles((prev) => {
			const isOverlapping = prev.some((prevCircle) =>
				isCircleOverlapping(circle, prevCircle),
			);

			if (isOverlapping) {
				circle.background = getRandomColor();
			}

			return [...prev, circle];
		});
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			const isUndo =
				(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !e.shiftKey;

			const isRedo =
				((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") ||
				((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "z");

			if (isUndo) {
				e.preventDefault();

				setCircles((prevCircles) => {
					if (!prevCircles.length) return prevCircles;

					const lastCircle = prevCircles.at(-1);

					setHistory((prevHistory) => [...prevHistory, lastCircle]);

					return prevCircles.slice(0, -1);
				});
			}

			if (isRedo) {
				e.preventDefault();

				setHistory((prevHistory) => {
					if (!prevHistory.length) return prevHistory;

					const lastCircle = prevHistory.at(-1);

					setCircles((prevCircles) => [...prevCircles, lastCircle]);

					return prevHistory.slice(0, -1);
				});
			}
		};

		window.addEventListener("click", drawCircle);
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("click", drawCircle);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (

			<LearningBox className="gap-4">
				{circles.map((circle, index) => (
					<Circle key={index} {...circle} />
				))}
			</LearningBox>

	);
};

export default OverlappingCircles;
`;
