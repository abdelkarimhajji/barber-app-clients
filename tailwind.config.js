/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beard': "url('./imgs/beard.jpg')",
      },
      backgroundPosition: {
        'custom-left': '80% center',
      },
      boxShadow: {
        'white': '0 0px 10px -3px rgba(255, 255, 255, 0.8), 0 4px 0px -4px rgba(255, 255, 255, 0.8)',
      },
      colors: {
        customBlue: '#212529',
        transparent: '#17181ccf',
        login: '#101418',
        brown: '#664321',
        hover: '#503316',
        orange: '#ff7f23',
        gray: '#cbcbcb',
        creatOne: '#888787',
        placeholder: '#000000AF',
      },
      fontFamily: {
        signature: ['Pacifico', 'cursive'],
      },
      screens: {
        '375': '375px',
        'xsm': '340px',
      },
    },
  },
  plugins: [],
}

