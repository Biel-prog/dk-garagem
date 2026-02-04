/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dk: {
          orange: '#FF6600', // Laranja vibrante
          dark: '#121212',   // Fundo quase preto
          card: '#1E1E1E',   // Cinza chumbo
          gray: '#B3B3B3',   // Texto cinza claro
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'], // Fonte estilo "Garagem"
      }
    },
  },
  plugins: [],
}