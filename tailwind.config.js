/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-inter)", ...defaultTheme.fontFamily.mono],
        sans: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#edf2ff",
          100: "#dee8ff",
          200: "#c3d4ff",
          300: "#9fb6ff",
          400: "#798dff",
          500: "#5967fb",
          600: "#3b3cf0",
          700: "#302ed4",
          800: "#2828ab",
          900: "#282a87",
          DEFAULT: "#0d0d2b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
