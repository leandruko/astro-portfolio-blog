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
        'gris':'#3C3D37'
      },
    },
  },
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }

    'md': '960px',
    // => @media (min-width: 960px) { ... }

    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },
  plugins: [],
}
