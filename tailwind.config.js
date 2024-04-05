/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif",
      },

      colors: {
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "color-background": "#171717",
        "menu-color": "#122554"
      },

      backgroundImage: {
        "menu": "url('../assets/bx-menu.svg')",
        "close": "url('../assets/bxs-x-circle.svg')"
      }
    },
  },
  plugins: [],
}

