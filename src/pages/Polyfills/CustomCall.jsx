import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import pageSource from "./CustomCall.jsx?raw";

// TODO: implement Function.prototype.myCall

const CustomCall = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-white text-sm">
				<p>
					<strong>Explanation:</strong>
				</p>
				{/* TODO: explanation bullets */}
				<p>
					<strong>Live example:</strong>
				</p>
				{/* TODO: live example output */}
			</LearningBox>
			<CodeDisplay codeString={pageSource} />
		</>
	);
};

export default CustomCall;
