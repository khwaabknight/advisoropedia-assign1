/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'mono': ['Roboto mono', 'sans-serif'],
      },
      colors:{
        "blueWhite":"#e9e9f9",
        "blueWhite2":"#a9b9c9",
      }
    },
  },
  plugins: [],
}
