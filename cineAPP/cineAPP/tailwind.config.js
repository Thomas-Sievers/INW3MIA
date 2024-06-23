/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fundo-escuro': '#111A17',
        'navbar': '#244235'
      }
    },
  },
  plugins: [],
}