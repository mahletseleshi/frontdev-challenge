/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xsm': {'max': '380px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
    backgroundImage:{
      'bg-desktop': "url('/images/bg-desktop.svg')",
    },
    fontFamily: {
      "poppins": 'Poppins',

    }

    },
  },
  plugins: [],
}

