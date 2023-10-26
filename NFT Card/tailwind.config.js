/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main-BG': 'hsl(217, 54%, 11%)',
        'card-BG': 'hsl(216, 50%, 16%)',
        'blue-line': 'hsl(215, 32%, 27%)',
        'Soft-blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)'
      },
      fontFamily:{
        'Outfit': 'Outfit',
      },
      height:{
        '100vh': '100vh',
      }
    },
  },
  plugins: [],
}

