/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      //blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      light_blue: colors.lightBlue,
      deep_violet: '#314CA9',
      blue: {
          50: '#ecf0ff',
          100: '#dde3ff',
          200: '#c2cbff',
          300: '#9ca7ff',
          400: '#7579ff',
          500: '#5850ff',
          600: '#4e36f5',
          700: '#432ad8',
          800: '#3625ae',
          900: '#302689'
      },
      gray:{
        50:'#ccc',
        100:'#fff',
        200:'#ddd',
        300:'#eee'
      },
      green:{
        400:'#4caf50'
      }
  },
  },
  plugins: [],
}