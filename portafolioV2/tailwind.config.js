/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // Archivos de tu proyecto
    './node_modules/flowbite/**/*.js', // Ruta de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Agrega el plugin de Flowbite
  ],
  darkMode: ['class', '[data-theme="dark"]'],
};
