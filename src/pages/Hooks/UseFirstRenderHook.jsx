import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useRef } from "react";

const exampleCode = `
const useFirstRender = () => {
	const ref = useRef(true);

	useEffect(() => {
		if (ref.current) {
			ref.current = false;
		}
	}, []);

	return ref.current;
};

const UseFirstRenderHook = () => {
	const isFirstRender = useFirstRender();
	return (
		 <h2>is this the first render? {isFirstRender ? "Yes" : "No"}</h2>
	);
};
`.trim();

const useFirstRender = () => {
	const ref = useRef(true);

	useEffect(() => {
		if (ref.current) {
			ref.current = false;
		}
	}, []);

	return ref.current;
};

const UseFirstRenderHook = () => {
	const isFirstRender = useFirstRender();
	return (
		<>
			<LearningBox>
				<h2 className="text-white">is this the first render? {isFirstRender ? "Yes" : "No"}</h2>
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default UseFirstRenderHook;
