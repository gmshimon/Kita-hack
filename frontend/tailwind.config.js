/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#120904",
        background: "#ffffff",
        primary: "#4F6F52",
        secondary: "#ECE3CE",
        accent: "#F6B740",
      },
      fontFamily: {
        heading: ["Work Sans"],
        text: ["Merriweather"],
      },
    },
  },
  plugins: [require("daisyui")],
};
