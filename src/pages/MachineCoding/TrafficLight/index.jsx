import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";

const LIGHT_TYPE = {
	RED: "red",
	YELLOW: "yellow",
	GREEN: "green",
};

const LIGHT_DURATIONS = {
	[LIGHT_TYPE.RED]: 4000,
	[LIGHT_TYPE.YELLOW]: 500,
	[LIGHT_TYPE.GREEN]: 3000,
};

const TrafficLight = () => {
	const [light, setLight] = useState(LIGHT_TYPE.GREEN);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLight((prevLight) => {
				if (prevLight === LIGHT_TYPE.GREEN) {
					return LIGHT_TYPE.YELLOW;
				} else if (prevLight === LIGHT_TYPE.YELLOW) {
					return LIGHT_TYPE.RED;
				} else {
					return LIGHT_TYPE.GREEN;
				}
			});
		}, LIGHT_DURATIONS[light]);
		return () => clearInterval(timer);
	}, [light]);
	return (
		<>
			<LearningBox>
				<div className="flex flex-col m-auto w-24 p-4 items-center justify-center gap-4 bg-black-500">
					<div
						className={`h-16 w-16 rounded-full ${light === LIGHT_TYPE.RED ? "bg-red-500" : "bg-black-500"} shadow-lg`}
					/>
					<div
						className={`h-16 w-16 rounded-full ${light === LIGHT_TYPE.YELLOW ? "bg-yellow-500" : "bg-black-500"} shadow-lg`}
					/>
					<div
						className={`h-16 w-16 rounded-full ${light === LIGHT_TYPE.GREEN ? "bg-green-500" : "bg-black-500"} shadow-lg`}
					/>
				</div>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default TrafficLight;

const exampleCode = `
const LIGHT_TYPE = {
	RED: "red",
	YELLOW: "yellow",
	GREEN: "green",
};

const LIGHT_DURATIONS = {
	[LIGHT_TYPE.RED]: 4000,
	[LIGHT_TYPE.YELLOW]: 500,
	[LIGHT_TYPE.GREEN]: 3000,
};

const TrafficLight = () => {
	const [light, setLight] = useState(LIGHT_TYPE.GREEN);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLight((prevLight) => {
				if (prevLight === LIGHT_TYPE.GREEN) {
					return LIGHT_TYPE.YELLOW;
				} else if (prevLight === LIGHT_TYPE.YELLOW) {
					return LIGHT_TYPE.RED;
				} else {
					return LIGHT_TYPE.GREEN;
				}
			});
		}, LIGHT_DURATIONS[light]);
		return () => clearInterval(timer);
	}, [light]);

	return (
		<>
			<LearningBox>
				<div className="flex flex-col m-auto w-24 p-4 items-center justify-center gap-4 bg-black-500">
					<div
						className={\`h-16 w-16 rounded-full \${light === LIGHT_TYPE.RED ? "bg-red-500" : "bg-black-500"} shadow-lg\`}
					/>
					<div
						className={\`h-16 w-16 rounded-full \${light === LIGHT_TYPE.YELLOW ? "bg-yellow-500" : "bg-black-500"} shadow-lg\`}
					/>
					<div
						className={\`h-16 w-16 rounded-full \${light === LIGHT_TYPE.GREEN ? "bg-green-500" : "bg-black-500"} shadow-lg\`}
					/>
				</div>
			</LearningBox>
		</>
	);
};

export default TrafficLight;
`;
