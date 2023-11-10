/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg': '800px'
    },
    extend: {
      colors: {
        "VeryDarkGrayishBlue": "hsl(217, 19%, 35%)",
        "DesaturatedDarkBlue": "hsl(214, 17%, 51%)",
        "GrayishBlue": "hsl(212, 23%, 69%)",
        "LightGrayishBlue": "hsl(210, 46%, 95%)",
      },
      fontFamily:{
        "manrope": ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        "article": 'url(/images/drawers.jpg)',
      }
    },
  },
  plugins: [],
}

