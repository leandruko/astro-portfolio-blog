/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors:{
        'backgraund':'#1A1A19',
        'verde':'#31511E',
        'pistacho':'#859F3D',
        'claro':'#F6FCDF'
      },
    },
  },
  plugins: [],
}
