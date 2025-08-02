/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'], // Using Google Fonts as placeholders
      },
      colors: {
        'primary': '#0D1117',
        'secondary': '#161B22',
        'custom': '#0D1117',
        'rovio300': '#A855F7',
        'ink': '#E6EDF3',
        'muted': '#8B949E',
        'dark-blue': '#C9D1D9'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}