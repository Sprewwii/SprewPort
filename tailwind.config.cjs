/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pink': {
          100: '#fffaf7',
          200: '#a5f3fc',
          300: '#f4c3c3',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#eb9a9a',
          700: '#eb9a9a',
          800: '#155e75',
          900: '#0B0B0C',
        },
      }
    },
  },
  plugins: [],
}
