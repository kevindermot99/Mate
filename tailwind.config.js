/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        "main-color": "#fe5707",
        "main-color-light":"#FBAC1D",
        "light-body": "#F1EFE7",
        "dark-body-color":"#090a0a",
        "dark-inactive-container":"#0F1010",
        "dark-active-container":"#191919",
        "text-color":"#ffffff",
      },
    },
  },
  plugins: [],
};
