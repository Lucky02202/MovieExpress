/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0D0B16",
        secondary: "#313443",
        border: "#00A9B2",
        cta: "#61ECBC",
      },
    },
  },
  plugins: [],
};
