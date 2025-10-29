/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('/images/consulting-patern.webp')",
      },
      fontFamily: {
        'persian': ['Lahzeh', 'tahoma']
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        primary: {
          DEFAULT: '#8B7052',
          50: '#EFEBE6',
          100: '#DFD7CD',
          200: '#CFC4B9',
          300: '#C1B4A7',
          400: '#B5A596',
          500: '#AA9986',
          600: '#9F8C78',
          700: '#947F6A',
          800: '#8A745E',
          900: '#806951',
        },
        secondary: {
          DEFAULT: '#1A322D',
          50: '#DADDDD',
          100: '#BABEBD',
          200: '#9EA5A4',
          300: '#87908F',
          400: '#707A7A',
          500: '#5B6867',
          600: '#495957',
          700: '#374A47',
          800: '#253D3A',
          900: '#0D302C',
        },
        brand_gray: {
          DEFAULT: '#9C9D9D',
          50: '#F7F7F7',
          100: '#EEEEEF',
          200: '#E6E6E7',
          300: '#DEDEE0',
          400: '#D0D0D2',
          500: '#C2C3C5',
          600: '#B3B4B6',
          700: '#A4A5A8',
          800: '#9D9EA2',
          900: '#96979B',
        },  
        background: {
          DEFAULT: '#231F20',
          50: '#E7E7E8',
          100: '#D2D3D5',
          200: '#BDBEC0',
          300: '#A8A9AC',
          400: '#949599',
          500: '#818284',
          600: '#6E6E70',
          700: '#58585A',
          800: '#404041',
        },
        'representation-bg': '#25232440',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

