/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
      },
      colors:{
        primary: '#F39422',
        secondary: '#537EC5',
        backgroundPrimary: '#070F2B',
        backgroundSecondary: '#26282B',
      }
    },
  },
  plugins: [],
}

