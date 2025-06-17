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

	return (
		<div className="bg-gray-50 h-screen w-72 p-4 text-gray-800 shadow-xl overflow-hidden">
			<SidebarHeader />
			<div className="text-gray-500 text-sm mt-1">v1.0.0</div>
			<div className="mt-4">
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					placeholder="Search the docs..."
					className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
				/>
			</div>
			<div className="flex flex-col mt-4 overflow-y-auto h-[calc(100vh-30px)]">
				{SidebarMenu?.map((menu) => (
					<MenuItem key={menu.title} menu={menu} />
				))}
			</div>
		</div>
	);
};
export default Sidebar;
