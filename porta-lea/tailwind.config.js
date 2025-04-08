import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  plugins:[
     require('tailwindcss-motion')
  ],
  theme: {
    patterns:{
      opacities:{
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes:{
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      }
    },
    extend: {
      backgroundImage:{
        'hero': "url('images/patternV3.svg')",
      },
      fontFamily:{
      },
      keyframes: {
        animatedgradient: {
        },
      },
      colors:{
        'negro':'#151922',
        'claro':'#ECDFCC',
        'fondo':'#212529',
        'gris':'#6C757D',
        'card':'#495057',
        'palm': {
          '50': '#eefff2',
          '100': '#d8ffe3',
          '200': '#b4fec8',
          '300': '#79fc9d',
          '400': '#38f06c',
          '500': '#0ed948',
          '600': '#05b437',
          '700': '#088d2f',
          '800': '#0c6f2a',
          '900': '#0c5b25',
          '950': '#00240c',
      },
        'smoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#161616',
      },
      },
    },
  },
}

