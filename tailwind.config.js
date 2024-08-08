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
        "body-color":"#090a0a",
        "inactive-container":"#0F1010",
        "active-container":"#191919",
        "text-color":"#ffffff",
      },
    },
  },
  plugins: [],
};
