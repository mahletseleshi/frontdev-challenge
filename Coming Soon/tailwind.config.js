/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "xs": "200px",
    },

    extend: {
      colors: {
        DesaturatedRed: 'hsl(0, 36%, 70%)',
        SoftRed: 'hsl(0, 93%, 68%)',
        DarkGrayishRed: 'hsl(0, 6%, 24%)',
        CanvasGradient: "Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)",
    
      },
      
      backgroundImage: {
        'BgPattern': "url('/images/bg-pattern-desktop.svg')",
      },
      fontFamily: {
        JosefinSans: 'Josefin Sans',
      },
      letterSpacing:{
        VeryWidest: "20px",
      }
    },
  },
  plugins: [],
}

