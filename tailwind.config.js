'use strict';

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			...colors,
			'#1e40af': '#1e40af',
			'#27272a': '#27272a',
			'#3f3f46': '#3f3f46',
			'#525252': '#525252',
			'#d4d4d8': '#d4d4d8',
			'#475569': '#475569',
			'#F9CB81': '#F9CB81',
		},
		extend: {
			listStyleType: {
				square: 'square',
			},
			width: {
				128: '30rem',
				136: '34rem',
				144: '44rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
