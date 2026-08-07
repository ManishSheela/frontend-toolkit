import { useLocation, useParams } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/context/theme-provider";

const InfoBar = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const { title } = useParams();
	const { theme, toggleTheme } = useTheme();

	const headerFromState = locationState.title;
	const descriptionFromState = locationState.description;

	const header = headerFromState || title?.split("-").join(" ") || "Homepage";
	const description =
		descriptionFromState ||
		"Explore machine-coding exercises and JavaScript polyfills.";

	return (
		<div className="flex items-center justify-between w-full bg-gray-50 dark:bg-gray-900 py-2 px-4 border-b dark:border-gray-800">
			<div className="flex flex-col">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
					{header}
				</h2>
				<p className="text-gray-500 dark:text-gray-400 text-sm">
					{description}
				</p>
			</div>
			<button
				type="button"
				onClick={toggleTheme}
				aria-label={
					theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
				}
				className="shrink-0 rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-colors"
			>
				{theme === "dark" ? (
					<Sun className="w-5 h-5" />
				) : (
					<Moon className="w-5 h-5" />
				)}
			</button>
		</div>
	);
};

export default InfoBar;
