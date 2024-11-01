/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors:{
        'negro':'#181C14',
        'verde':'#697565',
        'claro':'#ECDFCC',
        'gris':'3C3D37'
      },
    },
  },
  plugins: [],
}
