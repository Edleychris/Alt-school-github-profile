/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#fff",
      "dark-teal": "rgba(9, 22, 56, 1)",
      "light-grey": "rgba(243, 243, 250, 1)",
      "border-grey": "rgba(180, 190, 200, 1)",
      "dark-yellow": "#FFB633",
      "lighter-yellow": "#fffb63",
      "grey-light-100": "#F3F3FA",
      "grey-200": "#B4BEC8",
      "sky-500": "#00B4D8",
    },
    extend: {

    },
  },
  plugins: [],
}

