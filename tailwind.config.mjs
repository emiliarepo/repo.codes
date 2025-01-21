/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				beige: "var(--color-beige)",
				primary: "var(--color-primary)",
				"primary-active": "var(--color-primary-active)",
				gray: "var(--color-gray)",
				light: "var(--color-beige-light)",
				dark: "var(--color-beige-dark)",
			},
			fontFamily: {
				serif: ["Gelasio Variable", "serif"],
				display: ["Platypi Variable", "serif"],
			},
		},
	},
	plugins: [],
	darkMode: "class", // Use class-based dark mode
};
