/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container:{
      center: true
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
