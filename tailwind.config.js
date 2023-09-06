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
        primary: "#111827",
        secondary: "#0F5A75",
        border: "#00A9B2",
        cta: "#61ECBC",
      },
    },
  },
  plugins: [],
};
