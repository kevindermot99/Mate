/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-color": "#111111",
        "light-color": "#f0f0f0",
      },
    },
  },
  plugins: [],
}

