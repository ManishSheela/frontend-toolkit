import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ menu }) => {
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
					"flex justify-between items-center gap-2 p-2 rounded-sm w-full cursor-pointer hover:bg-gray-100",
					isExpanded && "bg-gray-100",
				)}
				onClick={toggleExpand}
			>
				<Link className="flex-1 text-sm text-black no-underline hover:text-black">
					{title}
				</Link>
				{isExpanded ? (
					<MinusIcon className="w-4 h-4 text-gray-600" />
				) : (
					<PlusIcon className="w-4 h-4 text-gray-600" />
				)}
			</div>

			{isExpanded && (
				<div className="ml-2 mt-1 p-1 pl-2 border-l-2 border-gray-200 flex-1 min-h-0 overflow-y-auto pr-1">
					{items?.map((subMenu, index) => (
						<NavLink
							key={index}
							to={redirectURL.replace(":title", subMenu.navigate)}
							state={{
								title: subMenu.title,
								description: subMenu.description,
							}}
							className={({ isActive }) =>
								cn(
									"block text-sm mb-1 rounded-sm px-2 py-1 transition-colors",
									isActive
										? "bg-primary/10 text-primary font-medium"
										: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
								)
							}
						>
							{subMenu.title}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};

export default MenuItem;
