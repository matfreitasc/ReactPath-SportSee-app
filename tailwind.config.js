/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary-color': '#E60000',
        'secondary-color': '#74798C',
        'tertiary-color': '#FBFBFB',
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/forms'),
  ],
}
