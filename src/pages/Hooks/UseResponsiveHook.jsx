import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useEffect, useState } from "react";

const exampleCode = `
const useResponsive = () => {
	const [state, setState] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	const handleResize = () => {
		const isMobile = window.innerWidth < 768;
		const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
		const isDesktop = window.innerWidth >= 1024;

		setState({ isMobile, isTablet, isDesktop });
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return state;
};

const UseResponsiveHook = () => {
	const { isMobile, isTablet, isDesktop } = useResponsive();
	return (
		<>
				{isMobile && <p className="text-white">Mobile View</p>}
				{isTablet && <p className="text-white">Tablet View</p>}
				{isDesktop && <p className="text-white">Desktop View</p>}
		</>
	);
};

export default UseResponsiveHook;
`.trim();

const useResponsive = () => {
	const [state, setState] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	const handleResize = () => {
		const isMobile = window.innerWidth < 768;
		const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
		const isDesktop = window.innerWidth >= 1024;

		setState({ isMobile, isTablet, isDesktop });
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return state;
};

const UseResponsiveHook = () => {
	const { isMobile, isTablet, isDesktop } = useResponsive();
	return (
		<>
			<LearningBox className="gap-4 text-white">
				{isMobile && <p className="text-white">Mobile View</p>}
				{isTablet && <p className="text-white">Tablet View</p>}
				{isDesktop && <p className="text-white">Desktop View</p>}
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default UseResponsiveHook;
