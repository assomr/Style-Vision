/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5F6FFF',
        'secondary': '#564D49', 
      },
      fontFamily: {
        'della': ['Della Respira', 'serif'], // Ajout de la police Della Respira
      },
    },
  },
  plugins: [],
};
