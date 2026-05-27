import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

const LearningBox = ({ className, children, ...props }) => {
	return (
		<ResizablePanel defaultSize={50} minSize={0}>
			<div
				className={cn(
					"flex flex-col w-full h-full min-h-0 rounded-sm p-4 bg-stone-700 text-center overflow-y-auto",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</ResizablePanel>
	);
};

export default LearningBox;
