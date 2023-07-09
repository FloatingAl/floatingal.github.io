const { Hidden } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-brown': '#96714e',
        'light-biege': '#f9dcb2',
        'light-brown-2': '#97744A',
        'biege': '#F5F5DC',
        'bright-red': '#c85e4c',
        'smokey-white':'#F5F5F5',
        'purp':'#7510f7',
      },
      width: {
        97: '500px'
      },
      height: {
        97: '600px'
      },
      backface:{
        'backface-visibility': 'hidden',
        '-moz-backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
        '-ms-backface-visibility': 'hidden'
      }
    },
  },
  plugins: [],
}
