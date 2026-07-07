import { machineCodingItems } from "../pages/MachineCoding/manifest";
import { polyfillItems } from "../pages/Polyfills/manifest";
import { hookItems } from "../pages/Hooks/manifest";

const toMenuItems = (items) =>
	items.map(({ slug, title, description }) => ({
		title,
		navigate: slug,
		description,
	}));

export const SidebarMenu = [
	{
		title: "Machine Coding",
		navigate: "machine-coding",
		items: toMenuItems(machineCodingItems),
	},
	{
		title: "Polyfills",
		navigate: "polyfills",
		items: toMenuItems(polyfillItems),
	},
	{
		title: "Hooks",
		navigate: "hooks",
		items: toMenuItems(hookItems),
	},
];
