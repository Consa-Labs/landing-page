/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#01567A',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
