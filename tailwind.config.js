/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ({ theme }) => ({
        brand: '#887098',
      }),
      fontFamily: ({ theme }) =>({
        primary: "Roboto, sans-serif",
        secondary: "Poppins, sans-serif",
      }),
    },
  },
  plugins: [],
}
