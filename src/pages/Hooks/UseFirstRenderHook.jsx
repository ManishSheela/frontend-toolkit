import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef } from "react";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./UseFirstRenderHook.jsx?raw";

// #region implementation
const useFirstRender = () => {
	const ref = useRef(true);

	useEffect(() => {
		if (ref.current) {
			ref.current = false;
		}
	}, []);

	return ref.current;
};
// #endregion implementation

const UseFirstRenderHook = () => {
	const isFirstRender = useFirstRender();
	return (
		<>
			<LearningBox>
				<h2 className="text-white">is this the first render? {isFirstRender ? "Yes" : "No"}</h2>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default UseFirstRenderHook;
