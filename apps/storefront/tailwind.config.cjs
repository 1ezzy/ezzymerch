const colors = require('tailwindcss/colors');
const svelte_ux = require('svelte-ux/plugins/tailwind.cjs');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,svelte}', './node_modules/svelte-ux/**/*.{svelte,js}'],
	theme: {
		fontFamily: {
			indie: 'Indie Flower',
			noto: 'Noto Sans'
		}
	},
	ux: {
		themes: {
			light: {
				'color-scheme': 'light',
				primary: 'hsl(181.7949 92.8571% 49.4118%)',
				secondary: 'hsl(338.25 71.4286% 78.0392%)',
				accent: 'hsl(47.0588 100% 80%)',
				neutral: 'hsl(280 46.4789% 13.9216%)',
				success: 'hsl(99.4286 73.6842% 62.7451%)',
				warning: 'hsl(49.92 69.8324% 64.902%)',
				danger: 'hsl(9.5455 62.8571% 58.8235%)',
				'surface-100': 'hsl(24 33.3333% 97.0588%)',
				'surface-200': 'hsl(26.6667 21.9512% 91.9608%)',
				'surface-300': 'hsl(22.5 14.2857% 89.0196%)'
			},
			dark: {
				'color-scheme': 'dark',
				primary: 'hsl(181.7949 92.8571% 49.4118%)',
				secondary: 'hsl(338.25 71.4286% 78.0392%)',
				accent: 'hsl(47.0588 100% 80%)',
				neutral: 'hsl(205.4015 53.7255% 50%)',
				success: 'hsl(99.4286 73.6842% 62.7451%)',
				warning: 'hsl(49.92 69.8324% 64.902%)',
				danger: 'hsl(9.5455 62.8571% 58.8235%)',
				'surface-100': 'hsl(218.6087 52.5114% 42.9412%)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [svelte_ux]
};

module.exports = config;
