/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-100": "#005274",
				"color-primary": "#F5F6FA",
				"color-secondary": "#012B3A",
				"link-active": "#001F2B",
			},
		},
	},
};
