/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        xxl: "900px",
        90: "300x"
      },
      height:{
        xxl: "300px",
      },
      fontFamily: {
        Inter: 'Inter', 
      },
      borderColor:{
        gray: "#ffff44"
      }
    },
  },
  plugins: [],
}

