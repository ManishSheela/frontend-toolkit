import { SidebarMenu } from "@/src/config/SidebarMenu";
import MenuItem from "./MenuItem";
import { useState } from "react";

const SidebarHeader = () => (
	<div className="flex items-center space-x-2">
		<div className="bg-black p-1 rounded-md">
			<span role="img" aria-label="icon" className="text-white">
				📄
			</span>
		</div>
		<div>
			<h2 className="text-lg font-semibold">Frontend Toolkit</h2>
		</div>
	</div>
);

const Sidebar = () => {
	const [query, setQuery] = useState("");

	const normalizedQuery = query.trim().toLowerCase();

	const filteredSections = SidebarMenu.map((section) => {
		if (!normalizedQuery) return section;

		const filteredItems =
			section.items?.filter((item) => {
				const haystack =
					`${item.title} ${item.description || ""}`.toLowerCase();
				return haystack.includes(normalizedQuery);
			}) || [];

		return { ...section, items: filteredItems };
	}).filter(
		(section) =>
			(section.items && section.items.length > 0) || !normalizedQuery,
	);

	return (
		<div className="bg-gray-50  w-72 p-4 text-gray-800 shadow-xl flex flex-col">
			<SidebarHeader />
			<div className="text-gray-500 text-sm mt-1">v1.0.0</div>
			<div className="mt-4">
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					placeholder="Search components..."
					className="w-full p-2 rounded-md border border-gray-300 focus:outline-none text-sm"
				/>
			</div>
			<div className="flex flex-col mt-4 overflow-y-auto h-[calc(100vh-30px)]">
				{filteredSections?.map((menu) => (
					<MenuItem key={menu.title} menu={menu} />
				))}
			</div>
		</div>
	);
};
export default Sidebar;
