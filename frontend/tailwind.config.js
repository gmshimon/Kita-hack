/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: '#120904',
        background: '#ffffff',
        primary: '#4F6F52',
        secondary: '#ECE3CE',
        accent: '#776B5D',
      },
      fontFamily: {
        heading: ["Work Sans"],
        text: ["Merriweather"],
      },
    },
  },
  plugins: [require("daisyui")],
};
