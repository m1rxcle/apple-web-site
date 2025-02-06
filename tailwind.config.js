/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "390px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				blue: "#2997FF",
				gray: {
					DEFAULT: "#86868b",
					100: "#94928d",
					200: "#afafaf",
					300: "#42424570",
				},
				zinc: "#101010",
			},
			keyframes: {
				"infinite-scroll": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-50% - 20px))" },
				},
			},
			animation: {
				"infinite-scroll": "infinite-scroll 30s linear infinite ",
			},
		},
	},
	plugins: [],
}
