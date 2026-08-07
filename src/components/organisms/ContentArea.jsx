import { useEffect, useState } from "react";
import { ResizablePanelGroup } from "@/components/ui/resizable";

const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.innerWidth < breakpoint,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
		setIsMobile(mediaQuery.matches);

		const handleChange = (e) => setIsMobile(e.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [breakpoint]);

	return isMobile;
};

const ContentArea = ({ children }) => {
	const isMobile = useIsMobile();

	return (
		<ResizablePanelGroup
			orientation={isMobile ? "vertical" : "horizontal"}
			className="w-full h-full min-h-0 rounded-lg border border-gray-200 dark:border-gray-800 p-2"
		>
			{children}
		</ResizablePanelGroup>
	);
};

export default ContentArea;
