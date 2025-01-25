/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        ultraWide: "0.2em",
        extraUltraWide: "0.4em",
      },
      fontFamily: {
        fredericka: ['"Fredericka the Great"', "serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        "main-color": "#005A71",
        "secondary-color": "#EEFAF6",
        "ternary-color": "#00728D",
        "ternary-light-color": "#90CBD6",
        "ternary-extra-light-color": "#0084A4CC",
        "ternary-semi-dark-color" : "#015A71",
        "ternary-dark-color": "#002027",
        dark: "#004656",
        light: "#0099BDAB",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

