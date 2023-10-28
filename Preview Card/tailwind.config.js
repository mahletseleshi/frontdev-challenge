/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      md: '520px'
    },
    extend: {
      colors: {
        VeryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet:  'hsl(277, 64%, 61%)',
      },
      fontFamily:{
        Inter:"Inter"
      },
      fontSize:{
        xs: '10px'
      }
    },
  },
  plugins: [],
}

