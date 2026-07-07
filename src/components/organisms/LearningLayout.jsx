import { cloneElement, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LearningLayout = ({ sidebar, header, children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const closeSidebar = () => setIsSidebarOpen(false);

	return (
		<div className="flex h-screen w-screen overflow-hidden relative">
			{isSidebarOpen && (
				<div
					className="fixed inset-0 z-30 bg-black/40 md:hidden"
					onClick={closeSidebar}
					aria-hidden="true"
				/>
			)}

			<div
				className={cn(
					"fixed inset-y-0 left-0 z-40 h-full transition-transform duration-300 ease-in-out md:static md:translate-x-0",
					isSidebarOpen ? "translate-x-0" : "-translate-x-full",
				)}
			>
				{cloneElement(sidebar, { onNavigate: closeSidebar })}
			</div>

			<div className="flex flex-col flex-1 min-w-0 h-full">
				<div className="flex items-center">
					<button
						type="button"
						onClick={() => setIsSidebarOpen((prev) => !prev)}
						className="md:hidden p-3 text-gray-600 hover:text-gray-900"
						aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
					>
						{isSidebarOpen ? (
							<X className="w-5 h-5" />
						) : (
							<Menu className="w-5 h-5" />
						)}
					</button>
					<div className="flex-1 min-w-0">{header}</div>
				</div>
				<div className="flex-1 min-h-0 overflow-hidden">{children}</div>
			</div>
		</div>
	);
};

export default LearningLayout;
