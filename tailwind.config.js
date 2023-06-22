/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'white': '#ffffff',
        'gray': 'rgba(255, 255, 255, 0.75)',
        'apple': '#A9E589',
      },
    },
  },
  plugins: [],
}
