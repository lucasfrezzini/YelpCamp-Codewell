/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
