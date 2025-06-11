import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ menu }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { title, navigate: code, items = [] } = menu;
	
	const [isExpanded, setIsExpanded] = useState(() => pathname.includes(code));

	const redirectURL = `/${code}/:title`;

	const toggleExpand = () => {
		navigate(redirectURL.replace(":title", items[0].navigate), {
			replace: true,
		});
		setIsExpanded((prev) => !prev);
	};
	return (
		<div>
			<div
				className={cn(
					"flex justify-between items-center gap-2 p-2 rounded-sm my-1 w-full hover:bg-gray-200",
					isExpanded && "bg-gray-200"
				)}
				onClick={toggleExpand}
			>
				<Link className="flex-1 text-sm text-black no-underline hover:text-black">
					{title}
				</Link>
				<PlusIcon className="w-4 h-4 cursor-pointer" />
			</div>

			{isExpanded && (
				<div className="ml-4 p-1 pl-2 border-l-2">
					{items?.map((subMenu, index) => {
						return (
							<NavLink
								key={index}
								className={({ isActive }) =>
									cn(
										"block text-sm py-1",
										isActive
											? "text-blue-500"
											: "text-gray-500 hover:text-inherit"
									)
								}
								to={redirectURL.replace(":title", subMenu.navigate)}
							>
								{subMenu.title}
							</NavLink>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default MenuItem;
