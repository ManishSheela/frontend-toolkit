/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				primary: "#a855f7",
				platinum: "#E6E6E6",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
