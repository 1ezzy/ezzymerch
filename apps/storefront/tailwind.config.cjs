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
				primary: 'hsl(264.4019 81.9608% 50%)',
				secondary: 'hsl(310.4453 100% 50%)',
				accent: 'hsl(173.4835 100% 42.1865%)',
				neutral: 'hsl(214.2857 19.6262% 20.9804%)',
				'surface-100': 'hsl(180 100% 100%)',
				'surface-200': 'hsl(0 0% 94.902%)',
				'surface-300': 'hsl(180 1.9608% 90%)'
			},
			dark: {
				'color-scheme': 'dark',
				primary: 'hsl(325.5224 100% 73.7255%)',
				secondary: 'hsl(264.7059 89.4737% 77.6471%)',
				accent: 'hsl(31.0204 100% 71.1765%)',
				neutral: 'hsl(229.5652 15.0327% 30%)',
				info: 'hsl(190.5263 96.6102% 76.8627%)',
				success: 'hsl(135.1765 94.4444% 64.7059%)',
				warning: 'hsl(64.9091 91.6667% 76.4706%)',
				danger: 'hsl(0 100% 66.6667%)',
				'surface-100': 'hsl(231.4286 14.8936% 18.4314%)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [svelte_ux]
};

module.exports = config;
