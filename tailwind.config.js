/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gold':{
          800:'#d9bc7c',
          900:'#c7aa6b'
        }
      },

      fontFamily:{
        'ibm':'ibm'
      }
    },
  },
  plugins: [],
}
