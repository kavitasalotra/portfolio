/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        text: 'text 3s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '0%': {
            width: '0',
          },
          '100%': {
            width: '21.5ch',
          },
        },
        cursor: {
          '0%, 100%': {
            'border-color': '#212121',
          },
        },
      },
      colors: {
        textDark: '#252525', // ADD YOUR COLOR CODE HERE
        // textLight: '#FAF7FF', // ADD YOUR COLOR CODE HERE
        textGray: ' #636363',
        textPrimaryDark: '#212529',
        // iconPrimary: '#89C053',
        // iconSecondary: '#5829FF',
        backgroundLite: 'rgba(0, 0, 0, 0.2)',
        backgroundGray: '#f7f7f7',
        primaryDark: '#fc6060',
        // primaryLight: '#F5E9F9',
        // secondaryDark: '#804BEE',
        secondaryLight: '#ffe89e',
      },
      fontSize: {
        extraLarge: '82px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
