/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : "Poppins"
      },
      colors:{
        'customPrimary' : "#283593",
        'customSecondary' :'#5C6BC0',
        'customTertiary': "#AC424D",
      }
    },
  },
  plugins: [],
}
