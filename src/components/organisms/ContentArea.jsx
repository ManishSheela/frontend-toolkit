import { ResizablePanelGroup } from "@/components/ui/resizable";

const ContentArea = ({ children }) => {
	return (
		<ResizablePanelGroup
			direction="horizontal"
			className="w-full h-full min-h-0 rounded-lg border p-2"
		>
			{children}
		</ResizablePanelGroup>
	);
};

export default ContentArea;
