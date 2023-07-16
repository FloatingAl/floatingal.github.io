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
        'cgray': '#D5D5D5',
      },
      width: {
        96: '300px',
        97: '500px',
        98: '600px',
        99: '450px',
      },
      height: {
        96: '500px',
        97: '600px',
        98: '500px',
        99: '400px',
      },
      minWidth: {
        97: '500px'
      },
      minHeight: {
        97: '500px'
      },
      maxHeight: {
        99:'400px',
      },
      maxWidth: {
        97:'500px',
      },
      backface:{
        'backface-visibility': 'hidden',
        '-moz-backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
        '-ms-backface-visibility': 'hidden'
      },
      zIndex:{
        999: '999'
      },
    },
  },
  plugins: [],
}
