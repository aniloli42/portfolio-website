/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode:'class',
	theme: {
		extend: {
			colors: {
				main: '#2A2725',
				secondary: '#FEFEFF',
			},
		},
	},
	plugins: [],
}
