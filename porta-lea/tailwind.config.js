import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  plugins:[
     require('tailwindcss-motion'),
     require('tailwindcss-intersect')
  ],
theme: {
		extend: {
			colors: {
				'paper': '#F4F1EA',   // Color de fondo tipo papel arroz/viejo
				'ink': '#18181B',     // Negro no puro, tipo tinta china
				'frog-green': '#4F6F52', // El verde de las ranas de tus imágenes
				'stamp-red': '#C84C34',  // Para detalles de contraste (tipo sello)
			},
			fontFamily: {
				// Sugiero importar 'Space Mono' y 'Shippori Mincho' de Google Fonts
				'mono': ['"Space Mono"', 'monospace'],
				'serif': ['"Shippori Mincho"', 'serif'],
			},
            backgroundImage: {
                'grain': "url('https://t3.ftcdn.net/jpg/03/52/69/97/360_F_352699703_M3h9P5YFwq7X5g5tk5b5tk5b5tk5b5t.jpg')" // Opcional: textura de ruido
            }
		},
	},
}