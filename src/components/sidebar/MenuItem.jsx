import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ menu, onNavigate }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { title, navigate: code, items = [] } = menu;

	const [isExpanded, setIsExpanded] = useState(() => pathname.includes(code));

	const redirectURL = `/${code}/:title`;

	const toggleExpand = () => {
		if (!items.length) return;

		const firstItem = items[0];
		navigate(redirectURL.replace(":title", firstItem.navigate), {
			replace: true,
			state: {
				title: firstItem.title,
				description: firstItem.description,
			},
		});
		setIsExpanded((prev) => !prev);
	};

	return (
		<div className="flex flex-col ">
			<div
				className={cn(
					"flex justify-between items-center gap-2 p-2 rounded-sm w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
					isExpanded && "bg-gray-100 dark:bg-gray-800",
				)}
				onClick={toggleExpand}
			>
				<Link className="flex-1 text-sm text-black dark:text-gray-100 no-underline hover:text-black dark:hover:text-gray-100">
					{title}
				</Link>
				<span className="relative w-4 h-4 shrink-0 text-gray-600 dark:text-gray-400">
					<PlusIcon
						className={cn(
							"absolute inset-0 w-4 h-4 transition-all duration-200 ease-in-out",
							isExpanded
								? "opacity-0 rotate-90 scale-75"
								: "opacity-100 rotate-0 scale-100",
						)}
					/>
					<MinusIcon
						className={cn(
							"absolute inset-0 w-4 h-4 transition-all duration-200 ease-in-out",
							isExpanded
								? "opacity-100 rotate-0 scale-100"
								: "opacity-0 -rotate-90 scale-75",
						)}
					/>
				</span>
			</div>

			<div
				className={cn(
					"grid transition-all duration-300 ease-in-out overflow-hidden",
					isExpanded ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0",
				)}
			>
				<div className="min-h-0 overflow-y-auto ml-2 p-1 pl-2 border-l-2 border-gray-200 dark:border-gray-700 pr-1">
					{items?.map((subMenu, index) => (
						<NavLink
							key={index}
							to={redirectURL.replace(":title", subMenu.navigate)}
							state={{
								title: subMenu.title,
								description: subMenu.description,
							}}
							onClick={onNavigate}
							className={({ isActive }) =>
								cn(
									"block text-sm mb-1 rounded-sm px-2 py-1 transition-colors",
									isActive
										? "bg-primary/10 text-primary font-medium"
										: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",
								)
							}
						>
							{subMenu.title}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
