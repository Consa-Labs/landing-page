/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      serif: ['"Brygada 1918"', 'serif'],
    },
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
