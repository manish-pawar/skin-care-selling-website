/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white-background": "#f8f7f6",
        "green-background": "#55996f",
        "green-text-color": "#55996f",
        "regular-text-color": "#000000",
        "black-background": "#000000",
        "off-white-background-one": "#fdf6f1",
        "yellow-background": "#facc15"
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

