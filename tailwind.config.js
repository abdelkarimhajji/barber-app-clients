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
        'black2': 'rgba(0, 0, 0, 0.20) 0px 5px 15px;',
      },
      colors: {
        customBlue: '#212529',
        transparent: '#17181ccf',
        transparent2: '#17181c95',
        login: '#101418',
        brown: '#664321',
        hover: '#503316',
        orange: '#ff7f23',
        gray: '#cbcbcb',
        creatOne: '#888787',
        placeholder: '#000000AF',
        searchBar: '#66707a',
        searchBar: '#66707a',
        network: '#3a3b3c',
        facebook: '#0966ff',
        instagram: '#ff1e30',
        tiktok: '#4de0ee',
      },
      fontFamily: {
        signature: ['Pacifico', 'cursive'],
      },
      screens: {
        '280': '280px',
        '375': '375px',
        '343': '343px',
        'xsm': '340px',
        '324': '324px',
        '376': '376px',
        '400': '400px',
        '431': '431px',
        '480': '480px',
        '499': '499px',
        '500': '500px',
        '531': '531px',
        '570': '570px',
        '600': '600px',
        '700': '700px',
        '900': '900px',
        '900': '900px',
        '940': '940px',
        '980': '980px',
        '800': '800px',
        '1219': '1219px',
      },
      rotate: {
        '45': '45deg',
      }
    },
  },
  plugins: [],
}

