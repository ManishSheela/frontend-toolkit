import { cn } from "@/lib/utils";

/**
 * Full-height container that:
 * - fills available height
 * - keeps content vertically centered
 * - never grows beyond its parent (scrolls internally)
 */
const LearningBox = ({ className, children }) => {
	return (
		<div
			className={cn(
				"flex flex-col w-full h-full min-h-0 rounded-sm p-4 bg-stone-700 text-center overflow-y-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

export default LearningBox;
