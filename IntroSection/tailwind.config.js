/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: "Epilogue"
      },
      maxWidth: {
        xmd:"400px"
      }, 
      fontSize: {
        xxl: "75px",
      },
      lineHeight: {
        11: "60px"
      }
    },
  },
  plugins: [],
}

