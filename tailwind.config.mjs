/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				gold: {
					50: "#fffdf5",
					100: "#fffbea",
					200: "#fff7d1",
					300: "#fff2b8",
					400: "#ffe98a",
					500: "#ffe05c",
					600: "#e6d656",
					700: "#bfb043",
					800: "#998d31",
					900: "#7d7327",
					950: "#6c6521",
				},
			},
		},
	},
	plugins: [],
};
